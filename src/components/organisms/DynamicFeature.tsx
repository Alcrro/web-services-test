import ClientsTable from "@/modules/clients/components/ClientsTable";
import ViewOrder from "@/components/organisms/ViewOrder";
import NewClient from "@/components/organisms/client/NewClient";
import OrderTableWithSuspense from "@/modules/orders/components/OrderTableSuspense";
import ServiceOrderStatistics from "./ServiceOrderStatistics";
import { getDynamicComponent } from "@/shared/utils/getDynamicComponent";

type AnyComponent = React.FC<Record<string, unknown>>;
interface ComponentMap {
  [key: string]: AnyComponent | ComponentMap;
}
const componentMap: ComponentMap = {
  clients: { view: ClientsTable, add: NewClient },

  orders: {
    view: OrderTableWithSuspense,
    id: ViewOrder as AnyComponent,
    statistics: ServiceOrderStatistics,
  },
  services: {},

  // add more mappings here
};

interface PageProps {
  features: string[];
  searchParams?: Record<string, string[]>;
}
const DynamicFeature = ({ features, searchParams }: PageProps) => {
  const { component: DynamicComponent, idProp } = getDynamicComponent(
    componentMap,
    features
  );

  if (!DynamicComponent) return <div>{features.join(" / ")}</div>;
  // Only wrap async table / data-heavy components in Suspense

  return (
    <DynamicComponent
      {...(idProp ? { id: idProp } : {})}
      {...(searchParams ? { searchParams } : {})} // pass searchParams here
    />
  );
};

export default DynamicFeature;
