import React, { useState } from 'react'
import { Button, DatePicker, Select, Space } from 'antd'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import './index.less'

const { Option } = Select

const Home = () => {
  const [count, setCount] = useState<number>(0)

  const onChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  const onSearch = (value: string) => {
    console.log('search:', value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/dispatch"> dispatch</Link>
          </li>
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <Space size={20}>
          <Button type="primary" onClick={() => setCount(count => count + 1)}>
            count is {count}
          </Button>
          <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
            }
          >
            {/* {Array.from({ length: 100 }).map((_, index) => (
              <Option key={index} value={'abcde'}>
                abcde
              </Option>
            ))} */}
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
          <DatePicker />
        </Space>
      </header>
    </div>
  )
}

export default Home
