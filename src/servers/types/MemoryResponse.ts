import { Memory } from "./Memory";
import { MetricResponse } from "./MetricResponse";

export type MemoryResponse = MetricResponse<{ memory: Memory; }>;