
   
import React from 'react';
import { VictoryBar, VictoryChart, VictoryPie, VictoryLine } from 'victory';

export default function MyCharts() {
  return (
    <div>
      <VictoryChart
        domainPadding={40}
      >
        <VictoryBar
          width={500}
          barWidth={20}
          data={[
            { quarter: 1, earnings: 13000 },
            { quarter: 2, earnings: 16500 },
            { quarter: 3, earnings: 14250 },
            { quarter: 4, earnings: 19000 }
          ]}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
          style={{
            data: { fill: 'green', opacity: 0.7 },  
          }}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
  
      <VictoryPie
        width={500}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
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
      <VictoryChart>
        <VictoryLine
          width={500}
          style={{
            data: { stroke: '#c43a31' }
          }}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 }        
          ]}
        />
      </VictoryChart>

    </div>
  );
}