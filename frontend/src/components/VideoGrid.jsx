import React from 'react';
import VideoCard from './VideoCard';

const VideoGrid = () => {
  const videos = [
    {
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Big Buck Bunny',
      channelName: 'Blender Foundation',
      views: '1M views',
      uploadDate: '2 days ago',
    },
    {
      videoSrc: 'https://www.w3schools.com/html/movie.mp4',
      title: 'Sample Video',
      channelName: 'Sample Channel',
      views: '500K views',
      uploadDate: '3 days ago',
    },
    // Add more video objects as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

      {videos.map((video, index) => (
        <VideoCard
          key={index}
          videoSrc={video.videoSrc}
          title={video.title}
          channelName={video.channelName}
          views={video.views}
          uploadDate={video.uploadDate}
        />
      ))}
    </div>
  );
};

export default VideoGrid;
