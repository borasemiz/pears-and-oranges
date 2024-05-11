'use client';
import { Grid, Text, Card, Heading } from '@radix-ui/themes';
import useRealtimeMetricsOfServer from "@/servers/services/useRealtimeMetricsOfServer";
import MemoryHistory from '@/servers/components/memory/MemoryHistory';
import CPUHistory from '@/servers/components/cpus/CPUHistory';
import { capitalCase } from 'case-anything';

interface Props {
  params: {
    id: string;
  };
}

export default function ServerID({ params: { id: serverId } }: Props) {
  const { data, isLoading } = useRealtimeMetricsOfServer(serverId);

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  return data !== undefined ? (
    <>
      <Heading as="h1" mb="4">{capitalCase(serverId)}</Heading>
      <Grid columns="2" gap="3">
        <Card>
          <Heading as="h2" mb="2">Memory View</Heading>
          <MemoryHistory serverData={data} />
        </Card>
        
        <Card>
          <Heading as="h2" mb="2">CPU View</Heading>
          <CPUHistory cpus={data.cpu} />
        </Card>
      </Grid>
    </>
  ) : null;
}
