import { throwIfEmpty } from "./throwIfEmpty";

export const getServerMetricsUrl = () => throwIfEmpty(process.env.NEXT_PUBLIC_SERVER_METRICS_URL);
