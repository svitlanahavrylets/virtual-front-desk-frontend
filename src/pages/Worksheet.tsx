import { useEffect, useState } from "react";
import { getTasks, submitAnswer } from "../api/api";
import type { Task } from "../types";
import TaskCard from "../components/TaskCard";
import Header from "../components/Header";

const Worksheet = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<number, number>
  >({});

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleSelect = async (taskId: number, optionId: number) => {
    setSelectedOptions((prev) => ({ ...prev, [taskId]: optionId }));
    const result = await submitAnswer(taskId, optionId);
    alert(result.correct ? "Correct ✅" : "Wrong ❌");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto p-8">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            selectedOptionId={selectedOptions[task.id]}
            onSelectOption={(optionId) => handleSelect(task.id, optionId)}
          />
        ))}
      </div>
    </div>
  );
};

export default Worksheet;
