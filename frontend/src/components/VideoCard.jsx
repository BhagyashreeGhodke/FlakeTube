import React from 'react';

const VideoCard = ({ videoSrc, title, channelName, views, uploadDate }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
      <div className="bg-white dark:bg-gray-800">
        <video 
          controls 
          className="w-full h-40 object-cover"
          poster="https://via.placeholder.com/150" // Optional poster image
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="p-4 bg-white dark:bg-gray-900">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{title}</h4>
        <p className="text-xs text-gray-500 dark:text-gray-400">{channelName}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{views} • {uploadDate}</p>
      </div>
    </div>
  );
};

export default VideoCard;
