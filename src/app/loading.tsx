export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
        <span className="size-5 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
      </div>
      <p className="text-sm text-muted-foreground">Loading…</p>
    </div>
  );
}
