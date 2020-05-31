import React, { useState, useEffect } from "react";
import { Container, Menu } from "semantic-ui-react";
import { QueueList } from "./queues/views/queue-list";
import { Queue } from "./queues/domain/queue";
import { getQueues } from "./queues/actions/get-queues";
import { getTaskCounts } from "./queues/actions/get-task-counts";
import { TaskCount } from "./queues/domain/task-counts";

export const App = () => {
  const [queues, setQueues] = useState<Queue[]>([]);
  useEffect(() => {
    const fetchQueues = async () => {
      setQueues(await getQueues());
    };
    fetchQueues();
  }, []);
  const [queueTaskCounts, setQueueTaskCounts] = useState<TaskCount[]>([]);
  useEffect(() => {
    const fetchQueueCounts = async () => {
      setQueueTaskCounts(await getTaskCounts());
    };
    fetchQueueCounts();
  }, []);
  return (
    <Container fluid>
      <Menu pointing secondary>
        <Menu.Item header>Conveyor MQ Dashboard</Menu.Item>
        <Menu.Item active name="Queues" />
      </Menu>
      <QueueList queues={queues} taskCounts={queueTaskCounts} />
    </Container>
  );
};
