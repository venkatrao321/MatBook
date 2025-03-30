import { Handle, Position } from '@xyflow/react';
import React, { memo, useState } from 'react';
import CustomModal from './CustomModal';

const CircleNode = ({ data, id }) => {
    console.log("Rendering CircleNode:", data, id);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleNodeClick = () => {
        console.log(`Node clicked: ${data.label}`); // Debug log to verify the node click
        if (data.label === "API Call") {
            setIsModalVisible(true); // Open the modal when "API Call" node is clicked
        }
    };

    const handleModalClose = () => {
        setIsModalVisible(false); // Close the modal
    };

    const handlerStartprops = {
        type: 'source',
        position: Position.Bottom,
        isConnectable: true,
        selectable: true.toString(), // Ensure selectable is passed as a string
    };
    const handlerEndprops = {
        type: 'target',
        position: Position.Top,
        isConnectable: true,
        selectable: true.toString(), // Ensure selectable is passed as a string
    };

    return (
        <>
            <div
                className="flex justify-center items-center bg-beige cursor-pointer"
                onClick={handleNodeClick} // Handle node click
            >
                <div className="relative w-24 h-24 flex justify-center items-center">
                    <div
                        className="absolute w-full h-full rounded-full"
                        style={{ backgroundColor: data.color }} // Set background color dynamically
                    ></div>
                    <div
                        className="absolute w-20 h-20 rounded-full flex justify-center items-center border-4 border-white"
                        style={{ backgroundColor: data.color }} // Set background color dynamically
                    >
                        <span className="text-white text-lg font-semibold">{data.label}</span>
                    </div>
                </div>
                <Handle {...(data.label === "Start" ? handlerStartprops : handlerEndprops)} />
            </div>
            {isModalVisible && (
                <CustomModal
                    isModalOpen={isModalVisible}
                    onClose={handleModalClose}
                />
            )}
        </>
    );
};

export default memo(CircleNode);