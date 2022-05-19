
   
import React from 'react';
import { VictoryBar, VictoryChart, VictoryPie } from 'victory';

export default function MyCharts() {
  return (
    <div>
      <VictoryChart
        domainPadding={40}
      >
        <VictoryBar
          width={500}
          data={[
            { quarter: 1, earnings: 13000 },
            { quarter: 2, earnings: 16500 },
            { quarter: 3, earnings: 14250 },
            { quarter: 4, earnings: 19000 }
          ]}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
  
      <VictoryPie
        width={500}
        colorScale={['green', 'violet', 'lightblue', 'coral']}
        data={[
          { age: '1-3', students: 43 },
          { age: '4-7', students: 132 },
          { age: '8-12', students: 322 },
          { age: '13-18', students: 573 }
        ]}
        x="age"
        y="students"
      />

    </div>
  );
}