import React, { useState, useMemo } from 'react';
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import NodeOption from './NodeOption/NodeOption';
import CustomNode from './NodeOption/CustomNode/CustomNode';

const initialNodes = [];
const initialEdges = [];

export default function Flow() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [selectedNode, setSelectedNode] = useState(null);
    const [nodePosition, setNodePosition] = useState({ x: 0, y: 0 });

    const nodeTypes = useMemo(() => ({ customNode: CustomNode }), []);

    const onDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };

    const onDrop = (event) => {
        event.preventDefault();

        const nodeType = event.dataTransfer.getData('application/reactflow');
        const position = event.target.getBoundingClientRect();
        const newNode = {
            id: `${nodeType}-${nodes.length + 1}`,
            type: 'customNode',
            position: {
                x: event.clientX - position.left,
                y: event.clientY - position.top,
            },
            data: { label: `${nodeType}` },
        };

        setNodes((nds) => nds.concat(newNode));
    };

    const onNodeDoubleClick = (event, node) => {
        setSelectedNode(node);
    };

    const handleClose = () => {
        setSelectedNode(null);
    };

    return (
        <div
            // className="w-3/4 h-full bg-gray-100"
            style={{ width: '75vw', height: '100vh' }}
            onDragOver={onDragOver} onDrop={onDrop}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onNodeDoubleClick={onNodeDoubleClick}
                nodeTypes={nodeTypes}
            />
        </div>
    );
}
