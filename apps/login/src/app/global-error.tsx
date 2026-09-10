"use client";

import { PrismLoginError } from "@/components/prism-login-error";
import { ThemeWrapper } from "@/components/theme-wrapper";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    // global-error must include html and body tags
    <html className="prism-font">
      <body>
        <ThemeWrapper branding={undefined}>
          <PrismLoginError reset={reset} />
        </ThemeWrapper>
      </body>
    </html>
  );
}
