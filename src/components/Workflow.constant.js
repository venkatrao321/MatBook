import {Edge, Node} from 'reactflow';

export const initialNodes = [
  { id: "1", position: { x: 250, y: 250 }, data: { label: "Start" },type: "Start" },
  { id: "2", position: { x: 250, y: 400 }, data: { label: "End" },type: "End"},
];
export const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];
