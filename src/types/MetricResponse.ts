export type MetricResponse<T> = {
  machine: string;
  timestamp: number;
} & T;