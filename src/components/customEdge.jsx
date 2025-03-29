import { BaseEdge, EdgeLabelRenderer } from "@xyflow/react";

function CustomEdge({ sourceX, sourceY, targetX, targetY, ...props }) {
  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <BaseEdge path={edgePath} {...props} />;
      <EdgeLabelRenderer>
        <Button
          size="small"
          icon={<PlusCircleTwoTone />} // Use Plus icon
          onClick={() => alert(`Button on edge ${props.id} clicked!`)}
        />

        <text x={labelX} y={labelY} fill="#fff" fontSize={12}>
          {props.data.label}
        </text>
        <path d={edgePath} stroke="#222" strokeWidth={2} fill="none" />
      </EdgeLabelRenderer>
    </>
  );
}

export default CustomEdge;
