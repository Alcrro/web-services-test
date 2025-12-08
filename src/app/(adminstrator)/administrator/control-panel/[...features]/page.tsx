import Breadcrumbs from "@/components/ui/Breadcrumbs";
import DynamicFeature from "@/components/organisms/DynamicFeature";

interface PageProps {
  params: Promise<{ features: string[] }>;
  searchParams?: Promise<Record<string, string[]>>; // Add this
}
const page = async ({ params, searchParams }: PageProps) => {
  const features = (await params).features;
  const sParams = (await searchParams) || {};

  return (
    <div className="w-full text-(--color-text) flex flex-col gap-4 py-4 px-2 bg-(--color-bg-section) rounded-xl">
      <div className="breadcrumbs ">
        <Breadcrumbs />
      </div>

      <DynamicFeature features={features} searchParams={sParams} />
    </div>
  );
};

export default page;
