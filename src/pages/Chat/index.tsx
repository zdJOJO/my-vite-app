import { Button, Card, Col, Form, Input, List, message, Row, Space } from 'antd'
import { useForm } from 'antd/es/form/Form'
import Peer, { DataConnection, MediaConnection } from 'peerjs'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ChatRecordItem from './ChatRecordItem'
import classes from './index.module.less'

const Chat = () => {
  const [chatForm] = useForm()

  const peer = useRef<Peer>()
  const localVideo = useRef<HTMLVideoElement | null>(null)
  const remoteVideo = useRef<HTMLVideoElement | null>(null)

  const currentConnection = useRef<DataConnection>()
  const currentCall = useRef<MediaConnection>()

  const [localId, setLocalId] = useState<string>('')
  const [remoteId, setRemoteId] = useState<string>('')
  const [messages, setMessages] = useState<IPeerMessage[]>([
    {
      id: uuidv4(),
      type: 'remote',
      data: 'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello'
    },
    {
      id: uuidv4(),
      type: 'local',
      data: '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好'
    }
  ])

  // 创建本地 Peer
  const createPeer = useCallback(() => {
    peer.current = new Peer()

    // 打开通道
    peer.current.on('open', id => {
      setLocalId(id)
    })

    // 纯数据传输,  在连接成功后，将对方 Peer 的消息都更新到 messages 数组
    peer.current.on('connection', connection => {
      connection.on('data', data => {
        const newMessages: IPeerMessage[] = [
          ...messages,
          {
            id: uuidv4(),
            type: 'remote',
            data: data as string
          }
        ]
        setMessages(newMessages)
      })

      // 记录当前的 connection
      currentConnection.current = connection
    })

    // 当对方 Peer make call 后
    peer.current.on('call', async call => {
      if (window.confirm(`是否接受 ${call.peer}?`)) {
        if (!localVideo.current) return
        // getUserMedia 捕获本地的音视频流
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })

        localVideo.current.srcObject = stream
        localVideo.current.play()

        // 响应
        call.answer(stream)

        // 监听视频流，并更新到 remoteVideo 上
        call.on('stream', stream => {
          if (!remoteVideo.current) return
          remoteVideo.current.srcObject = stream
          remoteVideo.current.play()
        })

        currentCall.current = call
      } else {
        call.close()
      }
    })
  }, [])

  // 开始通话
  const callUser = useCallback(async () => {
    // 获取本地视频流
    if (!localVideo.current) return
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    localVideo.current.srcObject = stream
    localVideo.current.play()

    // 数据传输
    if (!peer.current) return
    const connection = peer.current.connect(remoteId)
    currentConnection.current = connection
    connection.on('open', () => {
      message.success('已连接')
    })

    // 多媒体传输
    const call = peer.current.call(remoteId, stream)
    call.on('stream', stream => {
      if (!remoteVideo.current) return
      remoteVideo.current.srcObject = stream
      remoteVideo.current.play()
    })
    call.on('error', err => {
      console.error(err)
    })
    call.on('close', () => {
      endCall()
    })

    currentCall.current = call
  }, [remoteId])

  // 结束通话
  const endCall = useCallback(() => {
    if (currentCall.current) {
      currentCall.current.close()
    }
  }, [])

  // 发送文本
  const sendMsg = useCallback((values: any) => {
    // 发送自定义内容
    if (!currentConnection.current) {
      message.warn('还未建立链接')
    }
    if (!currentConnection.current) return
    currentConnection.current.send(values.message)
    const newMessages: IPeerMessage[] = [...messages, { id: uuidv4(), type: 'local', data: values.message }]
    setMessages(newMessages)
    chatForm.resetFields()
  }, [])

  useEffect(() => {
    createPeer()
    return () => {
      endCall()
    }
  }, [])

  return (
    <div className={classes.root}>
      <h1>本地 Peer ID: {localId || 'loading...'}</h1>
      <Space size={15} className={classes.action}>
        <Input
          value={remoteId}
          type="text"
          placeholder="对方 Peer ID"
          style={{ width: 300 }}
          onChange={e => setRemoteId(e.target.value)}
        />
        <Button type="primary" onClick={callUser}>
          视频通话
        </Button>
        <Button type="primary" danger onClick={endCall}>
          结束通话
        </Button>
      </Space>

      {/* 视频 */}
      <Row gutter={24}>
        <Col span={12}>
          <Card title="本地摄像头">
            <video className={classes.chatVideo} controls autoPlay muted ref={localVideo} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="远程摄像头">
            <video className={classes.chatVideo} controls autoPlay muted ref={remoteVideo} />
          </Card>
        </Col>
      </Row>

      {/* 聊天 */}
      <Row gutter={24}>
        <Col span={12}>
          <Card>
            <List
              className={classes.chatRecords}
              size="small"
              bordered
              dataSource={messages}
              renderItem={item => <ChatRecordItem {...item} />}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Form form={chatForm} onFinish={sendMsg}>
              <Form.Item name="message" rules={[{ required: true, message: '请输入聊天内容' }]}>
                <Input.TextArea
                  className={classes.textarea}
                  maxLength={500}
                  showCount
                  placeholder="请输入聊天内容"
                ></Input.TextArea>
              </Form.Item>
              <Form.Item>
                <Space>
                  <Button onClick={() => chatForm.resetFields()}>清空</Button>
                  <Button type="primary" htmlType="submit">
                    发送消息
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Chat
