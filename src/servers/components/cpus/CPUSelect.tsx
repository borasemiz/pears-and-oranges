import { CPU } from "@/servers/types/CPU";
import { Flex, Select, Text } from "@radix-ui/themes";

interface Props {
  cpus: CPU[];
  onCpuSelected: (cpuIndex: number) => void;
}

function CPUSelect({ cpus, onCpuSelected }: Props) {
  return (
    <Flex gap="1" align="center">
      <Text htmlFor="cpu-select">Selected CPU ({cpus.length} in total):</Text>
      <Select.Root onValueChange={index => onCpuSelected(+index)} defaultValue="0">
        <Select.Trigger id="cpu-select" />
        <Select.Content>
          {cpus.map(({ id }, index) => (
            <Select.Item key={id} value={`${index}`}>CPU {id}</Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </Flex>
  )
}

export default CPUSelect;