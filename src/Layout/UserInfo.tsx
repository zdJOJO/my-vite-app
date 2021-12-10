import { LogoutOutlined } from '@/component/icons/antd-icons'
import { Avatar, Dropdown, Menu } from 'antd'
import React, { useState } from 'react'
import classes from './index.module.less'

function UserInfo() {
  const [info, setInfo] = useState<{ name: string }>({ name: 'test' })

  // 用户名对应的下拉菜单
  const menus = (
    <Menu>
      <Menu.Item key="logout">
        <LogoutOutlined style={{ marginRight: '8px' }} />
        {'退出登录'}
      </Menu.Item>
    </Menu>
  )
  return (
    <div className={classes.userInfo}>
      <Dropdown overlay={menus}>
        <div className={classes.action}>
          <Avatar size="small" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
          <span className={classes.userName}>{info.name}</span>
        </div>
      </Dropdown>
    </div>
  )
}

export default UserInfo
