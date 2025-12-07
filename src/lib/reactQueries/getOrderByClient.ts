import { useQuery } from "@tanstack/react-query";

const API = process.env.NEXT_PUBLIC_API;
export function useGetOrderByClient() {
  return useQuery({
    queryKey: ["getOrderByClient"],
    queryFn: () => fetchOrdersByClient(),
  });
}

export async function fetchOrdersByClient() {
  try {
    const response = await fetch(`${API}/api/services/orders/clientId`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const responsee = await response.json();

    return responsee;
  } catch (error) {
    console.log(error);

    throw new Error("internal error");
  }
}
