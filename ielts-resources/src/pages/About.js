import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">About IELTS Resources</h1>

        {/* Mission Statement */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At IELTS Resources, we are dedicated to helping students achieve their desired IELTS scores
            through high-quality, accessible learning materials. We believe that everyone deserves the
            opportunity to excel in their IELTS journey, and we're committed to providing the tools and
            resources needed to succeed.
          </p>
        </section>

        {/* Our Story */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded by a team of experienced IELTS instructors and successful test-takers, IELTS Resources
            began with a simple idea: to create comprehensive, easy-to-use materials that would help
            students navigate the complexities of the IELTS exam.
          </p>
          <p className="text-gray-600">
            What started as a small collection of templates and study guides has grown into a
            comprehensive platform offering a wide range of resources, from detailed templates to
            full-length courses, all designed to meet the diverse needs of IELTS candidates.
          </p>
        </section>

        {/* Our Values */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                We maintain the highest standards in all our materials, ensuring they are accurate,
                up-to-date, and effective.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
              <p className="text-gray-600">
                We believe in making quality IELTS preparation resources available to everyone,
                regardless of their background or location.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously improve our resources based on student feedback and the latest
                developments in IELTS testing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-600">
                We provide comprehensive support to our students, ensuring they have the guidance
                they need throughout their IELTS journey.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/200"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-gray-600">Founder & Lead Instructor</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/200"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Michael Chen</h3>
              <p className="text-gray-600">Content Director</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions about our resources or need assistance? We'd love to hear from you.
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
};

export default About; 