import React from "react";
import { Item, Segment, Grid, Statistic, Header } from "semantic-ui-react";
import { Queue } from "./queue";
import { map } from "lodash";

export const QueueListItem = ({ queue }: { queue: Queue }) => {
  return (
    <Item>
      <Item.Content>
        <Item.Header>
          <Header>{queue.name}</Header>
        </Item.Header>
        <Item.Description>Status: Active</Item.Description>
        <div style={{ padding: "10px" }}>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Header>Task statuses</Header>
                <Segment inverted>
                  <Statistic.Group inverted size="mini" widths={4}>
                    <Statistic>
                      <Statistic.Value>6</Statistic.Value>
                      <Statistic.Label>Queued</Statistic.Label>
                    </Statistic>
                    <Statistic>
                      <Statistic.Value>2</Statistic.Value>
                      <Statistic.Label>Processing</Statistic.Label>
                    </Statistic>
                    <Statistic>
                      <Statistic.Value>27</Statistic.Value>
                      <Statistic.Label>Successful</Statistic.Label>
                    </Statistic>
                    <Statistic>
                      <Statistic.Value>3</Statistic.Value>
                      <Statistic.Label>Failed</Statistic.Label>
                    </Statistic>
                  </Statistic.Group>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Header>Pending times (ms)</Header>
                <Statistic.Group size="mini" widths={6}>
                  <Statistic>
                    <Statistic.Value>250</Statistic.Value>
                    <Statistic.Label>1m</Statistic.Label>
                  </Statistic>
                  <Statistic>
                    <Statistic.Value>307</Statistic.Value>
                    <Statistic.Label>5m</Statistic.Label>
                  </Statistic>
                  <Statistic>
                    <Statistic.Value>271</Statistic.Value>
                    <Statistic.Label>30m</Statistic.Label>
                  </Statistic>
                </Statistic.Group>
              </Grid.Column>
              <Grid.Column>
                <Header>Processing times (ms)</Header>
                <Statistic.Group size="mini" widths={6}>
                  <Statistic>
                    <Statistic.Value>22</Statistic.Value>
                    <Statistic.Label>1m</Statistic.Label>
                  </Statistic>
                  <Statistic>
                    <Statistic.Value>31</Statistic.Value>
                    <Statistic.Label>5m</Statistic.Label>
                  </Statistic>
                  <Statistic>
                    <Statistic.Value>21</Statistic.Value>
                    <Statistic.Label>30m</Statistic.Label>
                  </Statistic>
                </Statistic.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Item.Content>
    </Item>
  );
};

export const QueueList = ({ queues }: { queues: Queue[] }) => {
  return (
    <div>
      {map(queues, (queue) => {
        return (
          <Segment style={{ padding: "10px" }}>
            <Item.Group>
              <QueueListItem queue={queue} />
            </Item.Group>
          </Segment>
        );
      })}
    </div>
  );
};
