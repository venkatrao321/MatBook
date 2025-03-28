import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { ArrowDownOutlined, MoreOutlined, ArrowUpOutlined, MenuOutlined, CaretLeftFilled, CaretRightFilled, SearchOutlined, PushpinOutlined } from '@ant-design/icons';
import WorkflowCreator from './workflowCreator';

const WorkflowList = ({ onLogout }) => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [showCreator, setShowCreator] = useState(false); // State to toggle WorkflowCreator
  const rowsPerPage = 5; // Number of rows per page

  // Sample data to match the screenshot
  const dataSource = Array(20).fill(null).map((_, index) => ({
    key: index,
    workflowName: `Workflow Name ${index + 1}`,
    id: `#${494 + index}`,
    lastEditedOn: 'Zubin Khanna | 22:43 IST - 28/05',
    description: 'Some Description Here Regarding The Flow.'
  }));

  // Filtered data based on search query
  const filteredData = dataSource.filter(
    (item) =>
      item.workflowName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Paginated data
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  if (showCreator) {
    return <WorkflowCreator onBack={() => setShowCreator(false)} />; // Pass onBack callback
  }

  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-lg w-full max-w-full mx-auto">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Button type="text" icon={<MenuOutlined />} className="mr-4" />
          <h2 className="text-xl font-semibold text-gray-800">Workflow Builder</h2>
        </div>
        <Button
          type="primary"
          className="bg-black hover:bg-gray-800 text-white"
          onClick={onLogout} // Logout handler
        >
          Logout
        </Button>
      </div>
      <div className="px-8">
        {/* Search Bar and Create Button */}
        <div className="p-4 flex items-center justify-between space-x-4">
          <div className="relative w-64">
            <Input
              size="middle"
              placeholder="Search by Workflow Name/ID"
              suffix={<SearchOutlined className="text-gray-400" />}
              className="w-full"
              value={searchQuery} // Bind input value to searchQuery state
              onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
            />
          </div>
          <Button
            type="primary"
            className="bg-neutral-300 hover:bg-gray-800"
            onClick={() => setShowCreator(true)} // Show WorkflowCreator on click
          >
            + Create New Process
          </Button>
        </div>
        <div className="px-8">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-orange-500">
                <tr>
                  <th className="px-4 py-3 text-left font-medium tracking-wider">Workflow Name</th>
                  <th className="px-4 py-3 text-left font-medium tracking-wider">ID</th>
                  <th className="px-4 py-3 text-left font-medium tracking-wider">Last Edited On</th>
                  <th className="px-4 py-3 text-left font-medium tracking-wider">Description</th>
                  <th className="px-4 py-3 text-left font-medium tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {paginatedData.map((item) => (
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
                          icon={<PushpinOutlined />}
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
            <Button
              icon={<CaretLeftFilled />}
              className="bg-black hover:bg-gray-800 text-white px-3 py-1"
              type="default"
              disabled={currentPage === 1} // Disable if on the first page
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} // Go to previous page
            />
            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index}
                className={`px-3 py-1 ${currentPage === index + 1 ? "bg-gray-800 text-white" : "bg-black hover:bg-gray-800 text-white"}`}
                type="default"
                onClick={() => setCurrentPage(index + 1)} // Go to specific page
              >
                {index + 1}
              </Button>
            ))}
            <Button
              icon={<CaretRightFilled />}
              className="bg-black hover:bg-gray-800 text-white px-3 py-1"
              type="default"
              disabled={currentPage === totalPages} // Disable if on the last page
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} // Go to next page
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowList;