# Gefleckte Kernkraft

This is a simple timer to assist in core strength training after rock climbing.

It is built using Lynx and native Android Kotlin code. The UI is specifically designed for round Wear OS watches.

## Getting Started

### Lynx

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm run dev
```

Scan the QRCode in the terminal with your LynxExplorer App to see the result.

You can start editing the page by modifying `src/App.tsx`. The page auto-updates as you edit the file.

Lastly export the lynx bundle to use in the final native application.

```bash
pnpm run build
```

### Native Code

Copy the generated `main.lynx.bundle` from `./dist` to `./app/src/main/assets`. Then simply run / build the app through gradle.