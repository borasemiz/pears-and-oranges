import { getServerMetricsUrl } from "@/config/clientConfig";
import { useEffect, useState } from "react";
import { AllMetricResponse } from "../types/AllMetricsResponse";

function useRealtimeMetricsOfServer(serverName: string) {
  const [data, setData] = useState<Partial<AllMetricResponse>>();

  useEffect(() => {
    const socket = new WebSocket(getServerMetricsUrl());
    socket.onmessage = event => setData(JSON.parse(event.data));
    socket.onopen = () => socket.send(JSON.stringify({
      type: 'all',
      machine: serverName,
      subscribe: true, 
    }));
    

    return () => socket.close();
  }, [serverName]);

  return data;
}

export default useRealtimeMetricsOfServer;
