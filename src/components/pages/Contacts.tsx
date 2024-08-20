import { FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

interface FormInput{
    name: string;
    email: string;
    title: string;
    message: string;
}

const Contacts = () => {
    const [formInput, setFormInput] = useState<FormInput>({
        name: '',
        email: '',
        title: '',
        message: ''
    });



    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/send-email', formInput);
            alert('Message sent successfully');
            setFormInput({
                name: '',
                email: '',
                title: '',
                message: ''
            });
        } catch (error) {
            alert('An error occured');
            console.log(error);
        }

    }
  return (
    <div id="contacts" className="lg:px-52 relative px-5 text-text-white my-20">
        <div className="flex items-center gap-3">
            <h1  className="text-3xl">
                <span className="text-primary">#</span>contacts
            </h1>
            <hr className="h-px w-60 mt-1 bg-primary border-0" />
        </div>
        <div className="flex justify-between">    
            <p className="mt-10 max-w-lg text-base font-light leading-6 mb-6" >
            I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
            </p>
            <div className="border text-sm leading-loose p-2 hidden lg:block">
                <p className="font-medium">Message me here</p>
                <div className="flex items-center">
                    <FaInstagram/>
                    <p className="ml-1">mehdi__taleb</p>
                </div>
                <div className="flex items-center">
                    <FaRegEnvelope/>
                    <p className="ml-1">mehdittaleb@gmail.com</p>
                </div>    
            </div>
        </div>
        <form className="flex flex-col gap-4 px-24 mt-20" onSubmit={handleSubmit}>
            <div className="w-full flex gap-3">
                <input 
                    value={formInput.name}
                    onChange={handleChange} 
                    className="p-2 border w-1/2 border-gray-500 bg-background pb-4 bg-background focus:border-primary focus:outline-none" 
                    type="text" name="name" id="name" placeholder="Name" />
                <input 
                    value={formInput.email}
                    onChange={handleChange} 
                    className="p-2 pb-4 border w-1/2 border-gray-500 bg-background bg-background focus:border-primary focus:outline-none" 
                    type="email" name="email" id="email" placeholder="Email" />
            </div>
            <input value={formInput.title}
                onChange={handleChange}
                className="p-2 pb-4 border border-gray-500 bg-background focus:border-primary focus:outline-none " 
                type="text" name="title" id="title" placeholder="Title" />
            <textarea 
                value={formInput.message} 
                onChange={handleChange} 
                className="p-2 min-h-52 border border-gray-500 bg-background bg-background focus:border-primary focus:outline-none" 
                name="message" id="message" placeholder="Message"></textarea>
            <button className="border-primary  border py-1 max-w-20 hover:border-gray-500" type="submit">Send</button>
        </form>
    </div>
  );
};
export default Contacts;