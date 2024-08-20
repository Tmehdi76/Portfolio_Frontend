import logo from '../../assets/logo.png';

import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/outline'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import {
    Dialog,
    DialogPanel,
} from '@headlessui/react'

import { useState } from 'react'



const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
    <div className="left-11 w-px h-48 hidden md:block absolute bg-text-gray">
    </div>
    <div className="hidden md:flex absolute flex-col gap-3 text-text-gray left-9 text-xl top-48 mt-3">
        <a title="github" className="hover:text-primary" href="github.com">
          <FaGithub />
        </a>
        <a title="linkedin" className="hover:text-primary" href="linkedin">
          <FaLinkedin />
        </a>
        <a title="instagram" className="hover:text-primary" href="instagram">
          <FaInstagram />
        </a>
    </div>
    <header className="text-text-white md:mx-0 mx-5 py-4 flex sticky justify-between md:justify-around items-center">
        <div className="flex items-center space-x-1">
            <img src={logo} alt="logo" className="mb-0.5" />
            <h1 className="text-base font-bold">Mehdi</h1>
        </div>
      <nav>
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

        <ul className="hidden md:flex space-x-8 text-base">
          <li><a href="#projects" className="hover:text-text-gray"><span className="text-primary">#</span>projects</a></li>
          <li><a href="#skills" className="hover:text-text-gray"><span className="text-primary">#</span>skills</a></li>
          <li><a href="#about-me" className="hover:text-text-gray"><span className="text-primary">#</span>about Me</a></li>
          <li><a href="#contacts" className="hover:text-text-gray"><span className="text-primary">#</span>contacts</a></li>
        </ul>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background text-text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
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
    </header>
    </>
  );
};

export default Header;
