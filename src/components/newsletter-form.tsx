"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  return (
    <form
      className="w-full"
      onSubmit={(event) => {
        event.preventDefault();
        if (status !== "idle") return;
        setStatus("loading");
        window.setTimeout(() => setStatus("done"), 600);
      }}
    >
      <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          aria-label="Email address"
          disabled={status !== "idle"}
          className="h-11 rounded-lg border bg-background px-4 text-foreground shadow-none focus-visible:ring-2 focus-visible:ring-lime-400"
        />
        <Button
          type="submit"
          disabled={status !== "idle"}
          variant="default"
          size="lg"
          className="h-11 rounded-lg bg-forest-900 px-6 font-medium text-sand-100 transition-all hover:bg-forest-800 active:translate-y-px"
        >
          {status === "loading"
            ? "Sending…"
            : status === "done"
              ? "¡Gracias!"
              : "Notify me"}
        </Button>
      </div>
      <div className="mt-3 h-5" aria-live="polite">
        {status === "done" ? (
          <p className="text-sm text-forest-700">
            Gracias — we&apos;ll let you know the moment the doors open again.
          </p>
        ) : (
          <p className="text-sm text-muted-foreground">
            No spam, promise. Just one note when we reopen.
          </p>
        )}
      </div>
    </form>
  );
}