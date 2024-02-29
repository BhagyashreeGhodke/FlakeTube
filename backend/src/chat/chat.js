import chat from '../chat/chat.js'

// Create a new chat message
const createChatMessage = async (senderId, message) => {
  try {
    const newMessage = new chat({
      sender: senderId,
      message
    });
    return await newMessage.save();
  } catch (error) {
    console.error('Error creating chat message:', error);
    throw error;
  }
};

// Get all chat messages
const getAllChatMessages = async () => {
  try {
    return await chat.find().populate('sender').sort({ createdAt: -1 });
  } catch (error) {
    console.error('Error getting all chat messages:', error);
    throw error;
  }
};
