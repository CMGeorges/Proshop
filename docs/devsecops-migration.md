# DevSecOps Migration

## What was added

- A GitHub Actions pipeline for dependency review, secret scanning, CodeQL, and `npm audit`
- Dependabot updates for npm packages and GitHub Actions
- A pull request template with a lightweight security checklist
- A repository `SECURITY.md` policy

## Security gates

The repository now blocks or surfaces risk through:

- dependency review on pull requests for risky package changes
- weekly secret scanning
- weekly CodeQL analysis and analysis on push or pull request
- package audits on root, backend, and frontend workspaces

## Next recommended steps

1. Enable GitHub Advanced Security features available for the repository.
2. Add environment-specific secrets only through GitHub Secrets or platform secret stores.
3. Add backend runtime protections such as `helmet`, request rate limiting, and upload validation.
4. Replace legacy frontend tooling if possible, because older `react-scripts` stacks keep inherited vulnerabilities alive.
5. Add tests for authentication, authorization, upload handling, and error paths.

## Operational notes

- The audit job is intentionally strict on production dependencies with severity `high` and above.
- Dependabot is limited to weekly cadence to reduce noise while keeping updates flowing.
