import Button from "@/shared/ui/Button";
import { homePageContent } from "@/shared/data/consts/homePage/homePageContent";

const HomeHeroCta = () => {
  return (
    <>
      <Button
        variant="primary"
        href={homePageContent.hero.cta.primary.link}
        className="w-full max-w-60 animate-scaleUp"
      >
        {homePageContent.hero.cta.primary.text}
      </Button>
      <Button
        variant="primary"
        href={homePageContent.hero.cta.secondary.link}
        className="w-full max-w-60 animate-scaleUp"
      >
        {homePageContent.hero.cta.secondary.text}
      </Button>
    </>
  );
};

export default HomeHeroCta;
