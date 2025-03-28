import React, { useState } from 'react';
import { CameraOutlined, EditOutlined, MoreOutlined, DownOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons';

const WorkflowBuilder = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data to match the screenshot
  const dataSource = Array(7).fill(null).map((_, index) => ({
    key: index,
    workflowName: 'Workflow Name here...',
    id: '#494',
    lastEditedOn: 'Zubin Khanna | 22:43 IST - 28/05',
    description: 'Some Description Here Regarding The Flow.'
  }));

  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-lg w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="p-4 flex items-center border-b">
        <button className="mr-4 p-2 hover:bg-gray-100 rounded">
          <MenuOutlined />
        </button>
        <h2 className = "text-xl font-semibold text-gray-800 flex-grow">Workflow Builder</h2>
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
        >
          + Create New Process
        </button>
      </div>

      {/* Search Bar and Create Button */}
      <div className="p-4 border-b flex items-center space-x-4">
        <div className="flex-grow relative">
          <input 
            type="text" 
            placeholder="Search by Workflow Name/ID" 
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <SearchOutlined className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-base" />
        </div>
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
        >
          + Create New Process
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Workflow Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Edited On</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
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
                    <button className="flex items-center text-gray-600 hover:bg-gray-100 px-2 py-1 rounded">
                      <CameraOutlined className="mr-1" /> Execute
                    </button>
                    <button className="flex items-center text-gray-600 hover:bg-gray-100 px-2 py-1 rounded">
                      <EditOutlined className="mr-1" /> Edit
                    </button>
                    <button className="text-gray-600 hover:bg-gray-100 p-1 rounded">
                      <MoreOutlined />
                    </button>
                    <DownOutlined className="text-gray-600" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center py-4 space-x-2">
        <button className="px-3 py-1 border rounded hover:bg-gray-100">1</button>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">2</button>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">3</button>
        <span className="text-gray-500">...</span>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">15</button>
      </div>
    </div>
  );
};

export default WorkflowBuilder;