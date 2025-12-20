import { formatPriceValue } from "@/shared/utils/formatServicesPrice";

const ConfigurationFeaturesBasePrice = ({ price }: { price: number }) => {
  return (
    <div className="text-sm text-slate-500">
      Base: {formatPriceValue(price)}
    </div>
  );
};

export default ConfigurationFeaturesBasePrice;
