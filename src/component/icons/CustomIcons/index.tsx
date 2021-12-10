import Icon from '@ant-design/icons'
import React from 'react'
import BusOffSvg from './svg/bus-off.svg'
import BusOnSvg from './svg/bus-on.svg'
import CancelLaBanSvg from './svg/cancel-la-ban.svg'
import CoffeSvg from './svg/coffe.svg'
import LaBanSvg from './svg/la-ban.svg'
import LeaveSvg from './svg/leave.svg'
import MaintainSvg from './svg/maintain.svg'
import messageSvg from './svg/message.svg'
import PartialSentSvg from './svg/partial_sent.svg'
import ReceivedSvg from './svg/received.svg'
import SentFailSvg from './svg/sent_fail.svg'
import busLeaveSvg from './svg/stop-bus.svg'
import StopSvg from './svg/stop.svg'
import UnReceivedSvg from './svg/unreceived.svg'
import UnSendSvg from './svg/un_send.svg'
import ViewSvg from './svg/view.svg'

/**
 *  @name  BusOnIcon   司机2、车辆2 显示
 * */
export const BusOnIcon = (props: any) => <Icon component={BusOnSvg} {...props} />

/**
 *   @name  BusOffIcon  司机2、车辆2 关闭
 * */
export const BusOffIcon = (props: any) => <Icon component={BusOffSvg} {...props} />

/**
 *  @name  LaBanIcon   拉班
 * */
export const LaBanIcon = (props: any) => <Icon component={LaBanSvg} {...props} />

/**
 *  @name  LaBanIcon   取消拉班
 * */
export const CancelLaBanIcon = (props: any) => <Icon component={CancelLaBanSvg} {...props} />

/**
 *  @name  LeaveIcon   请假
 * */
export const LeaveIcon = (props: any) => <Icon component={LeaveSvg} {...props} />

/**
 *  @name  CoffeIcon    休息
 * */
export const CoffeIcon = (props: any) => <Icon component={CoffeSvg} {...props} />

/**
 *  @name  MaintainIcon    不出派 | 一保
 * */
export const MaintainIcon = (props: any) => <Icon component={MaintainSvg} {...props} />

/**
 *  @name  StopIcon    停备
 * */
export const StopIcon = (props: any) => <Icon component={StopSvg} {...props} />

/**
 *  @name  BusLeaveIcon    车辆不出派
 * */
export const BusLeaveIcon = (props: any) => <Icon component={busLeaveSvg} {...props} />

/**
 *  @name  MessageIcon    短信
 * */
export const MessageIcon = (props: any) => <Icon component={messageSvg} {...props} />

/**
 *  @name  ViewIcon    查看短信  已发送 |  发送成功
 * */
export const ViewIcon = (props: any) => <Icon component={ViewSvg} {...props} />

/**
 *  @name  UnSendIcon   短信 未发送
 * */
export const UnSendIcon = (props: any) => <Icon component={UnSendSvg} {...props} />

/**
 *  @name  PartialSentIcon 短信 部分发送
 * */
export const PartialSentIcon = (props: any) => <Icon component={PartialSentSvg} {...props} />

/**
 *  @name  PartialSentIcon 短信 已收到  | 已送达
 * */
export const ReceivedIcon = (props: any) => <Icon component={ReceivedSvg} {...props} />

/**
 *  @name  PartialSentIcon 短信 未送到  | 未送达
 * */
export const UnReceivedIcon = (props: any) => <Icon component={UnReceivedSvg} {...props} />

/**
 *  @name  SentFailIcon   短信 发送失败
 * */
export const SentFailIcon = (props: any) => <Icon component={SentFailSvg} {...props} />
