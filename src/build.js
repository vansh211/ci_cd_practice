import { mkdir, copyFile } from "node:fs/promises";
import { resolve } from "node:path";

const rootDir = process.cwd();
const sourceFile = resolve(rootDir, "server.js");
const distDir = resolve(rootDir, "dist");
const distFile = resolve(distDir, "server.js");

await mkdir(distDir, { recursive: true });
await copyFile(sourceFile, distFile);

console.log("Build complete: dist/server.js created");
