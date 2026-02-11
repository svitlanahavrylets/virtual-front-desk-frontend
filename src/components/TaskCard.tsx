import type { Task } from "../types";
import OptionButton from "./OptionButton";

type Props = {
  task: Task;
  result: { optionId: number; isCorrect: boolean } | undefined;
  onSelectOption: (optionId: number) => void;
};

const TaskCard = ({ task, result, onSelectOption }: Props) => {
  return (
    <div className="mb-8 p-8 border-none rounded-2xl shadow-xl bg-white ring-1 ring-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <span className="bg-[#50c878] text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold">
          ?
        </span>
        <h2 className="font-bold text-xl text-gray-800 italic">
          {task.instruction}
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        {task.options.map((opt) => (
          <OptionButton
            key={opt.id}
            option={opt}
            isSelected={result?.optionId === opt.id}
            isCorrectResult={result?.isCorrect}
            onSelect={() => onSelectOption(opt.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskCard;
