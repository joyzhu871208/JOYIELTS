import React, { useState } from 'react';
import ResourceCard from '../components/ResourceCard';

const Resources: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('writing');

  const categories = [
    { id: 'writing', name: 'Writing' },
    { id: 'reading', name: 'Reading' },
    { id: 'listening', name: 'Listening' },
    { id: 'speaking', name: 'Speaking' }
  ];

  const writingResources = [
    {
      id: 1,
      title: "Map A - Porth Harbour",
      description: "Task 1 template for map description",
      image: "/images/map-a.jpg",
      downloadLink: "/resources/Map A Porth Harbour Free sample task 1 template.pdf",
      videoLink: "https://youtube.com/map-tutorial"
    },
    {
      id: 2,
      title: "Map B - Town Planning",
      description: "Task 1 template for town planning maps",
      image: "/images/map-b.jpg",
      downloadLink: "/resources/Map B Free sample task 1 template.pdf",
      videoLink: "https://youtube.com/map-tutorial"
    },
    {
      id: 3,
      title: "Pie Chart A",
      description: "Task 1 guide for pie chart description",
      image: "/images/pie-chart-a.jpg",
      downloadLink: "/resources/Pie A Free sample task 1.pdf",
      videoLink: "https://youtube.com/pie-chart-tutorial"
    },
    {
      id: 4,
      title: "Pie Chart B",
      description: "Task 1 guide for pie chart description techniques",
      image: "/images/pie-chart-b.jpg",
      downloadLink: "/resources/Pie B free sample task1.pdf",
      videoLink: "https://youtube.com/pie-chart-tutorial"
    },
    {
      id: 5,
      title: "Process - Ethanol Production",
      description: "Task 1 guide for process diagram description",
      image: "/images/process-ethanol.jpg",
      downloadLink: "/resources/Process Diagram Ethonal Free sample task 12.pdf",
      videoLink: "https://youtube.com/process-tutorial"
    },
    {
      id: 6,
      title: "Process - Sugar Production",
      description: "Task 1 guide for process diagram description",
      image: "/images/process-sugar.jpg",
      downloadLink: "/resources/Process diagram sugar free sample task 1.pdf",
      videoLink: "https://youtube.com/process-tutorial"
    }
  ];

  const readingResources = [
    {
      id: 1,
      title: "Coming Soon",
      description: "We'll be adding reading resources soon. Stay tuned!",
      image: "https://via.placeholder.com/400x200?text=Coming+Soon",
      downloadLink: "#",
      videoLink: "#"
    },
    {
      id: 2,
      title: "Coming Soon",
      description: "New reading materials are being prepared.",
      image: "https://via.placeholder.com/400x200?text=Coming+Soon",
      downloadLink: "#",
      videoLink: "#"
    },
    {
      id: 3,
      title: "Coming Soon",
      description: "Check back later for reading practice resources.",
      image: "https://via.placeholder.com/400x200?text=Coming+Soon",
      downloadLink: "#",
      videoLink: "#"
    }
  ];

  const listeningResources = [
    {
      id: 1,
      title: "Coming Soon",
      description: "Listening practice materials will be available soon.",
      image: "https://via.placeholder.com/400x200?text=Coming+Soon",
      downloadLink: "#",
      videoLink: "#"
    },
    {
      id: 2,
      title: "Coming Soon",
      description: "Audio resources are being prepared for you.",
      image: "https://via.placeholder.com/400x200?text=Coming+Soon",
      downloadLink: "#",
      videoLink: "#"
    },
    {
      id: 3,
      title: "Coming Soon",
      description: "Check back for listening test practice materials.",
      image: "https://via.placeholder.com/400x200?text=Coming+Soon",
      downloadLink: "#",
      videoLink: "#"
    }
  ];

  const speakingResources = [
    {
      id: 1,
      title: "Coming Soon",
      description: "Speaking practice guides will be available soon.",
      image: "https://via.placeholder.com/400x200?text=Coming+Soon",
      downloadLink: "#",
      videoLink: "#"
    },
    {
      id: 2,
      title: "Coming Soon",
      description: "Part 1, 2, and 3 practice materials coming soon.",
      image: "https://via.placeholder.com/400x200?text=Coming+Soon",
      downloadLink: "#",
      videoLink: "#"
    },
    {
      id: 3,
      title: "Coming Soon",
      description: "Check back for speaking test resources and tips.",
      image: "https://via.placeholder.com/400x200?text=Coming+Soon",
      downloadLink: "#",
      videoLink: "#"
    }
  ];

  const getResources = () => {
    switch(activeCategory) {
      case 'writing':
        return writingResources;
      case 'reading':
        return readingResources;
      case 'listening':
        return listeningResources;
      case 'speaking':
        return speakingResources;
      default:
        return writingResources;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Simple Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">IELTS Resources</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            High-quality materials to help you prepare for your IELTS exam. 
            Select a category below to browse available resources.
          </p>
        </div>
        
        {/* Simple Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-lg shadow-sm p-1">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getResources().map(resource => (
            <ResourceCard
              key={resource.id}
              title={resource.title}
              description={resource.description}
              image={resource.image}
              downloadLink={resource.downloadLink}
              videoLink={resource.videoLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources; 