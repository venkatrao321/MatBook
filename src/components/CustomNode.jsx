import { Handle, Position } from '@xyflow/react';

function TextUpdaterNode({ data, isConnectable }) {
  const isStartNode = data.value === 'Start';

  return (
    <div
      style={{
        width: 100,
        height: 100,
        borderRadius: '50%',
        backgroundColor: isStartNode ? '#FFD700' : '#FF6347', // Yellow for Start, Red for End
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000',
        position: 'relative',
      }}
    >
      {data.value}
      <Handle
        type={isStartNode ? 'source' : 'target'} // Source for Start, Target for End
        position={isStartNode ? Position.Bottom : Position.Top} // Bottom for Start, Top for End
        id={isStartNode ? 'bottom' : 'top'} // Assign unique id for handles
        style={{
          background: '#555',
          [isStartNode ? 'bottom' : 'top']: -10, // Adjust position for Bottom or Top
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default TextUpdaterNode;
