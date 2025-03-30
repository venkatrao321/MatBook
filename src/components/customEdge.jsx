import {
  BaseEdge,
  getStraightPath,
  useReactFlow,
  EdgeLabelRenderer,
} from "@xyflow/react";
import PlusCircleTwoTone from "@ant-design/icons/PlusCircleTwoTone";
import { Popover, Button } from "antd";
import Tooltip from "./Tooltip";

export default function CustomEdge(props) {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    source,
    target,
    selectable, // Added selectable prop
    sourceHandleId, // Exclude this prop
    targetHandleId, // Exclude this prop
    pathOptions, // Exclude this prop
    ...restProps // Collect remaining props
  } = props;

  const { setEdges } = useReactFlow();

  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <BaseEdge
        path={edgePath}
        {...restProps} // Pass only the remaining props
        selectable={selectable?.toString()} // Ensure selectable is passed as a string
      />
      <EdgeLabelRenderer>
        <Popover
          content={<Tooltip sourceNodeId={source} targetNodeId={target} />}
          trigger="click"
          placement="right"
          overlayStyle={{ width: "200px" }}
        >
          <Button
            style={{
              transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
              position: "absolute",
              cursor: "pointer",
              zIndex: 10,
              pointerEvents: "all",
              width: "32px",
              height: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
            }}
            shape="circle"
          >
            <PlusCircleTwoTone
              twoToneColor={"#4F4F4F"}
              style={{
                fontSize: "24px",
                display: "block",
              }}
            />
          </Button>
        </Popover>
      </EdgeLabelRenderer>
    </>
  );
}
