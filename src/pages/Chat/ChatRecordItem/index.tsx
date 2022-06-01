import { Avatar } from 'antd'
import React, { FC } from 'react'
import classes from './index.module.less'

type ChatRecordItemProps = IPeerMessage

const ChatRecordItem: FC<ChatRecordItemProps> = ({ type, data }) => {
  const isMe = type === 'local'
  return (
    <div style={{ flexDirection: isMe ? 'row-reverse' : 'unset' }} className={classes.chatRecortdItem}>
      <div style={isMe ? { marginLeft: 10 } : { marginRight: 10 }}>
        <Avatar size={36}>{type === 'local' ? '我' : '朋友'}</Avatar>
      </div>
      <p className={classes.record}>{data}</p>
    </div>
  )
}

export default ChatRecordItem
