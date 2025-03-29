import { Handle,Position  } from '@xyflow/react';
import React from 'react';

const CircleNode = ({data,type}) => {
    console.log(data,type);

    const handlerStartprops = {
        type: 'source',
        position: Position.Bottom,
        isConnectable: true,
    };
    const handlerEndprops = {
        type: 'target',
        position: Position.Top,
        isConnectable: true,
    };
    return (
    <div className="flex justify-center items-center  bg-beige">
        <div className="relative w-24 h-24 flex justify-center items-center">
          <div className={`absolute w-full h-full bg-[${data.color}] rounded-full`}></div>
          <div className={`absolute w-20 h-20 bg-[${data.color}] rounded-full flex justify-center items-center border-4 border-white`}>
            <span className="text-white text-lg font-semibold">{data.label}</span>
          </div>
        </div>
        <Handle {...(data.label==="Start" ? handlerStartprops : handlerEndprops)} />
      </div>
    );
};

export default CircleNode;