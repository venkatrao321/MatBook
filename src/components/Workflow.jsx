import React from "react";
import { Background, Controls, ReactFlow, useEdgesState, useNodesState } from "@xyflow/react";

import "@xyflow/react/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 250, y: 250 }, data: { label: "Start" } },
  { id: "2", position: { x: 250, y: 400 }, data: { label: "End" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

function Workflow() {
  const [nodes, setNodes,onNodesChange  ] = useNodesState(initialNodes);
  const [edges, setEdges,onEdgesChange] = useEdgesState(initialEdges);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} fitView>
        <Background variant="dots" />
        <Controls />  
      </ReactFlow>
    </div>
  );
}
export default Workflow;
