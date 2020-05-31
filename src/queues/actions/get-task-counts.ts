import { TaskCount } from "../domain/task-counts";

export const getTaskCounts = () => {
  const taskCounts: TaskCount[] = [
    {
      queue: "email",
      counts: {
        queued: 19,
        processing: 2,
        successful: 119,
        failed: 3,
        retried: 3,
      },
    },
    {
      queue: "exports",
      counts: {
        queued: 19,
        processing: 2,
        successful: 119,
        failed: 3,
        retried: 3,
      },
    },
  ];
  return Promise.resolve(taskCounts);
};
