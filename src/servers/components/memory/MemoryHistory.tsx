'use client';
import { AllMetricResponse } from "@/servers/types/AllMetricsResponse";
import { Memory } from "@/servers/types/Memory";
import { useEffect, useState } from "react";
import MemoryChart from "./MemoryChart";

interface Props {
  serverData: Partial<AllMetricResponse>;
  historyDepth: number;
}

function MemoryHistory({ serverData, historyDepth }: Props) {
  const [memoryHistory, setMemoryHistory] = useState<Memory[]>([]);

  useEffect(() => {
    setMemoryHistory(previousMemory => [
      ...previousMemory,
      ...(serverData.memory === undefined ? [] : [serverData.memory])
    ].slice(-historyDepth));
  }, [serverData, historyDepth]);

  return (
    serverData.memory !== undefined ? <MemoryChart memoryHistory={memoryHistory} /> : null
  )
}

export default MemoryHistory;