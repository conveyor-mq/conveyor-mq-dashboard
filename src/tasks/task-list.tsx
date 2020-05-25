import React from "react";
import { Task } from "./task";
import { Table } from "semantic-ui-react";

export const TaskList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Task ID</Table.HeaderCell>
          <Table.HeaderCell>Created At</Table.HeaderCell>
          <Table.HeaderCell>Queued At</Table.HeaderCell>
          <Table.HeaderCell>Data</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {tasks.map((task) => (
          <Table.Row>
            <Table.Cell>{task.id}</Table.Cell>
            <Table.Cell>{task.createdAt.toISOString()}</Table.Cell>
            <Table.Cell>{task.queuedAt.toISOString()}</Table.Cell>
            <Table.Cell>{task.data}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
