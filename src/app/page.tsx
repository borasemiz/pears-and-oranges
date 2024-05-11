import ServerCard from '@/servers/components/ServerCard';
import { Grid, Heading } from '@radix-ui/themes';

export default function Home() {
  return (
    <main>
      <Heading as="h1" mb="4">All Servers</Heading>
      <Grid
        columns={{
          initial: '1',
          sm: '2',
          md: '3',
        }}
        gap="3"
      >
        <ServerCard serverName='server01' />
        <ServerCard serverName='server02' />
        <ServerCard serverName='server03' />
        <ServerCard serverName='server04' />
        <ServerCard serverName='server05' />
      </Grid>
    </main>
  );
}
