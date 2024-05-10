'use client';
import { AllMetricResponse } from "@/servers/types/AllMetricsResponse";
import { Memory } from "@/servers/types/Memory";
import { useEffect, useState } from "react";
import MemoryChart from "./MemoryChart";

const HISTORY_DEPTH = 10;

interface Props {
  serverData: Partial<AllMetricResponse>;
}

function MemoryHistory({ serverData }: Props) {
  const [memoryHistory, setMemoryHistory] = useState<Memory[]>([]);

  useEffect(() => {
    setMemoryHistory(previousMemory => [
      ...previousMemory,
      ...(serverData.memory === undefined ? [] : [serverData.memory])
    ].slice(-HISTORY_DEPTH));
  }, [serverData, HISTORY_DEPTH]);

  return (
    serverData.memory !== undefined ? <MemoryChart memoryHistory={memoryHistory} /> : null
  )
}

export default MemoryHistory;