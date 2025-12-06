import { Download } from "lucide-react";
import React from "react";
import Button from "../../../shared/ui/Button";

const DownloadButton = ({ actionHandle }: { actionHandle: () => void }) => {
  return (
    <Button onClick={actionHandle}>
      <Download
        size={18}
        className="text-gray-400 hover:text-(--color-text) cursor-pointer"
      />
    </Button>
  );
};

export default DownloadButton;
