import { z } from 'zod';
import { CPU } from "./CPU";
import { Memory } from "./Memory";
import { MetricResponse } from "./MetricResponse";

export const allMetricsSchema = z.object({
  machine: z.string(),
  timestamp: z.number(),
  cpu: z.array(z.object({
    id: z.number(),
    usage: z.number(),
  })),
  memory: z.object({
    total: z.number(),
    free: z.number(),
    used: z.number(),
    usedPercentage: z.number(),
    freePercentage: z.number(),
  }),
});

export type AllMetricResponse = MetricResponse<{
  cpu: CPU[];
  memory: Memory;
}>;
