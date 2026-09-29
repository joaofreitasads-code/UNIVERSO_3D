// server.ts
import express from "express";
import path from "path";
var app = express();
var PORT = Number(process.env.PORT) || 3e3;
var distPath = path.resolve(process.cwd(), "dist");
app.use((req, res, next) => {
  if (req.path === "/" || req.path === "/index.html" || !path.extname(req.path)) {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
  } else if (req.path.startsWith("/assets/")) {
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  }
  next();
});
app.use(express.static(distPath, {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith(".html")) {
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      res.setHeader("Pragma", "no-cache");
      res.setHeader("Expires", "0");
    }
  }
}));
app.get("*", (_req, res) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  res.sendFile(path.join(distPath, "index.html"));
});
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Production server running at http://0.0.0.0:${PORT}`);
});
