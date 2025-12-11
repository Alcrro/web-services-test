import { NextRequest } from "next/server";
import puppeteer from "puppeteer";

export async function GET(
  _req: NextRequest,
  params: { params: Promise<{ id: string }> }
) {
  const id = (await params.params).id;

  // 1️⃣ Preluăm order-ul
  const url = `http://localhost:3000/invoices/pdf/${id}`;

  if (!url) {
    return new Response(JSON.stringify({ error: "Order not found" }), {
      status: 404,
    });
  }

  // 3️⃣ Launch Puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // 4️⃣ Set HTML content
  await page.goto(url, { waitUntil: "networkidle0" });

  // 5️⃣ Generate PDF
  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,
  });

  await browser.close();

  // 6️⃣ Return PDF response
  return new Response(Buffer.from(pdfBuffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=invoice-${id}.pdf`,
    },
  });
}
