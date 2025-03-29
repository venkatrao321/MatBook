import { useCallback, useState } from 'react';
import {
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  EdgeText,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons'; // Import Plus icon
import TextUpdaterNode from './CustomNode.jsx';

// Custom edge component
const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY, data }) => {
  const edgePath = `M${sourceX},${sourceY}L${targetX},${targetY}`;
  return (
    <>
      <path id={id} d={edgePath} stroke="#222" strokeWidth={2} fill="none" />
      <EdgeText
        x={(sourceX + targetX) / 2}
        y={(sourceY + targetY) / 2}
        label={
          <Button
            size="small"
            icon={<PlusOutlined />} // Use Plus icon
            onClick={() => alert(`Button on edge ${id} clicked!`)}
          />
        }
        labelStyle={{ fontSize: 12 }}
      />
    </>
  );
};

const rfStyle = {
  backgroundColor: '#F2E3C3',
};

const initialNodes = [
  {
    id: 'node-1',
    type: 'textUpdater',
    position: { x: 250, y: 250 },
    data: { value: 'Start' },
  },
  {
    id: 'node-2',
    type: 'textUpdater',
    position: { x: 250, y: 400 },
    data: { value: 'End' },
  },
];

const initialEdges = [
  {
    id: 'e1-2',
    source: 'node-1',
    sourceHandle: 'bottom',
    target: 'node-2',
    targetHandle: 'top',
    type: 'custom', // Use custom edge type
  },
];

const nodeTypes = { textUpdater: TextUpdaterNode };
const edgeTypes = { custom: CustomEdge }; // Register custom edge type

function WorkflowCreator({ onBack }) {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [history, setHistory] = useState([{ nodes: initialNodes, edges: initialEdges }]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const updateHistory = (newNodes, newEdges) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push({ nodes: newNodes, edges: newEdges });
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const onNodesChange = useCallback(
    (changes) => {
      setNodes((nds) => {
        const updatedNodes = applyNodeChanges(changes, nds);
        updateHistory(updatedNodes, edges);
        return updatedNodes;
      });
    },
    [edges, history, historyIndex],
  );

  const onEdgesChange = useCallback(
    (changes) => {
      setEdges((eds) => {
        const updatedEdges = applyEdgeChanges(changes, eds);
        updateHistory(nodes, updatedEdges);
        return updatedEdges;
      });
    },
    [nodes, history, historyIndex],
  );

  const onConnect = useCallback(
    (connection) => {
      setEdges((eds) => {
        const updatedEdges = addEdge(connection, eds);
        updateHistory(nodes, updatedEdges);
        return updatedEdges;
      });
    },
    [nodes, history, historyIndex],
  );

  const undo = () => {
    if (historyIndex > 0) {
      const previousState = history[historyIndex - 1];
      setNodes(previousState.nodes);
      setEdges(previousState.edges);
      setHistoryIndex(historyIndex - 1);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      const nextState = history[historyIndex + 1];
      setNodes(nextState.nodes);
      setEdges(nextState.edges);
      setHistoryIndex(historyIndex + 1);
    }
  };

  return (
    <>
      <div className="p-4 absolute z-10 top-5 left-5">
        <Button
          type="primary"
          className="bg-black hover:bg-gray-800 text-white mb-4"
          onClick={onBack}
        >
          Back
        </Button>
        <Button
          type="default"
          className="ml-2 bg-gray-200 hover:bg-gray-300 text-black"
          onClick={undo}
          disabled={historyIndex === 0} // Disable if no undo is possible
        >
          Undo
        </Button>
        <Button
          type="default"
          className="ml-2 bg-gray-200 hover:bg-gray-300 text-black"
          onClick={redo}
          disabled={historyIndex === history.length - 1} // Disable if no redo is possible
        >
          Redo
        </Button>
      </div>
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes} // Use custom edge types
          fitView
          style={rfStyle}
        >
          <Background variant="dots" gap={16} size={1} />
        </ReactFlow>
      </div>
    </>
  );
}

export default WorkflowCreator;
