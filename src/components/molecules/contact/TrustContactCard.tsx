import { FC } from "react";
import { ContactTestimonial } from "@/shared/data/consts/contactPage/contactPageData";
import TrustContactImage from "../../atoms/contact/TrustContactImage";
import TrustContactName from "../../atoms/contact/TrustContactName";
import TrustContactFeedback from "../../atoms/contact/TrustContactFeedback";

interface IContactTrustProps {
  item: ContactTestimonial;
}
const TrustContactCard: FC<IContactTrustProps> = ({ item }) => {
  return (
    <div className="flex flex-col justify-between text-center">
      <div className="profile_icon mx-auto">
        <TrustContactImage img={undefined} name={item.name} />
      </div>
      <TrustContactName name={item.name} />
      <TrustContactFeedback feedback={item.feedback} />
    </div>
  );
};

export default TrustContactCard;
