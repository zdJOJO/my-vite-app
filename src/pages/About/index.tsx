import { Select } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const { Option } = Select

const About = () => {
  const onChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  const onSearch = (value: string) => {
    console.log('search:', value)
  }

  return (
    <div>
      <Link to="/">go 222home</Link>

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
    </div>
  )
}

export default About
