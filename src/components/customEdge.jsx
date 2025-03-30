import {
  BezierEdge,
  getBezierPath,
  useReactFlow,
  EdgeLabelRenderer,
} from "@xyflow/react";
import PlusCircleTwoTone from "@ant-design/icons/PlusCircleTwoTone";
export default function CustomEdge(props) {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  } = props;

  const { setEdges } = useReactFlow();
  const onClickopentootip =()=>{
    
  }
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      <BezierEdge {...props} />
      <EdgeLabelRenderer>
        <button
          style={{
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            position: "absolute",
          }}
          onClick={onClickopentootip}
        >
         <PlusCircleTwoTone twoToneColor={"#4F4F4F"} />  
        </button>
      </EdgeLabelRenderer>
    </>
  );
}