import ServerCard from '@/servers/components/ServerCard';
import { Flex, Grid } from '@radix-ui/themes';

export default function Home() {
  return (
    <main>
      <Grid columns="3" gap="3">
        <ServerCard serverName='server01' />
        <ServerCard serverName='server02' />
        <ServerCard serverName='server03' />
        <ServerCard serverName='server04' />
        <ServerCard serverName='server05' />
      </Grid>
    </main>
  );
}
