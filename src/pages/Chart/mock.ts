// 横坐标轴
import { random } from 'lodash'

export const times = [
  '06:00',
  '06:30',
  '07:00',
  '07:30',
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00'
]

export const yAxisData = ['修正间隔', '建议间隔', '在用间隔']

let data: any[] = []
times.forEach((time, index) => {
  let temp: any[] = []
  temp = yAxisData.map((y, index2) => [index, index2, random(0, 100)])
  data = data.concat(temp)
})
data = data.map(function (item) {
  return [item[0], item[1], item[2] || '-']
})

export { data }
