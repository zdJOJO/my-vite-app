import React from 'react'
import { Button, Menu } from 'antd'
import { useLocation } from 'react-router-dom'
import { LayoutSpace } from './index.d'

const { SubMenu } = Menu

interface NavMenuProps {
  menus: LayoutSpace.INavMenu[]
}

const NavMenu: React.FC<NavMenuProps> = ({ menus }) => {
  const location = useLocation()
  return (
    <Menu style={{ flex: 'auto' }} theme="dark" mode="horizontal" defaultSelectedKeys={[location.pathname]}>
      {menus.map((menu: LayoutSpace.INavMenu) => {
        if (!!menu.subMenus && menu.subMenus.length > 0) {
          return (
            <SubMenu key={menu.id} title={menu.name}>
              {menu.subMenus.map((submenu: LayoutSpace.INavMenu) => {
                return submenu.code === 'dispatchWork.dispatchDetail' ||
                  submenu.code === 'dispatchSetting.Warning' ? null : (
                  <Menu.Item key={submenu.url as string}>
                    <Button target="_blank" rel="noopener noreferer" type="link" href={submenu.url as string}>
                      {' '}
                      {submenu.name}
                    </Button>
                  </Menu.Item>
                )
              })}
            </SubMenu>
          )
        }
        return (
          <Menu.Item key={menu.id}>
            <Button target="_blank" rel="noopener noreferer" type="link" href={menu.url as string}>
              {menu.name}
            </Button>
          </Menu.Item>
        )
      })}
    </Menu>
  )
}
export default NavMenu
