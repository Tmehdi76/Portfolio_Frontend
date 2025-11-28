import { FaGithub, FaInstagram, FaLinkedin, FaRegEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-surface border-t border-border py-12 px-5 md:px-20 lg:px-32 text-text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              <span className="text-primary">{'<'}</span>Mehdi<span className="text-primary">{'/>'}</span>
            </h3>
            <p className="text-text-gray text-sm leading-relaxed">
              Full-Stack Web Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-text-white">Contact</h4>
            <a 
                href="mailto:mehdittaleb@gmail.com" 
                className="flex items-center gap-2 text-text-gray hover:text-primary transition-colors text-sm group"
                aria-label="Email: mehdittaleb@gmail.com"
            >
                <FaRegEnvelope className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span>mehdittaleb@gmail.com</span>
            </a>
          </div>
          
          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-text-white">Follow Me</h4>
            <nav aria-label="Social media">
              <ul className="flex gap-3">
                <li>
                    <a 
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-background border border-border hover:border-primary hover:text-primary transition-all hover:scale-110" 
                        href="https://github.com/Tmehdi76"
                        aria-label="GitHub profile (opens in new tab)"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub size={18} aria-hidden="true" />
                    </a>
                </li>
                <li>
                    <a 
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-background border border-border hover:border-primary hover:text-primary transition-all hover:scale-110" 
                        href="https://www.linkedin.com/in/mehdi-taleb-914501267/"
                        aria-label="LinkedIn profile (opens in new tab)"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin size={18} aria-hidden="true" />
                    </a>
                </li>
                <li>
                    <a 
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-background border border-border hover:border-primary hover:text-primary transition-all hover:scale-110" 
                        href="https://www.instagram.com/filinko.dev/"
                        aria-label="Instagram profile (opens in new tab)"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram size={18} aria-hidden="true" />
                    </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        <hr className="border-border mb-6" />
        
        <p className="text-center text-text-gray text-sm flex items-center justify-center gap-1">
          © {new Date().getFullYear()} Made with <FaHeart className="text-red-500" aria-hidden="true" /> by Mehdi
        </p>
      </div>
    </footer>
  );
};
export default Footer;