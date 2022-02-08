import { ConfigProvider, Layout } from 'antd'
import dayjs from 'dayjs'
import zhCN from 'antd/es/locale/zh_CN'
import 'dayjs/locale/zh-cn' // import locale
import React, { FC } from 'react'
import logo from './logo@2x.png'
import NavMenu from './NavMenu'
import UserInfo from './UserInfo'

import 'dayjs/locale/de'

import classes from './index.module.less'

const { Header, Content } = Layout

dayjs.locale('zh-cn') // use locale

interface AppLayoutProps {
  children: any
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <ConfigProvider locale={zhCN}>
      <Layout className={classes.content}>
        <Header className={classes.header}>
          <div className={classes.logo}>
            <a href={import.meta.env.VITE_USERCENTER_URL}>
              <img src={logo} alt="" />
            </a>
          </div>

          {/* 导航栏目 */}
          <NavMenu menus={[]} />

          {/* 用户 退出 */}
          <UserInfo />
        </Header>

        <Content className="maincontents">{children}</Content>
      </Layout>
    </ConfigProvider>
  )
}

export default AppLayout
