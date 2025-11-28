import { FaGithub, FaInstagram, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col border-t p-14 pb-5 gap-20 text-text-white">
      <div className="flex flex-wrap gap-20 justify-around">
        <div className="flex flex-col gap-4  ">
            <div className="flex text-text-gray items-center self-center lg:self-start gap-1">
                <FaRegEnvelope/>
                <p>
                    mehdittaleb@gmail.com
                </p>
            </div>
            <p className="self-center hidden sm:block lg:self-start">
                Web designer and Full-Stack Web developer.
            </p>
        </div>
        <div className="flex flex-col gap-3">
            <h2 className="font-medium">Media</h2>
            <div className="flex gap-1">
                <a title="github" className="hover:text-primary" href="https://github.com/Tmehdi76">
                <FaGithub />
                </a>
                <a title="linkedin" className="hover:text-primary" href="https://www.linkedin.com/in/mehdi-taleb-914501267/">
                <FaLinkedin />
                </a>
                <a title="instagram" className="hover:text-primary" href="https://www.instagram.com/filinko.dev/">
                <FaInstagram />
                </a>
            </div>
        </div>
      </div>
      <p className="self-center	">© Copyright {new Date().getFullYear()}. Made by Mehdi</p>
    </footer>
  );
};
export default Footer;