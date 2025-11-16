import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Find Your Perfect <span className="text-blue-600">Dentist</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            The modern way to discover and book dental care. Connecting patients with top-rated dentists instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-200 shadow-lg hover:shadow-xl"
            >
              Get Early Access
            </Link>
            <Link 
              href="/about" 
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Simple, transparent, and designed with your dental health in mind.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-blue-50 to-white hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Search & Compare</h3>
              <p className="text-gray-600 leading-relaxed">
                Find dentists based on location, services, insurance, and verified patient reviews.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-green-50 to-white hover:shadow-lg transition duration-300">
              <div className="bg-green-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📅</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Book Instantly</h3>
              <p className="text-gray-600 leading-relaxed">
                See real-time availability and schedule appointments with just a few clicks.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-purple-50 to-white hover:shadow-lg transition duration-300">
              <div className="bg-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Care</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive exceptional dental care from carefully vetted and certified professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Dental Experience?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of satisfied patients today.</p>
          <Link 
            href="/contact" 
            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-200 inline-block"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}