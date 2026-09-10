# Prism Login

This repository is the Prism-maintained fork of ZITADEL Login V2. ZITADEL remains responsible for credentials, MFA, passkeys and identity-provider federation; this fork owns only the Prism login experience and its deployment.

## Local configuration

Start from `apps/login/.env.prism.example`. Point `ZITADEL_API_URL` to the Prism ZITADEL instance and provide a dedicated Login V2 service-user token through the deployment secret store.

The production build uses `NEXT_PUBLIC_BASE_PATH=/ui/v2/login`. Configure the ZITADEL Login V2 base URI to the public URL serving that path, then test authorization, invitation, password recovery, MFA and logout before promotion.
