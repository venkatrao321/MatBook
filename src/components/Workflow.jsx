import React, { useCallback } from "react";
import {
  Background,
  Controls,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { initialEdges,initialNodes } from "./Workflow.constant";
import CircleNode from "./CircleNode";
import CustomEdge from "./customEdge";
const nodeTypes = {
  'Start': CircleNode,
  "End": CircleNode,
};
const edgeTypes = {
  customEdge: CustomEdge,
};
function Workflow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const handleNodesChange = useCallback(onNodesChange, [onNodesChange]);
  const handleEdgesChange = useCallback(onEdgesChange, [onEdgesChange]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={handleNodesChange}
        onEdgesChange={handleEdgesChange}
        style={{backgroundColor: '#F2E3C3' }}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <Background variant="dots" />
        <Controls />
      </ReactFlow>
    </div>
  );
}
export default Workflow;
