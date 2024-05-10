'use client';
import { CPU } from "@/servers/types/CPU";
import GaugeChart from "@/ui/visualization/components/GaugeChart";
import { Box } from "@radix-ui/themes";
import { useState } from "react";
import CPUSelect from "./CPUSelect";

interface Props {
  cpus: CPU[];
}

function CPUHistory({ cpus }: Props) {
  const [selectedCpuIndex, setSelectedCpuIndex] = useState<number>(0);

  return (
    <Box>
      <Box pb="3">
        <CPUSelect cpus={cpus} onCpuSelected={setSelectedCpuIndex} />
      </Box>
      <GaugeChart value={cpus[selectedCpuIndex].usage} />
    </Box>
  );

}

export default CPUHistory;
