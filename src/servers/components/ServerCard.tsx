'use client';
import { Card, Heading, Text } from "@radix-ui/themes";
import useRealtimeMetricsOfServer from "../services/useRealtimeMetricsOfServer";
import MemoryChart from "./memory/MemoryChart";
import { useEffect, useState } from "react";
import { Memory } from "../types/Memory";

const HISTORY = 10;

interface Props {
  serverName: string;
}

function ServerCard({ serverName }: Props) {
  const data = useRealtimeMetricsOfServer(serverName);
  const [memoryHistory, setMemoryHistory] = useState<Memory[]>([]);

  useEffect(() => {
    if (data === undefined) return;

    setMemoryHistory(previousMemory => [
      ...previousMemory,
      ...(data.memory === undefined ? [] : [data.memory])
    ].slice(-HISTORY));
  }, [data])
  
  return (
    <Card>
      <Heading as="h2">{serverName}</Heading>
      {data === undefined && <Text>No data available for {serverName}</Text>}
      {data !== undefined && (
        <>
          {data.memory !== undefined ? <MemoryChart memoryHistory={memoryHistory} /> : null}
        </>
      )}
    </Card>
  );
}

export default ServerCard;