import { useEffect, useState } from "react";
import { getTasks, submitAnswer } from "../api/api";
import type { Task } from "../types";
import TaskCard from "../components/TaskCard";
import Header from "../components/Header";

const Worksheet = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [results, setResults] = useState<
    Record<number, { optionId: number; isCorrect: boolean }>
  >({});

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleSelect = async (taskId: number, optionId: number) => {
    try {
      // 1. Відправляємо на сервер і отримуємо результат { correct: true/false }
      const response = await submitAnswer(taskId, optionId);

      // 2. Зберігаємо ID вибору та результат перевірки
      setResults((prev) => ({
        ...prev,
        [taskId]: { optionId, isCorrect: response.correct },
      }));
    } catch (error) {
      console.error("Помилка збереження відповіді", error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto p-8">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            result={results[task.id]}
            onSelectOption={(optionId) => handleSelect(task.id, optionId)}
          />
        ))}
      </div>
    </div>
  );
};

export default Worksheet;
