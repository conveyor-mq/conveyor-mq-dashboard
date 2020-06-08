import { Queue } from '../domain/queue';

export const getQueues = () => {
  const queues: Queue[] = [
    {
      name: 'email',
      status: 'active',
    },
    {
      name: 'exports',
      status: 'active',
    },
  ];
  return Promise.resolve(queues);
};
