"use client";
import { useEffect } from "react";

const DownloadFile = (id: string) => {
  useEffect(() => {
    async function fetchBob() {
      const result = await fetch(`/api/invoices/${id}`);

      if (!result.ok) return;

      const blob = await result.blob();

      const url = URL.createObjectURL(blob);
      return url;
    }
    fetchBob();
  }, [id]);

  return null;
};

export default DownloadFile;
