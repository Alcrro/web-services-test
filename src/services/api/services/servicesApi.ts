import { IServiceOrderTableProps } from "@/modules/orders/components/OrdersTable";
import { IClient } from "@/modules/clients/domain/types/client.types";
import { IFilters } from "@/modules/globals/types/types";
import { IFiltersServiceOrders } from "@/modules/orders/domain/types/order.types";

import {
  IFilterServices,
  IService,
  IServiceFeature,
} from "@/modules/services/domain/types/service.types";
import { AppError } from "@/shared/utils/AppError";
import { API_URL } from "@/shared/utils/config";

export interface IAddServiceOrder {
  client: Partial<IClient>;
  serviceId: string;
  items: Partial<IServiceFeature>[];
}
export async function addServiceOrder(data: IAddServiceOrder) {
  try {
    const result = await fetch(`${API_URL}/api/services/orders`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }, // important!
    });

    return await result.json();
  } catch (error) {
    console.log(error);
  }
}

export function configureParams<T>(options: IFilters<T>, url: URL) {
  if (!options) return {};
  if (options.page !== undefined && options.page !== null)
    if (options.page) url.searchParams.append("page", String(options.page));
  if (options.limit !== undefined && options.limit !== null)
    url.searchParams.append("limit", String(options.limit));

  if (options.skip) url.searchParams.append("skip", String(options.skip));
  if (options.orderBy)
    url.searchParams.append("field", String(options.orderBy.field));

  if (options.orderBy)
    url.searchParams.append("direction", String(options.orderBy.direction));

  if (options.filters && typeof options.filters === "object") {
    for (const [key, value] of Object.entries(options.filters)) {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value));
      }
    }
  }
  return url;
}
export async function getServiceOrder(
  options: IFiltersServiceOrders
): Promise<IServiceOrderTableProps> {
  try {
    // console.log(options);

    const url = new URL(`${API_URL}/api/services/orders`);

    const urlConfigured = configureParams(options, url);

    const result = await fetch(`${urlConfigured}`.toString(), {
      method: "GET",
      headers: { "Content-Type": "application/json" }, // important!
    });

    const data: IServiceOrderTableProps = await result.json();

    return data;
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Internal error");
  }
}
export async function getServiceOrderById<T>(id: string): Promise<T> {
  try {
    const url = new URL(`${API_URL}/api/services/orders/${id}`);

    const result = await fetch(`${url}`.toString(), {
      method: "GET",
      headers: { "Content-Type": "application/json" }, // important!
    });

    const data = await result.json();

    return data;
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Internal error");
  }
}

export async function getFutureService(
  options: IFilterServices
): Promise<IService[]> {
  // Construim URL cu query dacă există slug
  const url = new URL(`${API_URL}/api/services`);

  const urlConfigured = configureParams(options, url);

  const result = await fetch(`${urlConfigured}`.toString(), {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });

  if (!result.ok) {
    throw new Error(`Failed to fetch services: ${result.statusText}`);
  }
  const data = await result.json();

  return data;
}

export async function getFutureServiceById(id: string): Promise<IService> {
  const url = new URL(`${API_URL}/api/services/${id}`);

  try {
    const response = await fetch(`${url}`.toString(), {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(response.statusText.toString());
    }
    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof AppError) {
      throw new Error(error.message);
    }
    throw new Error("internal error");
  }
}
