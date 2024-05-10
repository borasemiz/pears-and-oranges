import { getServerMetricsUrl } from "@/config/clientConfig";
import { useEffect, useState } from "react";
import { AllMetricResponse } from "../types/AllMetricsResponse";

function useRealtimeMetricsOfServer(serverName: string) {
  const [data, setData] = useState<Partial<AllMetricResponse>>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const socket = new WebSocket(getServerMetricsUrl());
    socket.onmessage = event => {
      setData(JSON.parse(event.data));
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
