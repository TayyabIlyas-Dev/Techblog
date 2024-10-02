// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>GadgetsSheild - Ultimate Protection for Your Devices</title>
        <meta name="description" content="GadgetsSheild offers premium protection for all your gadgets with style and durability." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold">Protect Your Gadgets with GadgetsSheild</h1>
            <p className="mt-4 text-lg">Stylish and durable protection for your mobile devices</p>
            <button className="mt-8 bg-white text-blue-600 py-2 px-6 rounded-full font-semibold hover:bg-gray-100">
              Shop Now
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold">Why Choose GadgetsSheild?</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-lg shadow-sm">
                <Image src="/landing-first-look-laptop.webp" alt="Durable" width={100} height={100} />
                <h3 className="text-2xl mt-4">Durability</h3>
                <p className="mt-2">Our products are built to last and provide superior protection.</p>
              </div>
              <div className="p-6 border rounded-lg shadow-sm">
                <Image src="/feature2.png" alt="Stylish" width={100} height={100} />
                <h3 className="text-2xl mt-4">Stylish</h3>
                <p className="mt-2">Sleek designs that match your personal style.</p>
              </div>
              <div className="p-6 border rounded-lg shadow-sm">
                <Image src="/feature3.png" alt="Affordable" width={100} height={100} />
                <h3 className="text-2xl mt-4">Affordable</h3>
                <p className="mt-2">Premium protection without breaking the bank.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-purple-600 text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold">Ready to Protect Your Gadgets?</h2>
            <p className="mt-4 text-lg">Shop our collection and keep your devices safe.</p>
            <button className="mt-8 bg-white text-purple-600 py-2 px-6 rounded-full font-semibold hover:bg-gray-100">
              Explore Products
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
