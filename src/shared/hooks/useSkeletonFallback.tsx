import { Dispatch, SetStateAction, useEffect } from "react";

export const useSkeletonFallback = <T,>({
  filterKey,
  data,
  setVisibleProjects,
  setLoading,
}: {
  filterKey: string;
  data: T[];
  setVisibleProjects: Dispatch<SetStateAction<T[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}) => {
  const services = filterKey;

  useEffect(() => {
    setLoading(true);
    const filtered =
      !services || services.toLowerCase() === "all"
        ? data
        : data.filter(
            (p) =>
              (p as unknown as { category: string }).category.toLowerCase() ===
              services.toLowerCase()
          );
    const timer = setTimeout(() => {
      setLoading(false);
      setVisibleProjects(filtered);
    }, 1600);
    return () => clearTimeout(timer);
  }, [filterKey, data, services, setLoading, setVisibleProjects]);
};
