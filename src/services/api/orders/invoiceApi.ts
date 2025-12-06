export async function downloadFileApi(id: string): Promise<string> {
  const result = await fetch(`http://localhost:3000/api/invoices/${id}`);

  if (!result.ok) throw new Error("failed to fetch file");

  const buffer = await result.arrayBuffer();
  const blob = new Blob([buffer], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);

  return url;
}
