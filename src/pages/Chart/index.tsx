import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts/core'
import { times, yAxisData, data } from './mock'

import {
  TitleComponent,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  VisualMapComponent,
  VisualMapComponentOption
} from 'echarts/components'
import { HeatmapChart, HeatmapSeriesOption } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([TitleComponent, TooltipComponent, GridComponent, VisualMapComponent, HeatmapChart, CanvasRenderer])

type EChartsOption = echarts.ComposeOption<
  TooltipComponentOption | GridComponentOption | VisualMapComponentOption | HeatmapSeriesOption
>

const Chart = () => {
  const chartRef = useRef()

  useEffect(() => {
    if (chartRef.current) {
      const chartDom = chartRef.current
      const myChart = echarts.init(chartDom)
      const option: EChartsOption = {
        title: {
          subtext: '西溪天堂 ~ 西文街公交站'
        },
        tooltip: {
          position: 'top'
        },
        grid: {
          height: '50%',
          top: '15%',
          left: 65
        },
        visualMap: {
          min: 0,
          max: 100,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom: 20,
          inRange: {
            color: ['#e2f6ff', '#1585ff']
          },
          text: ['密', '疏']
        },
        xAxis: {
          type: 'category',
          data: times,
          splitArea: {
            show: true
          },
          offset: 0
        },
        yAxis: {
          type: 'category',
          data: yAxisData,
          splitArea: {
            show: true
          }
        },
        series: [
          {
            type: 'heatmap',
            data: data,
            label: {
              show: true
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      myChart.setOption(option)
    }
  }, [])

  return (
    <div style={{ width: '100vw', padding: '50px  0' }}>
      <div style={{ width: 1200, height: 300, margin: '0 auto' }} ref={chartRef as any} />
    </div>
  )
}

export default Chart
