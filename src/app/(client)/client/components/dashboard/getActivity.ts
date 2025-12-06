"use server";
import { cookies } from "next/headers";

export async function getLinkedOrder() {
  try {
    const token = (await cookies()).get("accessToken")?.value ?? null;
    const result = await fetch(
      "http://localhost:3000/api/activity/check-order-linked",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      }
    );
    const data = await result.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
