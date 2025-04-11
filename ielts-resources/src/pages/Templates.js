import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Templates = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'writing', name: 'Writing' },
    { id: 'speaking', name: 'Speaking' },
    { id: 'reading', name: 'Reading' },
    { id: 'listening', name: 'Listening' },
  ];

  const templates = [
    {
      id: 1,
      title: 'Academic Writing Task 1 Template',
      category: 'writing',
      description: 'Master the art of describing graphs, charts, and processes with our comprehensive template.',
      price: 29.99,
      image: 'https://via.placeholder.com/300x200',
      rating: 4.8,
      reviews: 128,
    },
    {
      id: 2,
      title: 'Speaking Part 2 Template',
      category: 'speaking',
      description: 'Structure your 2-minute talk effectively with our proven template.',
      price: 24.99,
      image: 'https://via.placeholder.com/300x200',
      rating: 4.9,
      reviews: 95,
    },
    {
      id: 3,
      title: 'Reading Time Management Template',
      category: 'reading',
      description: 'Optimize your reading test performance with our time management template.',
      price: 19.99,
      image: 'https://via.placeholder.com/300x200',
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 4,
      title: 'Listening Note-Taking Template',
      category: 'listening',
      description: 'Enhance your listening comprehension with our specialized note-taking template.',
      price: 19.99,
      image: 'https://via.placeholder.com/300x200',
      rating: 4.6,
      reviews: 112,
    },
  ];

  const filteredTemplates = selectedCategory === 'all'
    ? templates
    : templates.filter(template => template.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">IELTS Templates</h1>

      {/* Categories */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category.id
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTemplates.map(template => (
          <div key={template.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img
              src={template.image}
              alt={template.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
              <p className="text-gray-600 mb-4">{template.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span className="text-gray-700">{template.rating}</span>
                  <span className="text-gray-500 ml-1">({template.reviews} reviews)</span>
                </div>
                <span className="text-xl font-bold text-primary">${template.price}</span>
              </div>
              <Link
                to={`/product/${template.id}`}
                className="mt-4 btn btn-primary w-full text-center block"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates; 