import { exec } from "child_process";

console.log("🚀 Starting n8n with HTTPS tunnel on Render...");

exec("npx n8n start --tunnel", (err, stdout, stderr) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log(stdout);
  console.error(stderr);
});
