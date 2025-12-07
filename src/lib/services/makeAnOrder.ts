import { ContactInfo } from "@/context/useServiceConfiguratorStore";
import { clientDetailsVerification } from "@/modules/orders/application/validators/validateOrder";
import { IServiceOrder } from "@/modules/orders/domain/types/order.types";
import { IServiceFeature } from "@/modules/services/domain/types/service.types";

const API = process.env.NEXT_PUBLIC_API;
export async function sendConfigurator(
  payload: Partial<IServiceOrder>,
  setStep: (step: number) => void,
  setContactInfo: (info: ContactInfo) => void,
  setSelectedOptions: (options: IServiceFeature[]) => void
) {
  try {
    const sanitizedData = {
      name: payload.client?.name ?? "",
      email: payload.client?.email ?? "",
      phone: payload.client?.phone,
    };
    const validation = clientDetailsVerification(sanitizedData as ContactInfo);

    if (!validation.success) {
      return {
        success: false,
        errors: validation.errors,
      };
    }
    const res = await fetch(`${API}/api/services/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return {
        success: false,
        errors: { formErrors: [res.statusText || "Unknown error"] },
      };
    }
    if (res.ok) {
      setStep(0);
      setContactInfo({ name: undefined, email: undefined, phone: undefined });
      setSelectedOptions([]);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("❌ Eroare rețea:", error);
    if (error instanceof Error) {
      return { success: false, errors: error.message };
    }
    return { success: false, errors: "internal error" };
  }
}
