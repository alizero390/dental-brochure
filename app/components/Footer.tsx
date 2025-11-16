import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">DentistMatch</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Connecting patients with quality dental care providers. Making dental health accessible and convenient for everyone.
            </p>
            <p className="text-gray-500">&copy; 2024 DentistMatch. All rights reserved.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition duration-200">Home</Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition duration-200">About</Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition duration-200">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>hello@dentistmatch.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}