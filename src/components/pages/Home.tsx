import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const Home = () => {
    useEffect(() => {
        const typewriter = new Typewriter('#typewriter-text', {
            strings: ["Taleb Mehdi is a <span class='text-primary'>web designer</span><br />and <span class='text-primary'>front-end developer</span>"],
            autoStart: true,
            delay: 50, 
            deleteSpeed: 20000000000000,
          });
          
        return () => {
          typewriter.stop();
        };
      }, []);

    return (
        <div className="h-120vh text-text-white flex justify-center items-center flex-col mx-5 md:mx-0">
            <div className='mb-40' >
                <h1 className="text-3xl font-semibold">
                    <span id="typewriter-text" />
                </h1>
                <p className="text-base my-10">
                    He crafts responsive websites where technologies <br /> meet creativity
                </p>
                <a
                href="#contacts"
                className="border-primary border-solid border px-4 py-1.5 hover:bg-primary/90">
                    Contact me!!
                </a>
            </div>
            <div className='flex flex-col mb-0 text-xl'>
                <FormatQuoteIcon className="bg-background absolute ml-2 mt-2" />
                <p className="text-center border p-4 mt-5">
                    "With great power comes great electricity bill"
                </p>
                <p className=" border border-t-0 self-end w-30 p-4">- Dr. Who</p>
            </div>
        </div>
  );
};
export default Home;