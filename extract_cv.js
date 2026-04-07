import fs from "fs";
import path from "path";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

const pdfPath = "./public/LabibTahmid_v1.pdf";

// Get the worker file - use an absolute path
const workerSrc = path.resolve(
  "./node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs",
);
pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

const dataBuffer = fs.readFileSync(pdfPath);
const uint8Array = new Uint8Array(dataBuffer);

async function extractText() {
  const pdf = await pdfjsLib.getDocument({
    data: uint8Array,
    useWorkerFetch: false,
  }).promise;

  let text = "";
  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map((item) => item.str).join(" ");
    text += pageText + "\n";
  }

  console.log(text);
}

extractText().catch((error) => {
  console.error("Error parsing PDF:", error);
});
