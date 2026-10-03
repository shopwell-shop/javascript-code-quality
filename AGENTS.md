# Shopwell JavaScript Code Quality

This is an independently maintained Shopwell product repository. It must not
belong to an upstream GitHub fork network or retain upstream Git history.

## Licensing

- Shopwell-owned code and every publishable package use Apache License 2.0.
- Every project-owned package manifest declares `Apache-2.0`.
- Project-owned `LICENSE` files contain the standard Apache-2.0 text.
- Original upstream legal text is preserved verbatim in the root `NOTICE`.
- Published npm packages must include both `LICENSE` and `NOTICE`.

## Synchronization guardrails

- Keep upstream logic and directory structure unchanged except for registered
  Shopwell branding, licensing, publication metadata, and true customizations.
- Never merge or cherry-pick upstream history. Port upstream commits through
  the sync control repository.
- Do not introduce runtime references to upstream organizations, packages, or
  repositories. Package names use the `@shopwell-ag` scope.
- Use an existing `sync-upstream/*` branch until its pull request is complete.

Before committing, pushing, or publishing, run:

```bash
../sync-upstream/bin/syncctl audit-license javascript-code-quality
../sync-upstream/bin/syncctl audit-repository-identity javascript-code-quality
../sync-upstream/bin/syncctl audit-dependency-parity javascript-code-quality
../sync-upstream/bin/syncctl audit-upstream-dependencies javascript-code-quality
```
