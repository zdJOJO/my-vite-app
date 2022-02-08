import { Table } from 'antd'
import React, { useState } from 'react'
import { useAntdTable } from 'ahooks'

import { columns } from './column'
import { DispatchSpace } from './index.d'
import appClasses from '../../App.module.less'
import { getTableData } from './fetch'

const Dispatch = () => {
  const [currentDispatchId, setCurrentDispatchId] = useState<number | null>(null)
  const { tableProps } = useAntdTable(getTableData)

  return (
    <div className={appClasses.page}>
      <Table
        sticky
        size="small"
        rowKey="dispatchId"
        scroll={{
          y: 'calc(100vh - 180px)'
        }}
        columns={columns}
        onRow={(record: DispatchSpace.IDispatchRow) => {
          return {
            onMouseEnter: () => {
              setCurrentDispatchId(record.dispatchId)
            } // 鼠标移入行
          }
        }}
        {...tableProps}
      />
    </div>
  )
}

export default Dispatch
