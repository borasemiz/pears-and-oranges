import { SimpleGauge } from 'react-gauges';

interface Props {
  value: number;
  warningZone?: number;
  dangerZone?: number;
}

function GaugeChart({ value, warningZone = 50, dangerZone = 80 }: Props) {
  const barColor = warningZone <= value && value < dangerZone ? '#f4c430' : (dangerZone <= value ? '#800000' : '#4F6F52');
  
  return (
    <SimpleGauge
      value={value}
      barColor={barColor}
      barWidth={20}
    />
  )
}

export default GaugeChart;
