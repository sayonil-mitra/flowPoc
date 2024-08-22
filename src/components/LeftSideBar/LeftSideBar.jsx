import React from 'react';

export default function LeftSidebar() {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <div className="p-4 bg-gray-200 h-full w-1/4">
            <div
                className="p-2 bg-white mb-2 rounded shadow cursor-pointer"
                onDragStart={(event) => onDragStart(event, 'sms')}
                draggable
            >
                SMS
            </div>
            <div
                className="p-2 bg-white mb-2 rounded shadow cursor-pointer"
                onDragStart={(event) => onDragStart(event, 'whatsapp')}
                draggable
            >
                WhatsApp
            </div>
            <div
                className="p-2 bg-white mb-2 rounded shadow cursor-pointer"
                onDragStart={(event) => onDragStart(event, 'voice')}
                draggable
            >
                Voice
            </div>
        </div>
    );
}
