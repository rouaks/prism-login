"use client";

import { Button } from "@/components/button";
import { PrismBrand } from "@/components/prism-brand";

export function PrismLoginError({ reset }: { reset: () => void }) {
  return (
    <main className="prism-login-shell flex min-h-screen items-center justify-center p-4">
      <section className="prism-error-panel" role="alert">
        <PrismBrand />
        <div>
          <p className="prism-error-panel__eyebrow">Connexion indisponible</p>
          <h1>Nous ne pouvons pas ouvrir votre session.</h1>
          <p>Le service d’identité ne répond pas correctement. Réessayez dans quelques instants.</p>
        </div>
        <Button type="button" onClick={reset}>
          Réessayer
        </Button>
      </section>
    </main>
  );
}
