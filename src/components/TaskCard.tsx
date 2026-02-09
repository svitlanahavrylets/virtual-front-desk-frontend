import type { Task } from "../types";
import OptionButton from "./OptionButton";

type Props = {
  task: Task;
  selectedOptionId: number | undefined;
  onSelectOption: (optionId: number) => void;
};

const TaskCard = ({ task, selectedOptionId, onSelectOption }: Props) => {
  return (
    <div className="mb-6 p-6 border rounded-xl shadow-md bg-white">
      <h2 className="mb-4 font-semibold text-lg">{task.instruction}</h2>
      <div className="flex flex-col gap-3">
        {task.options.map((opt) => (
          <OptionButton
            key={opt.id}
            option={opt}
            isSelected={selectedOptionId === opt.id}
            onSelect={() => onSelectOption(opt.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskCard;
