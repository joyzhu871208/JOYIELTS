import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState('overview');

  // Mock data - in a real app, this would come from an API
  const product = {
    id: parseInt(id),
    title: 'IELTS Writing Mastery',
    type: 'course', // or 'template'
    description: 'Master both Academic and General Training writing tasks with our comprehensive course.',
    price: 99.99,
    image: 'https://via.placeholder.com/800x400',
    rating: 4.9,
    reviews: 256,
    duration: '8 weeks',
    lessons: 24,
    level: 'Intermediate',
    features: [
      'Comprehensive writing task 1 and 2 templates',
      'Step-by-step guidance for each question type',
      'Real examiner feedback on practice essays',
      'Access to exclusive writing resources',
      'Lifetime access to course materials',
    ],
    curriculum: [
      {
        week: 1,
        title: 'Introduction to IELTS Writing',
        lessons: ['Understanding the test format', 'Key assessment criteria', 'Common mistakes to avoid'],
      },
      {
        week: 2,
        title: 'Task 1 - Academic',
        lessons: ['Graph description techniques', 'Data analysis methods', 'Vocabulary for trends'],
      },
      {
        week: 3,
        title: 'Task 1 - General Training',
        lessons: ['Letter writing formats', 'Tone and style', 'Common scenarios'],
      },
      {
        week: 4,
        title: 'Task 2 - Essay Structure',
        lessons: ['Essay planning', 'Introduction writing', 'Body paragraph development'],
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-lg shadow-sm"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="flex items-center mb-4">
            <span className="text-yellow-400 mr-1">★</span>
            <span className="text-gray-700 mr-2">{product.rating}</span>
            <span className="text-gray-500">({product.reviews} reviews)</span>
          </div>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {product.duration}
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {product.lessons} lessons
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {product.level}
            </div>
          </div>
          <div className="text-3xl font-bold text-primary mb-6">${product.price}</div>
          <button className="btn btn-primary w-full">Purchase Now</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            <button
              onClick={() => setSelectedTab('overview')}
              className={`py-4 px-6 border-b-2 font-medium text-sm ${
                selectedTab === 'overview'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setSelectedTab('curriculum')}
              className={`py-4 px-6 border-b-2 font-medium text-sm ${
                selectedTab === 'curriculum'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Curriculum
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mb-12">
        {selectedTab === 'overview' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {selectedTab === 'curriculum' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
            <div className="space-y-6">
              {product.curriculum.map((week) => (
                <div key={week.week} className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4">
                    <h3 className="text-lg font-semibold">Week {week.week}: {week.title}</h3>
                  </div>
                  <div className="px-6 py-4">
                    <ul className="space-y-2">
                      {week.lessons.map((lesson, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail; 