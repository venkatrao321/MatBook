import React from "react";
import { Handle, Position } from "@xyflow/react";
import { Card } from "antd";

const CustomNode = ({ data }) => {
  return (
    <Card
      title={data.label}
      bordered={true}
      style={{ width: 150, textAlign: "center", background: "#asdas" }}
    >
      <Handle type="target" position={Position.Top} />
      <div>{data.description}</div>
      <Handle type="source" position={Position.Bottom} />
    </Card>
  );
};

export default CustomNode;
