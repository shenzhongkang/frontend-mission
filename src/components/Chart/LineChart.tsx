/**
 * Line Chart.
 */
import { FC } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale, ChartData } from 'chart.js';
Chart.register(CategoryScale);

export interface LineChartProps {
  data?: ChartData<'line'>;
}

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const mockData = {
  labels,
  datasets: [
    {
      label: 'My First dataset',
      data: Array.from({ length: labels.length }, () => Math.random()),
      borderColor: 'rgb(237, 107, 133)',
      backgroundColor: 'rgb(237, 107, 133)',
      fill: true,
    },
    {
      label: 'My Second dataset',
      data: Array.from({ length: labels.length }, () => Math.random()),
      borderColor: 'rgb(87, 160, 229)',
      backgroundColor: 'rgb(87, 160, 229)',
      fill: true,
    },
    {
      label: 'My Third dataset',
      data: Array.from({ length: labels.length }, () => Math.random()),
      borderColor: 'rgb(109, 190, 191)',
      backgroundColor: 'rgb(109, 190, 191)',
      fill: true,
    },
    {
      label: 'My Fourth dataset',
      data: Array.from({ length: labels.length }, () => Math.random()),
      borderColor: 'rgb(247, 207, 107)',
      backgroundColor: 'rgb(247, 207, 107)',
      fill: true,
    },
  ],
};

export const LineChart: FC<LineChartProps> = ({ data = mockData }) => {
  return (
    <div>
      <Line
        data={data}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Statistc Chart',
            },
            tooltip: {
              mode: 'index',
            },
          },
          interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false,
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Month',
              },
            },
            y: {
              stacked: true,
              title: {
                display: true,
                text: 'Value',
              },
            },
          },
        }}
      />
    </div>
  );
};
