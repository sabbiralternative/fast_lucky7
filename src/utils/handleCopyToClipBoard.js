import copy from "copy-text-to-clipboard";
import toast from "react-hot-toast";

export const handleCopyToClipBoard = (text) => {
  copy(text?.toString());
  toast.success("Copied to clipboard.");
};
