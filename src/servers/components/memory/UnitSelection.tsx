import { Unit } from "@/servers/types/Unit";
import { Flex, Select, Text } from "@radix-ui/themes";

interface Props {
  onUnitSelected: (unit: Unit) => void;
}

function UnitSelection({ onUnitSelected }: Props) {
  return (
    <Flex align="center" gap="1">
      <Text htmlFor="unit-select">Select Unit:</Text>
      <Select.Root onValueChange={onUnitSelected} defaultValue="number">
        <Select.Trigger id="unit-select" />
        <Select.Content>
          <Select.Item value="number">Number</Select.Item>
          <Select.Item value="percentage">Percentage</Select.Item>
        </Select.Content>
      </Select.Root>
    </Flex>
  );
}

export default UnitSelection;