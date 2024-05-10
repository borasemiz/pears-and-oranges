import { CPU } from "./CPU";
import { Memory } from "./Memory";
import { MetricResponse } from "./MetricResponse";

export type AllMetricResponse = MetricResponse<{
  cpu: CPU[];
  memory: Memory;
}>;
