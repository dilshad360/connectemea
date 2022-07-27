import { DialogProps } from "../types";
import {
  CheckCircleIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/outline";
import DialogLayout from "../../../layout/dialogLayout";
const ConfirmDialog = ({ title, description }: DialogProps) => {
  return (
    <DialogLayout>
      <CheckCircleIcon className="h-20 w-20 text-green-500/75 my-2" />
      {title && (
        <span className="text-lg text-black mb-3 font-medium">{title}</span>
      )}
      {description && (
        <span className="text-sm text-gray-600 mb-3 text-center md:w-[80%]">
          {description}
        </span>
      )}
      <button className="rounded flex items-center justify-center p-2 px-4 bg-green-500 text-white shadow-lg shadowg-green-500/50 transition-transform hover:scale-[1.03]">
        Home <ArrowCircleRightIcon className="h-5 w-5 text-white ml-1" />
      </button>
    </DialogLayout>
  );
};
export default ConfirmDialog;
