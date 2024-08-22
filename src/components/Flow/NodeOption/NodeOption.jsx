import { useState } from "react";

export default function NodeOption({ position, label, onClose, selectedNode }) {

    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleSave = () => {
        setNodes((nds) =>
            nds.map((nd) => {
                if (nd.id === selectedNode.id) {
                    nd.data = { ...nd.data, phoneNumber };
                }
                return nd;
            })
        );
        // setSelectedNode(null);
        setPhoneNumber('');
    };

    return (
        <div
            className="absolute p-4 bg-white shadow-lg rounded"
            style={{ top: position.y, left: position.x }}
        >
            <h2>Enter Phone Number for {label}</h2>
            <input
                type="text"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="border p-2 rounded"
            />
            <button
                onClick={handleSave}
                className="mt-4 p-2 bg-blue-500 text-white rounded"
            >
                Save
            </button>
        </div>
    );
}



