import React from 'react';
import Chat from './Chat';

const ChatWindow = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-gray-200">
        {/* Sidebar or User List Component */}
      </div>
      <div className="flex-1 bg-gray-100">
        <Chat />
      </div>
    </div>
  );
};

export default ChatWindow;
