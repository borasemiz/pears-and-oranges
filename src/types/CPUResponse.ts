import { CPU } from "./CPU";
import { MetricResponse } from "./MetricResponse";

export type CPUResponse = MetricResponse<{ cpu: CPU[] }>;