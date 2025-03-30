
import { MarkerType } from '@xyflow/react';
export const initialNodes = [
  { id: "1", position: { x: 250, y: 250 }, data: { label: "Start",color:"#849E4C" },type: "Start" },
  { id: "2", position: { x: 250, y: 500 }, data: { label: "End",color:"#EE3425" },type: "End" },
];
export const initialEdges = [{ id: "e1-2", source: "1", target: "2" ,type: "customEdge" ,markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#828282',
    }, }];
