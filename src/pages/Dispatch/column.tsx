import React from 'react'
import { Badge } from 'antd'
import { DispatchSpace } from './index.d'

// 展示列表 表头
export const columns: any[] = [
  {
    title: '车队',
    dataIndex: 'teamName',
    filters: [],
    fixed: 'left',
    className: 'filterColumn',
    onFilter: () => true
  },
  {
    title: '配车',
    dataIndex: 'busCount'
  },
  {
    title: '配班',
    dataIndex: 'busClassCount'
  },
  {
    title: '休息',
    dataIndex: 'restCount'
  },
  {
    title: '停备/保养',
    dataIndex: 'readyCount/maintainCount',
    render: (text: string, record: DispatchSpace.IDispatchRow) => (
      <span>
        {record.readyCount}/{record.maintainCount}
      </span>
    )
  },
  {
    title: '其他不出派(车/人)',
    dataIndex: 'otherRestReasonBusCount/otherRestReasonDriverCount',
    render: (text: string, record: DispatchSpace.IDispatchRow) => (
      <span>
        {record.otherRestReasonBusCount} / {record.otherRestReasonDriverCount}
      </span>
    )
  },
  {
    title: '车辆总数',
    dataIndex: 'busTotalCount'
  },
  {
    title: '司机总数',
    dataIndex: 'driverTotalCount'
  },
  {
    title: '状态',
    dataIndex: 'status',
    className: 'filterColumn',
    width: 160,
    fixed: 'right',
    filters: [
      {
        text: '已发布',
        value: 'RELEASE'
      },
      {
        text: '未发布（完成）',
        value: 'COMPLETE'
      },
      {
        text: '未发布（未完成）',
        value: 'UN_RELEASE'
      }
    ],
    onFilter: () => true,
    render: (status: string) => {
      if (status === 'RELEASE') {
        return <Badge status="processing" text="已发布" color="green" />
      } else if (status === 'UN_RELEASE') {
        return <Badge status="error" text="未发布（未完成）" />
      } else if (status === 'COMPLETE') {
        return <Badge status="error" text="未发布（完成）" />
      } else {
        return null
      }
    }
  }
]
