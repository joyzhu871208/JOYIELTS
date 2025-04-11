import React from 'react';

interface ResourceCardProps {
  title: string;
  description: string;
  image: string;
  downloadLink: string;
  videoLink: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  image,
  downloadLink,
  videoLink,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex gap-2">
          <a 
            href={downloadLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 inline-flex justify-center items-center px-3 py-2 text-sm font-medium bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download
          </a>
          <a 
            href={videoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 inline-flex justify-center items-center px-3 py-2 text-sm font-medium border border-primary text-primary rounded-md hover:bg-gray-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Video
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard; 