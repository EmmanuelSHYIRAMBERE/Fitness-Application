const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 mt-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <p>Company Name</p>
          <p>&copy; 2024 All rights reserved</p>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="/about" className="hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/privacy" className="hover:text-gray-300">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
