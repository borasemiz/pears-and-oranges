import { getServerMetricsUrl } from "@/config/clientConfig";
import { useEffect, useState } from "react";
import { AllMetricResponse } from "../types/AllMetricsResponse";
import validateMetricResponse from "./validateMetricResponse";

function useRealtimeMetricsOfServer(serverName: string) {
  const [data, setData] = useState<AllMetricResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const socket = new WebSocket(getServerMetricsUrl());
    
    socket.onmessage = event => {
      const metricResponse = validateMetricResponse(JSON.parse(event.data));
      if (metricResponse === undefined) return;

      setData(metricResponse);
      setIsLoading(false);
    };
    
    socket.onopen = () => socket.send(JSON.stringify({
      type: 'all',
      machine: serverName,
      subscribe: true, 
    }));
    

    return () => socket.close();
  }, [serverName]);

  return { isLoading, data };
}

export default useRealtimeMetricsOfServer;
