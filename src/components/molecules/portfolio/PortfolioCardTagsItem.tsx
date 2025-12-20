import { IconMapper } from "@/shared/data/consts/portfololioPage/iconMapper";
import { PortfolioTag } from "@/shared/data/consts/portfololioPage/portfolioPageContent";

const PortfolioTagsItem = ({ tag }: { tag: PortfolioTag }) => {
  return (
    <div className="flex flex-col items-center gap-2 text-sm px-2 py-1 rounded text-(--color-text-secondary)">
      {tag.value && <span>{tag.type}</span>}
      <span className="flex flex-col gap-2 justify-center min-w-[60px] items-center">
        {Array.isArray(tag.value)
          ? tag.value.map((value, index) => (
              <span key={index}>{IconMapper[value]}</span>
            ))
          : IconMapper[tag.value]}
      </span>
    </div>
  );
};

export default PortfolioTagsItem;
