import {
    FaFacebookF,
    FaInstagram,
  } from 'react-icons/fa';
  import { SiX } from 'react-icons/si';
  
  export const Footer = () => (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
  
        {/* Social Links */}
        <div className="footer-social mb-3">
          <a
            href="https://facebook.com/OneAtATimeRescue"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="mx-2"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://instagram.com/OneAtATimeRescue"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="mx-2"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://twitter.com/OneAtATimeRescue"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="mx-2"
          >
            <SiX size={24} />
          </a>
        </div>
  
        {/* Copyright */}
        <p className="mb-1">
          © {new Date().getFullYear()} One At A Time Rescue, Brandon MB
        </p>
        
        <p className="mb-0">
          Helping animals find forever homes, one at a time.
        </p>

        <p className="mb-3">
        Web by <a href="https://personal-page-vadym.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-light">
          Vadym Kochenko
        </a>
         </p>
      </div>
    </footer>
  );