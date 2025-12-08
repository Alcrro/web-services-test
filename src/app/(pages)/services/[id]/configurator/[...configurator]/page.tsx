import ConfiguratorModal from "./ConfiguratorModal";
import { getFutureServiceById } from "@/services/api/services/servicesApi";
import SeniorWebServiceConfigurator from "@/components/organisms/service/configurator/ServieceConfigurator";
import { getDataCachedFromDB } from "@/shared/utils/getDataCached";
import { IService } from "@/modules/services/domain/types/service.types";

const page = async ({
  params,
}: {
  params: Promise<{ id: string; configurator: string[] }>;
}) => {
  const { id, configurator } = await params;

  const services = await getDataCachedFromDB<IService, typeof id>(
    getFutureServiceById,
    "featureId",
    60,
    id
  );

  if (!services)
    return (
      <ConfiguratorModal>
        <div>No services found</div>
      </ConfiguratorModal>
    );

  return (
    <>
      <SeniorWebServiceConfigurator params={configurator} services={services} />
    </>
    // <ConfiguratorModal>
    //   <Configurator service={services[0]} />
    // </ConfiguratorModal>
  );
};

export default page;
