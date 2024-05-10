'use client';
import { CChart } from '@coreui/react-chartjs';

interface Props {
  labels: string[];
  dataSets: Array<{
    label: string;
    data: number[];
  }>;
}

function LineChart({ labels, dataSets }: Props) {
  return (
    <CChart
      type="line"
      data={{
        labels: labels,
        datasets: dataSets,
      }}
      options={{
        animation: false,
        responsive: true,
      }}
    />
  )
}

export default LineChart;