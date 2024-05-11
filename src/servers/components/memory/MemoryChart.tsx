'use client'
import { Box, Flex, Text } from "@radix-ui/themes";
import { Memory } from "../../types/Memory";
import LineChart from "@/ui/visualization/components/LineChart";
import { useEffect, useState } from "react";
import UnitSelection from "./UnitSelection";
import { Unit } from "@/servers/types/Unit";

interface Props {
  memoryHistory: Memory[];
}

function MemoryChart({ memoryHistory }: Props) {
  const [unit, setUnit] = useState<Unit>('number');
  const [used, setUsed] = useState<number[]>([]);
  const [free, setFree] = useState<number[]>([]);
  const [total, setTotal] = useState<number[]>([]);

  useEffect(() => {
    if (unit === 'number') {
      setUsed(memoryHistory.map(({ used }) => used));
      setFree(memoryHistory.map(({ free }) => free));
    } else {
      setUsed(memoryHistory.map(({ usedPercentage }) => usedPercentage));
      setFree(memoryHistory.map(({ freePercentage }) => freePercentage));
    }

    setTotal(memoryHistory.map(({ total }) => total));
  }, [unit, memoryHistory]);

  return (
    <Box>
      <Flex justify="between" align="center">
        <UnitSelection onUnitSelected={setUnit} />
        {total.length > 0 && (
          <Text>Total Memory: {total[total.length-1]} GB</Text>
        )}
      </Flex>
      <LineChart
        labels={memoryHistory.map((_, index) => `${index+1}`)}
        dataSets={[
          {
            label: 'Used Memory (GB)',
            data: used,
          },
          {
            label: 'Free Memory (GB)',
            data: free,
          },
        ]}
      />
    </Box>
  )
}

export default MemoryChart