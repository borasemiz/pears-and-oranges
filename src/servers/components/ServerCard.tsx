'use client';
import { Card, Heading, Text } from "@radix-ui/themes";
import useRealtimeMetricsOfServer from "../services/useRealtimeMetricsOfServer";
import MemoryHistory from "./memory/MemoryHistory";

const HISTORY = 10;

interface Props {
  serverName: string;
}

function ServerCard({ serverName }: Props) {
  const { isLoading, data } = useRealtimeMetricsOfServer(serverName);
  
  return (
    <Card>
      <Heading as="h2">{serverName}</Heading>
      {isLoading && <Text>Data is loading...</Text>}
      {data === undefined && !isLoading && <Text>No data available for {serverName}</Text>}
      {data !== undefined && (
        <>
          <MemoryHistory historyDepth={HISTORY} serverData={data} />
        </>
      )}
    </Card>
  );
}

export default ServerCard;