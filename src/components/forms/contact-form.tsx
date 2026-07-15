"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/forms";
import { services } from "@/data/services";

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">("idle");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { service: "" },
  });

  const onSubmit = async (values: ContactFormValues) => {
    if (process.env.NODE_ENV === "development") {
      console.log("Contact form submission:", values);
    }
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-success/10 p-10 text-center">
        <CheckCircle2 className="size-12 text-success" />
        <p className="font-heading text-xl font-bold">Message Sent</p>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out. A member of our team will respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="phone">Phone Number (Optional)</Label>
          <Input id="phone" type="tel" placeholder="(555) 555-5555" {...register("phone")} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="service">Service Interested In</Label>
          <Select value={watch("service")} onValueChange={(v) => setValue("service", v, { shouldValidate: true })}>
            <SelectTrigger id="service">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.slug} value={s.slug}>
                  {s.shortName}
                </SelectItem>
              ))}
              <SelectItem value="not-sure">Not Sure Yet</SelectItem>
            </SelectContent>
          </Select>
          {errors.service ? (
            <p className="text-xs text-destructive">{errors.service.message}</p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">How Can We Help?</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your career goals, target roles, and where you're currently stuck..."
          {...register("message")}
        />
        {errors.message ? (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        ) : null}
      </div>

      <Button type="submit" size="lg" disabled={status === "submitting"} className="mt-2">
        {status === "submitting" ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <Send className="size-4" />
        )}
        Send Message
      </Button>
    </form>
  );
}
