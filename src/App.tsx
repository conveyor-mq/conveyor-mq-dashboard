import React, { useState, useEffect } from "react";
import { Container, Header } from "semantic-ui-react";
import { QueueList } from "./queues/queue-list";
import { Queue } from "./queues/queue";
import { getQueues } from "./queues/actions/get-queues";

export const App = () => {
  const [queues, setQueues] = useState<Queue[]>([]);
  useEffect(() => {
    const fetchQueues = async () => {
      setQueues(await getQueues());
    };
    fetchQueues();
  }, []);
  return (
    <Container fluid style={{ padding: "30px" }}>
      <Header size="huge">ConveyorMQ Dashboard</Header>
      <QueueList queues={queues} />
    </Container>
  );
};
