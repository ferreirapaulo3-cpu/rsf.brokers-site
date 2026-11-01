// Copies the two things `next build` with output:"standalone" doesn't put
// into .next/standalone on its own: the static chunks and the public/ folder.
// Uses fs.cpSync (Node core, no dependency) instead of `cp -r` so the build
// works identically on the Linux VPS and on a Windows dev machine.
import { cpSync } from "node:fs";

cpSync(".next/static", ".next/standalone/.next/static", { recursive: true });
cpSync("public", ".next/standalone/public", { recursive: true });

console.log("Copied .next/static and public/ into .next/standalone/");
