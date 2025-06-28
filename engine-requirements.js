const nodeVersion = process.versions.node;
const major = parseInt(nodeVersion.split(".")[0], 10);

if (major < 20) {
  console.error(`
───────────────────────────────────
    Unsupported Node.js Version Detected
───────────────────────────────────
  Required : Node.js v20 or higher
  Detected : v${nodeVersion}

  This application depends on modern Node.js features and libraries
  that require Node.js v20+. Running on an older version may cause:

  • Incompatibility with latest packages and frameworks
  • Missing native APIs (e.g., fetch, structuredClone, node:test)
  • Security vulnerabilities and lack of long-term support
  • Errors during module resolution (especially with ESM support)

  ⚠️ Many libraries and modern engineering tools no longer support
     Node.js versions < 18 due to deprecated features.

  ➤ To ensure optimal compatibility, performance, and security,
    please upgrade your Node.js installation:

    → https://nodejs.org/en/download

───────────────────────────────────
`);
  process.exit(1);
}
