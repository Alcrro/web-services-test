"use client";
import Button from "@/shared/ui/Button";
import { ArrowLeftCircle, ArrowRightCircle, StepForward } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [canGoForward, setCanGoForward] = useState(false);

  useEffect(() => {
    // window.history exists only in browser
    if (typeof window !== "undefined") {
      setCanGoForward(window.history.length > 1);
    }
  }, []);

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .slice(1)
    .map((segment, idx, arr) => ({
      name: segment,
      path: "/" + ["administrator", ...arr.slice(0, idx + 1)].join("/"),
    }));

  const formatSegment = (seg: string) =>
    seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="flex justify-between items-center w-full gap-4">
      {/* Back button */}
      <Button onClick={() => router.back()} className="p-1">
        <ArrowLeftCircle className="hover:text-gray-200 rounded" />
      </Button>

      {/* Breadcrumbs */}
      <div className="hidden sm:flex gap-1 text-sm overflow-x-auto">
        {segments.map((seg) => (
          <span
            key={seg.path}
            className="flex items-center gap-1 whitespace-nowrap"
          >
            <StepForward size={12} />
            <a
              href={seg.path}
              className="hover:underline"
              onClick={(e) => {
                e.preventDefault();
                router.push(seg.path);
              }}
            >
              {formatSegment(seg.name)}
            </a>
          </span>
        ))}
      </div>

      {/* Forward button */}
      <Button
        onClick={() => {
          if (typeof window !== "undefined") window.history.forward();
        }}
        className="p-1"
        disabled={!canGoForward}
      >
        <ArrowRightCircle
          className={`hover:text-gray-400 rounded ${
            !canGoForward ? "text-gray-400" : ""
          }`}
        />
      </Button>
    </div>
  );
};

export default Breadcrumbs;
