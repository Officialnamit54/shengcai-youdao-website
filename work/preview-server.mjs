import { createReadStream, existsSync, readFileSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { createServer } from "node:http";

const root = process.cwd();
const previewRoot = join(root, "work", "preview");
const publicRoot = join(root, "public");
const port = Number(process.env.PORT || 3000);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp"
};

function safePath(base, urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const resolved = normalize(join(base, decoded));
  return resolved.startsWith(base) ? resolved : null;
}

const server = createServer((request, response) => {
  const url = request.url || "/";

  if (url === "/" || url.startsWith("/#")) {
    const html = readFileSync(join(previewRoot, "index.html"), "utf8");
    response.writeHead(200, { "Content-Type": mimeTypes[".html"] });
    response.end(html);
    return;
  }

  if (url === "/health") {
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("ok");
    return;
  }

  const base = url.startsWith("/images/") || url.startsWith("/brand/") ? publicRoot : previewRoot;
  const filePath = safePath(base, url);

  if (!filePath || !existsSync(filePath)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream"
  });
  createReadStream(filePath).pipe(response);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Preview server running at http://localhost:${port}/`);
});
