import React from 'react';

const Features: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 mt-20">
      <h1 className="text-4xl font-bold text-center mb-8">Tech Blog Features</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-600">1. In-depth Analysis</h2>
        <p className="text-lg text-gray-700">
          Our tech blog provides detailed and well-researched content on the latest technology trends, product launches, and industry developments. Every article is crafted to give readers valuable insights.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-600">2. Hands-on Tutorials</h2>
        <p className="text-lg text-gray-700">
          Step-by-step guides, coding tutorials, and practical tips help our readers learn new skills and apply them in real-world projects. We simplify complex topics so anyone can follow along.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-600">3. Expert Interviews</h2>
        <p className="text-lg text-gray-700">
          Gain insights from the industry&apos;s leading experts. Our blog regularly features interviews with top professionals in software development, cybersecurity, AI, and more.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-600">4. Product Reviews</h2>
        <p className="text-lg text-gray-700">
          Stay updated with honest and unbiased reviews of the latest gadgets, software, and tech accessories. We provide pros, cons, and real-world testing to help you make informed decisions.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-600">5. Community-driven Content</h2>
        <p className="text-lg text-gray-700">
          Our tech blog thrives on the engagement and contributions of our readers. We encourage tech enthusiasts to share their knowledge, submit articles, and engage in discussions with like-minded individuals.
        </p>
      </div>
    </div>
  );
};

export default Features;
