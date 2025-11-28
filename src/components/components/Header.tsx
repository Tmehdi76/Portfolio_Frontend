import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import {
    Dialog,
    DialogPanel,
} from '@headlessui/react'

import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext';



const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
  return (
    <>
    {/* Left side social bar */}
    <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-50" aria-hidden="true">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-text-gray" />
        <nav className="flex flex-col gap-4" aria-label="Social media links">
            <a 
                className="text-text-gray hover:text-primary hover:scale-110 transition-all" 
                href="https://github.com/Tmehdi76"
                aria-label="GitHub profile (opens in new tab)"
                target="_blank"
                rel="noopener noreferrer"
            >
              <FaGithub size={20} aria-hidden="true" />
            </a>
            <a 
                className="text-text-gray hover:text-primary hover:scale-110 transition-all" 
                href="https://www.linkedin.com/in/mehdi-taleb-914501267/"
                aria-label="LinkedIn profile (opens in new tab)"
                target="_blank"
                rel="noopener noreferrer"
            >
              <FaLinkedin size={20} aria-hidden="true" />
            </a>
            <a 
                className="text-text-gray hover:text-primary hover:scale-110 transition-all" 
                href="https://www.instagram.com/filinko.dev/"
                aria-label="Instagram profile (opens in new tab)"
                target="_blank"
                rel="noopener noreferrer"
            >
              <FaInstagram size={20} aria-hidden="true" />
            </a>
        </nav>
        <div className="w-px h-20 bg-gradient-to-t from-transparent to-text-gray" />
    </div>
    
    <header role="banner" className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-primary">
        <div className="text-text-white px-5 md:px-20 lg:px-32 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 group">
            <span className="text-lg font-bold">
                <span className="text-primary">{'<'}</span>Mehdi<span className="text-primary">{'/>'}</span>
            </span>
        </a>
      <nav className="flex items-center gap-4">
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <ul className="hidden md:flex space-x-1 text-sm items-center" role="menubar">
          <li role="none">
            <a href="#projects" role="menuitem" className="px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors">
              <span className="text-primary" aria-hidden="true">#</span>projects
            </a>
          </li>
          <li role="none">
            <a href="#skills" role="menuitem" className="px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors">
              <span className="text-primary" aria-hidden="true">#</span>skills
            </a>
          </li>
          <li role="none">
            <a href="#about-me" role="menuitem" className="px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors">
              <span className="text-primary" aria-hidden="true">#</span>about
            </a>
          </li>
          <li role="none">
            <a href="#contacts" role="menuitem" className="px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors">
              <span className="text-primary" aria-hidden="true">#</span>contacts
            </a>
          </li>
          <li role="none" className="ml-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-surface border border-border hover:border-primary hover:text-primary transition-all"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
              ) : (
                <MoonIcon className="h-5 w-5 text-text-gray" aria-hidden="true" />
              )}
            </button>
          </li>
        </ul>
      </nav>
      </div>
    </header>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background text-text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <SunIcon className="h-6 w-6 text-yellow-400" aria-hidden="true" />
              ) : (
                <MoonIcon className="h-6 w-6 text-gray-600" aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y">
              <div className="space-y-2 py-6">
                
                <a
                  href="#projects"
                  className="-mx-3 block rounded-md px-3 py-2 text-base font-semibold leading-7  hover:text-text-gray"
                >
                  #projects
                </a>
                <a
                  href="#about-me"
                  className="-mx-3 block rounded-md px-3 py-2 text-base font-semibold leading-7  hover:text-text-gray"
                >
                  #about Me
                </a>
                <a
                  href="#skills"
                  className="-mx-3 block rounded-md px-3 py-2 text-base font-semibold leading-7 hover:text-text-gray"
                >
                    #skills
                </a>
                <a
                  href="#contacts"
                  className="-mx-3 block rounded-md px-3 py-2.5 text-base font-semibold leading-7  hover:text-text-gray"
                >
                    #contacts
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default Header;
