"use server";
import { cookies } from "next/headers";
const API = process.env.NEXT_PUBLIC_API;
export async function getLinkedOrder() {
  try {
    const token = (await cookies()).get("accessToken")?.value ?? null;
    const result = await fetch(`${API}/api/activity/check-order-linked`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });
    const data = await result.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
