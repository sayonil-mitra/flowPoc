import { useState, useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';

const handleStyle = { left: 10 };

export default function CustomNode({ data }) {
    const [collapsed, setCollapsed] = useState(true);

    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            style={{
                border: '1px solid blue',
                padding: '16px',
                borderRadius: '8px',
                backgroundColor: 'white',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                maxHeight: '300px', // Fixed height for scrollable area
                overflowY: 'auto', // Enable vertical scrolling
                textAlign: 'center' // Center text horizontally
            }}
        >
            <Handle type="target" position={Position.Top} />
            <div
                onClick={toggleCollapse}
                style={{
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    marginBottom: '10px' // Space below the label
                }}
            >
                {data.label}
            </div>
            {!collapsed && (
                <div>
                    <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px' }}>Phone Number:</label>
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        onChange={onChange}
                        style={{
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            width: '100%',
                            marginBottom: '10px'
                        }}
                        placeholder="Enter phone number"
                    />
                    {/* Render 15 inputs for demonstration */}
                    {Array.from({ length: 15 }).map((_, index) => (
                        <div key={index} style={{ marginBottom: '10px' }}>
                            <input
                                type="text"
                                onChange={onChange}
                                style={{
                                    padding: '8px',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    width: '100%'
                                }}
                                placeholder={`Input ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            )}
            <Handle type="source" position={Position.Bottom} id="a" />
        </div>
    );
}
