import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { ArrowDownOutlined, MoreOutlined, ArrowUpOutlined, MenuOutlined, CaretLeftFilled, CaretRightFilled, SearchOutlined, PushpinOutlined } from '@ant-design/icons';

const WorkflowList = () => {

  // Sample data to match the screenshot
  const dataSource = Array(7).fill(null).map((_, index) => ({
    key: index,
    workflowName: 'Workflow Name here...',
    id: '#494',
    lastEditedOn: 'Zubin Khanna | 22:43 IST - 28/05',
    description: 'Some Description Here Regarding The Flow.'
  }));

  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-lg w-full max-w-full mx-auto">
      {/* Header */}
      <div className="p-4 flex items-center justify-between ">
        <div className="flex items-center">
          <Button type="text" icon={<MenuOutlined />} className="mr-4" />
     
          <h2 className="text-xl font-semibold text-gray-800">Workflow Builder</h2>
        </div>
      </div>
      <div className='px-8'>
      {/* Search Bar and Create Button */}
      <div className="p-4 flex items-center justify-between space-x-4">
        <div className="relative w-64">
          <Input
            size="middle"
            placeholder="Search by Workflow Name/ID"
            
            suffix={<SearchOutlined className="text-gray-400" />} // Restored the SearchOutlined icon
            className="w-full"
          />
        </div>
        <Button  type='primary' className="bg-neutral-300 hover:bg-gray-800">
          + Create New Process
        </Button>
      </div>
      <div className='px-8'>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-orange-500">
            <tr>
              <th className="px-4 py-3 text-left  font-medium  tracking-wider">Workflow Name</th>
              <th className="px-4 py-3 text-left  font-medium   tracking-wider">ID</th>
              <th className="px-4 py-3 text-left  font-medium  tracking-wider">Last Edited On</th>
              <th className="px-4 py-3 text-left  font-medium  tracking-wider">Description</th>
              <th className="px-4 py-3 text-left  font-medium  tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white ">
            {dataSource.map((item) => (
              <tr key={item.key}>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span>{item.workflowName}</span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-gray-600">{item.id}</td>
                <td className="px-4 py-3 whitespace-nowrap text-gray-600">{item.lastEditedOn}</td>
                <td className="px-4 py-3 whitespace-nowrap text-gray-600">{item.description}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <Button
                      icon={<PushpinOutlined />} // Added PushpinOutlined icon
                      className="bg-black hover:bg-gray-800 text-white border-4 border-gray-200"
                      type="text"
                    >
                      Execute
                    </Button>
                    <Button className="bg-black hover:bg-gray-800 text-white" type="text">
                      Edit
                    </Button>
                    <Button icon={<MoreOutlined />} className="bg-black hover:bg-gray-800 text-white" type="text" />
                    <Button icon={<ArrowDownOutlined />} className="bg-black hover:bg-gray-800 text-white" type="text" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center py-4 space-x-2 mt-4">
        <Button icon={<CaretLeftFilled />} className="bg-black hover:bg-gray-800 text-white px-3 py-1" type="default" />
        <Button className="bg-black hover:bg-gray-800 text-white px-3 py-1" type="default">1</Button>
        <Button className="bg-black hover:bg-gray-800 text-white px-3 py-1" type="default">2</Button>
        <Button className="bg-black hover:bg-gray-800 text-white px-3 py-1" type="default">3</Button>
        <span className="text-gray-500">...</span>
        <Button className="bg-black hover:bg-gray-800 text-white px-3 py-1" type="default">15</Button>
        <Button icon={<CaretRightFilled />} className="bg-black hover:bg-gray-800 text-white px-3 py-1" type="default" />
      </div>

      </div>

      </div>
    </div>
  );
};

export default WorkflowList;