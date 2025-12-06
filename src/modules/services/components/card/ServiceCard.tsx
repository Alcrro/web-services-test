import { IService } from "../../domain/types/service.types";

const ServiceCard = ({ serviceCard }: { serviceCard: IService }) => {
  return <div>{serviceCard.initialPrice}</div>;
};

export default ServiceCard;
