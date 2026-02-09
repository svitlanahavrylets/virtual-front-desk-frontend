import type { Option } from "../types";

type Props = {
  option: Option;
  isSelected: boolean;
  onSelect: () => void;
};

const OptionButton = ({ option, isSelected, onSelect }: Props) => {
  const bgColor = isSelected
    ? option.isCorrect
      ? "bg-green-300"
      : "bg-red-300"
    : "bg-green-100 hover:bg-green-200";

  return (
    <button
      onClick={onSelect}
      className={`p-3 rounded-lg font-medium transition-colors duration-200 ${bgColor}`}
    >
      {option.text}
    </button>
  );
};

export default OptionButton;
