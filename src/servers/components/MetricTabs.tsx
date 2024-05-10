import { Box, Tabs } from "@radix-ui/themes";
import { AllMetricResponse } from "../types/AllMetricsResponse";
import MemoryHistory from "./memory/MemoryHistory";
import CPUHistory from "./cpus/CPUHistory";

interface Props {
  serverData: Partial<AllMetricResponse>;
}

function MetricTabs({ serverData }: Props) {
  return (
    <Tabs.Root defaultValue="cpu">
      <Tabs.List>
        <Tabs.Trigger value="cpu" disabled={!Array.isArray(serverData.cpu) || serverData.cpu.length === 0}>CPU</Tabs.Trigger>
        <Tabs.Trigger value="memory">Memory</Tabs.Trigger>
      </Tabs.List>

      <Box pt="3">
        <Tabs.Content value="cpu">
          {Array.isArray(serverData.cpu) && serverData.cpu.length > 0 && <CPUHistory cpus={serverData.cpu} />}
        </Tabs.Content>

        <Tabs.Content value="memory">
          {<MemoryHistory serverData={serverData} />}
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  )
}

export default MetricTabs;
