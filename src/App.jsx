import React from 'react';
import LeftSidebar from './components/LeftSideBar/LeftSideBar.jsx';
import Flow from './components/Flow/Flow.jsx';

export default function App() {
    return (
        <div className="flex h-screen">
            <LeftSidebar />
            <Flow />
        </div>
    );
}
