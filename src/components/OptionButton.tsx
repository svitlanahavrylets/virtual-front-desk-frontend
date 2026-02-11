import type { Option } from "../types";

type Props = {
  option: Option;
  isSelected: boolean;
  isCorrectResult?: boolean;
  onSelect: () => void;
};

const OptionButton = ({
  option,
  isSelected,
  isCorrectResult,
  onSelect,
}: Props) => {
  const getVariantStyles = () => {
    if (!isSelected) {
      return "bg-white border-gray-200 hover:border-[#50c878] hover:bg-[#99e999]/10 text-gray-700";
    }
    return isCorrectResult
      ? "bg-[#50c878] border-[#50c878] text-white shadow-sm"
      : "bg-red-500 border-red-500 text-white shadow-sm";
  };

  return (
    <button
      onClick={onSelect}
      disabled={isSelected}
      className={`w-full text-left p-4 rounded-xl border-2 font-medium transition-all duration-200 ${getVariantStyles()} ${!isSelected ? "active:scale-[0.98] cursor-pointer" : "cursor-default"}`}
    >
      <div className="flex justify-between items-center">
        <span>{option.text}</span>
        {isSelected && (
          <span className="text-lg font-bold">
            {isCorrectResult ? "✓ Correct" : "✕ Wrong"}
          </span>
        )}
      </div>
    </button>
  );
};

export default OptionButton;
