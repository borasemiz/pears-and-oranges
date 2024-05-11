'use client';
import { AllMetricResponse } from "@/servers/types/AllMetricsResponse";
import { Memory } from "@/servers/types/Memory";
import { useEffect, useState } from "react";
import MemoryChart from "./MemoryChart";

const HISTORY_DEPTH = 10;

interface Props {
  serverData: AllMetricResponse;
}

function MemoryHistory({ serverData }: Props) {
  const [memoryHistory, setMemoryHistory] = useState<Memory[]>([]);

  useEffect(() => {
    setMemoryHistory(previousMemory => [
      ...previousMemory,
      serverData.memory,
    ].slice(-HISTORY_DEPTH));
  }, [serverData, HISTORY_DEPTH]);

  return <MemoryChart memoryHistory={memoryHistory} />;
}

export default MemoryHistory;