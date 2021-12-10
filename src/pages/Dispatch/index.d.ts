export namespace DispatchSpace {
  interface IDispatchRow {
    busClassCount: number
    busCount: number
    busTotalCount: number
    createTime: string
    dispatchId: number | null
    dispatchName: string
    driverTotalCount: number
    execTime: string
    maintainCount: number
    modifyTime: string
    orgId: number
    orgName: string
    otherRestReasonBusCount: number
    otherRestReasonDriverCount: number
    readyCount: number
    restCount: number
    status: string
    subsidiarysId: number
    subsidiarysName: string
    teamId: number
    teamName: string
  }
}
