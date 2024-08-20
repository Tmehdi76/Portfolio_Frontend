import logo2 from "../../assets/rec.png";

const AboutMe = () => {
  return (
    <div id="about-me" className="lg:px-52 relative px-5 text-text-white my-20">
        <div className="flex items-center gap-3">
            <h1 className="text-3xl">
                <span className="text-primary">#</span>about-me
            </h1>
            <hr className="h-px w-80 mt-1 bg-primary border-0" />
        </div>
        <p className="mt-10 max-w-lg text-base font-light leading-6 mb-6 ">
        Hello, i’m Taleb Mehdi! <br/><br/>

        I’m a self-taught front-end developer based in Jijel, Algeria. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 
        <br /><br />
        Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
        </p>
        <a href="" className="border p-1 border-primary">Read more -{'>'}</a>
        <img src={logo2} alt="logo2" className="absolute top-32 hidden right-64 lg:block" />
    </div>
  );
};
export default AboutMe;