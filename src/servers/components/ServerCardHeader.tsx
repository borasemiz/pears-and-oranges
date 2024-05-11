import { capitalCase } from 'case-anything';
import { format } from "date-fns";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { AllMetricResponse } from "../types/AllMetricsResponse";

interface Props {
  serverName: string;
  data?: AllMetricResponse;
}

function ServerCardHeader({ serverName, data }: Props) {
  return (
    <Flex gap="2" align="center">
      <Heading as="h2">{capitalCase(serverName)}</Heading>
      {data !== undefined && <Text>Last Updated: {format(new Date(data.timestamp), 'PPpp')}</Text>}
    </Flex>
  )
}

export default ServerCardHeader;
