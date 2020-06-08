import React from 'react';
import { Table } from 'semantic-ui-react';
import { map, reduce } from 'lodash';
import { Queue } from '../domain/queue';
import { TaskCount, Counts } from '../domain/task-counts';

export const QueueList = ({
  queues,
  taskCounts,
}: {
  queues: Queue[];
  taskCounts: TaskCount[];
}) => {
  const countsByQueue: { [key: string]: Counts } = reduce(
    taskCounts,
    (acc, curr) => {
      return { ...acc, [curr.queue]: curr.counts };
    },
    {},
  );
  return (
    <div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Queue</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Queued</Table.HeaderCell>
            <Table.HeaderCell>Processing</Table.HeaderCell>
            <Table.HeaderCell>Successful</Table.HeaderCell>
            <Table.HeaderCell>Failed</Table.HeaderCell>
            <Table.HeaderCell>Retried</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {map(queues, (queue) => {
            const counts = countsByQueue[queue.name] || {};
            return (
              <Table.Row>
                <Table.Cell>{queue.name}</Table.Cell>
                <Table.Cell>{queue.status}</Table.Cell>
                <Table.Cell>{counts.queued}</Table.Cell>
                <Table.Cell>{counts.processing}</Table.Cell>
                <Table.Cell>{counts.successful}</Table.Cell>
                <Table.Cell>{counts.failed}</Table.Cell>
                <Table.Cell>{counts.retried}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};
