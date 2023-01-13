/**
 * PieChart
 */
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale, ChartData } from 'chart.js';
Chart.register(CategoryScale);

export interface PieChartProps {
  data?: ChartData<'pie'>;
}

const labels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
const mockData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: Array.from({ length: labels.length }, () => Math.random()),
      backgroundColor: [
        'rgb(235, 81 ,108)',
        'rgb(242, 163, 84)',
        'rgb(247, 207, 107)',
        'rgb(109, 190, 191)',
        'rgb(87, 160, 229)',
      ],
    },
  ],
};

export function PieChart({ data = mockData }: PieChartProps) {
  return (
    <div>
      <Pie
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Pie Chart',
            },
          },
        }}
      />
    </div>
  );
}
