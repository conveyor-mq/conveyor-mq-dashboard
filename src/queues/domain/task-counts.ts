export interface Counts {
  queued: number;
  processing: number;
  successful: number;
  failed: number;
  retried: number;
}

export interface TaskCount {
  queue: string;
  counts: Counts;
}
