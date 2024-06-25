# Next.js Express Typescript Guide - Template

This repository serves as both a guide and a template
for starting your own pure ESM Node.js backend and Next.js frontend
in a monorepo with all the recommended practices in 2024.

the commit history should serve as a guide for the steps
you can take when setting up your app/repo.

## Ingredients

### Backend

**PURE ESM**

- node v20 and above
- typescript
- my prettier config is added but feel free to remove it
- eslint
- runtime validation with [TypeBox](https://github.com/sinclairzx81/typebox).
- scripts to build, run, develop the backend (runs typescript directly on dev)
- use compat scripts specified in package.json if you don't want to install bun
- logging with pino (best & fastest prod logger)

### Frontend

- next.js 14
- shadcn ui
- share validation schemas with backend
