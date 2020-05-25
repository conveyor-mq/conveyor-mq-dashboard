import { Queue } from "../queue";

export const getQueues = () => {
  const queues: Queue[] = [
    {
      name: "email",
    },
    {
      name: "exports",
    },
  ];
  return Promise.resolve(queues);
};
