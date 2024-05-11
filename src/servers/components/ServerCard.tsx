'use client';
import { format } from 'date-fns';
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import useRealtimeMetricsOfServer from "../services/useRealtimeMetricsOfServer";
import MetricTabs from "./MetricTabs";
import ServerCardHeader from './ServerCardHeader';

interface Props {
  serverName: string;
}

function ServerCard({ serverName }: Props) {
  const { isLoading, data } = useRealtimeMetricsOfServer(serverName);
  
  return (
    <Card>
      <ServerCardHeader serverName={serverName} data={data} />
      
      {isLoading && <Text>Data is loading...</Text>}
      {data === undefined && !isLoading && <Text>No data available for {serverName}</Text>}
      {data !== undefined && <MetricTabs serverData={data} />}
    </Card>
  );
}

export default ServerCard;