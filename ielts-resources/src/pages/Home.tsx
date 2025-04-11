import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt="IELTS Resources"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            IELTS Resources
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Comprehensive resources for IELTS preparation. Access free materials for Writing, Reading, Listening, and Speaking sections.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Writing Feature */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="/images/writing-feature.jpg"
              alt="Writing Resources"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-semibold text-white">Writing</h3>
              <p className="text-sm text-gray-200">Task 1 & 2 templates and guides</p>
            </div>
          </div>

          {/* Reading Feature */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="/images/reading-feature.jpg"
              alt="Reading Resources"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-semibold text-white">Reading</h3>
              <p className="text-sm text-gray-200">Practice materials and strategies</p>
            </div>
          </div>

          {/* Listening Feature */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="/images/listening-feature.jpg"
              alt="Listening Resources"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-semibold text-white">Listening</h3>
              <p className="text-sm text-gray-200">Audio resources and practice tests</p>
            </div>
          </div>

          {/* Speaking Feature */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="/images/speaking-feature.jpg"
              alt="Speaking Resources"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-semibold text-white">Speaking</h3>
              <p className="text-sm text-gray-200">Interview tips and practice questions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 