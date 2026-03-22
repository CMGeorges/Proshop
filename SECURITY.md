# Security Policy

## Supported Versions

Only the latest maintained branch should be considered supported for security fixes.

## Reporting a Vulnerability

Do not open a public issue for a security vulnerability.

Report it privately to the project maintainers with:

- a short description of the issue
- reproduction steps
- impact assessment
- affected environment or version

## Security Baseline

This repository uses a DevSecOps baseline with:

- automated dependency review on pull requests
- automated secret scanning
- CodeQL static analysis
- scheduled dependency updates through Dependabot
- npm audit checks in CI for root, backend, and frontend packages

## Secure Development Expectations

- Never commit `.env` files, tokens, or private keys.
- Prefer environment variables for secrets and connection strings.
- Keep dependencies updated and review high severity advisories quickly.
- Validate uploaded files, request payloads, and user-controlled input.
- Avoid logging credentials, tokens, or personally identifiable information.

