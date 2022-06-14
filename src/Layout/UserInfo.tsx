import { logOut } from '@/pages/Dispatch/fetch'
import { LogoutOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Menu } from 'antd'
import React, { useState } from 'react'
import classes from './index.module.less'

const UserInfo = () => {
  const [info, setInfo] = useState<{ name: string }>({ name: 'test' })

  const menu = (
    <Menu
      items={[
        {
          key: 'logout',
          label: (
            <>
              <LogoutOutlined style={{ marginRight: '8px' }} />
              退出登录
            </>
          ),
          onClick: () => logOut()
        }
      ]}
    />
  )

  return (
    <div className={classes.userInfo}>
      <Dropdown overlay={menu}>
        <div className={classes.action}>
          <Avatar size="small" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
          <span className={classes.userName}>{info.name}</span>
        </div>
      </Dropdown>
    </div>
  )
}

export default UserInfo
