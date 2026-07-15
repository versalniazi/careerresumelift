"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Download, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { leadCaptureSchema, type LeadCaptureValues } from "@/lib/validations/forms";

export function ResourceDownloadForm({ resourceTitle }: { resourceTitle: string }) {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadCaptureValues>({
    resolver: zodResolver(leadCaptureSchema),
  });

  const onSubmit = async (values: LeadCaptureValues) => {
    if (process.env.NODE_ENV === "development") {
      console.log("Resource download request:", values);
    }
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-success/10 p-8 text-center">
        <CheckCircle2 className="size-10 text-success" />
        <p className="font-heading text-lg font-bold">Check Your Inbox</p>
        <p className="text-sm text-muted-foreground">
          We&rsquo;ve sent &ldquo;{resourceTitle}&rdquo; to your email address.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="Jane Doe" {...register("name")} />
        {errors.name ? <p className="text-xs text-destructive">{errors.name.message}</p> : null}
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" placeholder="jane@email.com" {...register("email")} />
        {errors.email ? <p className="text-xs text-destructive">{errors.email.message}</p> : null}
      </div>
      <Button type="submit" disabled={status === "submitting"} className="mt-2">
        {status === "submitting" ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <Download className="size-4" />
        )}
        Send Me the Free Resource
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        No spam. Unsubscribe anytime. See our{" "}
        <a href="/privacy-policy" className="underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
