import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOCALES_DIR = path.join(__dirname, "..", "src", "i18n", "locales");
const LANGUAGES = ["en", "ja", "fil"];

for (const lang of LANGUAGES) {
  const inputPath = path.join(LOCALES_DIR, `${lang}.json`);

  if (!fs.existsSync(inputPath)) {
    console.warn(`⚠️  Skipping ${lang}: file not found at ${inputPath}`);
    continue;
  }

  const raw = fs.readFileSync(inputPath, "utf-8");
  const full = JSON.parse(raw);

  if (!full.products) {
    console.warn(`⚠️  ${lang}.json has no "products" key — skipping`);
    continue;
  }

  const { products, ...uiStrings } = full;

  fs.writeFileSync(
    path.join(LOCALES_DIR, `${lang}.json`),
    JSON.stringify(uiStrings, null, 2),
    "utf-8"
  );

  fs.writeFileSync(
    path.join(LOCALES_DIR, `${lang}.products.json`),
    JSON.stringify(products, null, 2),
    "utf-8"
  );

  const uiSize = Buffer.byteLength(JSON.stringify(uiStrings), "utf-8");
  const prodSize = Buffer.byteLength(JSON.stringify(products), "utf-8");

  console.log(
    `✅  ${lang}: UI ${(uiSize / 1024).toFixed(1)} KB | products ${(prodSize / 1024).toFixed(1)} KB`
  );
}

console.log("\nDone!");