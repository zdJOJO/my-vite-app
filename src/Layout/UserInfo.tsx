import { logOut } from '@/pages/Dispatch/fetch'
import { LogoutOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Menu } from 'antd'
import React, { useState } from 'react'
import classes from './index.module.less'

const Overlay = () => {
  return (
    <Menu>
      <Menu.Item key="logout" onClick={() => logOut()}>
        <LogoutOutlined style={{ marginRight: '8px' }} />
        退出登录
      </Menu.Item>
    </Menu>
  )
}

const UserInfo = () => {
  const [info, setInfo] = useState<{ name: string }>({ name: 'test' })
  return (
    <div className={classes.userInfo}>
      <Dropdown overlay={<Overlay />}>
        <div className={classes.action}>
          <Avatar size="small" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
          <span className={classes.userName}>{info.name}</span>
        </div>
      </Dropdown>
    </div>
  )
}

export default UserInfo
