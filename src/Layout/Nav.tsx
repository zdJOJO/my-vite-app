import React from 'react'
import { Menu } from 'antd'
import classes from './index.module.less'

const { SubMenu } = Menu

export default ({ menuList = [] }) => {
  const menuItem = (arr: any[]) => {
    return (arr || []).map((ret: any) => (
      <Menu.Item key={ret.code}>
        <a href={ret.url} target="_blank" rel="noopener noreferrer">
          {ret.name}
        </a>
      </Menu.Item>
    ))
  }

  const subMenu = (menuList || []).map((ret: any) => (
    <SubMenu key={ret.code} title={ret.name}>
      {menuItem(ret.subMenus || [])}
    </SubMenu>
  ))

  return (
    <div className={classes.nav}>
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
        {subMenu}
      </Menu>
    </div>
  )
}
