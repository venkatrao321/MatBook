import React, { useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Background
} from '@xyflow/react';
import { Button } from 'antd';
import '@xyflow/react/dist/style.css';
import CustomNode from "./CustomNode"; // Import custom node

const nodeTypes = { custom: CustomNode }; // Register node type
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const WorkflowCreator = ({ onBack }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#F7F9FB' }}>
      <div className="p-4">
        <Button
          type="primary"
          className="bg-black hover:bg-gray-800 text-white mb-4"
          onClick={onBack} // Call the onBack function to navigate back
        >
          Back
        </Button>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      />
    </div>
  );
};

export default WorkflowCreator;