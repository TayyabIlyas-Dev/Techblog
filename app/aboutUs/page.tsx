import React from 'react';
import Link from 'next/link';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 m-20">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      <p className="text-lg text-gray-700 mb-6">
        Welcome to our tech blog, your go-to source for the latest news, tutorials, and insights in the world of technology. Our team is passionate about all things tech and strives to provide valuable content to our readers.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h2>
      <p className="text-lg text-gray-700 mb-6">
        Our mission is to demystify technology and make it accessible to everyone. We aim to educate, inform, and inspire our readers through in-depth articles, hands-on tutorials, and expert insights. Whether you&apos;re a tech enthusiast, a seasoned professional, or just starting, we have something for you!
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Team</h2>
      <p className="text-lg text-gray-700 mb-6">
        Our team consists of tech enthusiasts, writers, and industry professionals dedicated to sharing their knowledge and experience with the community. We believe in the power of collaboration and continuous learning.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Get Involved</h2>
      <p className="text-lg text-gray-700 mb-6">
        We welcome feedback, contributions, and collaboration! If you have a topic you&apos;d like us to cover or if you&apos;re interested in writing for us, please reach out. Together, we can build a vibrant tech community.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contact Us</h2>
      <p className="text-lg text-gray-700 mb-6">
        If you have any questions or inquiries, feel free to contact us at: 
        <Link href="https://portfolio-tayyab-ilyas.netlify.app/" className="text-blue-500 underline"> Contact Link</Link>
      </p>
    </div>
  );
};

export default AboutUs;
