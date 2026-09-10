"use client";

import { PrismLoginError } from "@/components/prism-login-error";

export default function Error({ reset }: { reset: () => void }) {
  return <PrismLoginError reset={reset} />;
}
