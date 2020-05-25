import React from "react";
import { TaskList } from "./tasks/task-list";
import { Task } from "./tasks/task";
import { Container } from "semantic-ui-react";

const tasks: Task[] = [
  {
    id: "some-id",
    createdAt: new Date(),
    queuedAt: new Date(),
    data: "x",
  },
  {
    id: "some-other-id",
    createdAt: new Date(),
    queuedAt: new Date(),
    data: "x",
  },
];

export const App = () => {
  return (
    <Container>
      <TaskList tasks={tasks} />
    </Container>
  );
};
