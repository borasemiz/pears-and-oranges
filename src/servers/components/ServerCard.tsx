'use client';
import { format } from 'date-fns';
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import useRealtimeMetricsOfServer from "../services/useRealtimeMetricsOfServer";
import MetricTabs from "./MetricTabs";

interface Props {
  serverName: string;
}

function ServerCard({ serverName }: Props) {
  const { isLoading, data } = useRealtimeMetricsOfServer(serverName);
  
  return (
    <Card>
      <Flex gap="2" align="center">
        <Heading as="h2">{serverName}</Heading>
        {data !== undefined && <Text>Last Updated: {format(new Date(data.timestamp), 'PPpp')}</Text>}
      </Flex>
      
      {isLoading && <Text>Data is loading...</Text>}
      {data === undefined && !isLoading && <Text>No data available for {serverName}</Text>}
      {data !== undefined && <MetricTabs serverData={data} />}
    </Card>
  );
}

export default ServerCard;