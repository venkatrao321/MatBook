import React from "react";
import { Button } from "antd";
import { useReactFlow,MarkerType } from "@xyflow/react";


const Tooltip = ({ sourceNodeId, targetNodeId }) => {
  const { setNodes, setEdges, getNodes, getEdges } = useReactFlow();

  const addNodeBetween = (label) => {
    const newNodeId = `node-${Date.now()}`;
    const nodes = getNodes();
    const edges = getEdges();

    // Get the source and target nodes
    const sourceNode = nodes.find((node) => node.id === sourceNodeId);
    const targetNode = nodes.find((node) => node.id === targetNodeId);

    if (!sourceNode || !targetNode) return;

    // Calculate the new node's position
    const newY = (sourceNode.position.y + targetNode.position.y+150) / 2;

    // Move all nodes below the target node downwards
    setNodes((prevNodes) =>
      prevNodes.map((node) => {
        if (node.position.y >= targetNode.position.y) {
          return {
            ...node,
            position: {
              ...node.position,
              y: node.position.y + 150, // Move down by 150px
            },
          };
        }
        return node;
      }).concat({
        id: newNodeId,
        position: { x: 250, y: newY },
        data: { label, color: "#FFFFFF" },
        type: "default",
      })
    );

    // Update edges to insert the new node between source and target
    setEdges((prevEdges) =>
      prevEdges
        .filter(
          (edge) =>
            !(edge.source === sourceNodeId && edge.target === targetNodeId)
        ) // Remove the edge between source and target
        .concat([
          {
            id: `e-${sourceNodeId}-${newNodeId}`,
            source: sourceNodeId,
            target: newNodeId,
            type: "customEdge",
            markerEnd: {
                  type: MarkerType.ArrowClosed,
                  width: 20,
                  height: 20,
                  color: '#828282',
                }
          },

          {
            id: `e-${newNodeId}-${targetNodeId}`,
            source: newNodeId,
            target: targetNodeId,
            type: "customEdge",
            markerEnd: {
                  type: MarkerType.ArrowClosed,
                  width: 20,
                  height: 20,
                  color: '#828282',
                }
          },
        ])
    );
  };

  const addApiCallNode = () => addNodeBetween("API Call");
  const addTextboxNode = () => addNodeBetween("Textbox");

  return (
    <>
      <Button onClick={addApiCallNode}>API Call</Button>
      <Button onClick={addTextboxNode}>Textbox</Button>
    </>
  );
};

export default Tooltip;