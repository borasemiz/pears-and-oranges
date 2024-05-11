import { AllMetricResponse, allMetricsSchema } from "../types/AllMetricsResponse";

function validateMetricResponse(metrics: unknown): AllMetricResponse | undefined {
  const { success, data } = allMetricsSchema.safeParse(metrics);

  return success ? data : undefined;
}

export default validateMetricResponse;
