import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
  ];

  const courses = [
    {
      id: 1,
      title: 'IELTS Writing Mastery',
      level: 'intermediate',
      description: 'Master both Academic and General Training writing tasks with our comprehensive course.',
      price: 99.99,
      image: 'https://via.placeholder.com/300x200',
      duration: '8 weeks',
      lessons: 24,
      rating: 4.9,
      reviews: 256,
    },
    {
      id: 2,
      title: 'Speaking Confidence Builder',
      level: 'beginner',
      description: 'Build confidence and improve your speaking skills with our structured approach.',
      price: 79.99,
      image: 'https://via.placeholder.com/300x200',
      duration: '6 weeks',
      lessons: 18,
      rating: 4.8,
      reviews: 189,
    },
    {
      id: 3,
      title: 'Advanced Reading Strategies',
      level: 'advanced',
      description: 'Learn advanced techniques to tackle complex reading passages effectively.',
      price: 89.99,
      image: 'https://via.placeholder.com/300x200',
      duration: '4 weeks',
      lessons: 12,
      rating: 4.7,
      reviews: 145,
    },
    {
      id: 4,
      title: 'Listening Skills Enhancement',
      level: 'intermediate',
      description: 'Improve your listening comprehension with our specialized course.',
      price: 69.99,
      image: 'https://via.placeholder.com/300x200',
      duration: '5 weeks',
      lessons: 15,
      rating: 4.8,
      reviews: 167,
    },
  ];

  const filteredCourses = selectedLevel === 'all'
    ? courses
    : courses.filter(course => course.level === selectedLevel);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">IELTS Courses</h1>

      {/* Level Filter */}
      <div className="flex flex-wrap gap-4 mb-8">
        {levels.map(level => (
          <button
            key={level.id}
            onClick={() => setSelectedLevel(level.id)}
            className={`px-4 py-2 rounded-full ${
              selectedLevel === level.id
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {level.name}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {course.duration}
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {course.lessons} lessons
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span className="text-gray-700">{course.rating}</span>
                  <span className="text-gray-500 ml-1">({course.reviews} reviews)</span>
                </div>
                <span className="text-xl font-bold text-primary">${course.price}</span>
              </div>
              <Link
                to={`/product/${course.id}`}
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

export default Courses; 