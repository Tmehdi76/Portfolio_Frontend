import { FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { useState } from "react";
import emailjs from '@emailjs/browser';

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
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('idle');
        try {
            await emailjs.send(
                'service_cd962hw',
                'template_6q4iffc',
                {
                    from_name: formInput.name,
                    from_email: formInput.email,
                    subject: formInput.title,
                    message: `Name: ${formInput.name}\nEmail: ${formInput.email}\nSubject: ${formInput.title}\n\nMessage:\n${formInput.message}`,
                },
                'mmT5OhOfCnfkblbpD'
            );
            setStatus('success');
            setFormInput({
                name: '',
                email: '',
                title: '',
                message: ''
            });
        } catch (error) {
            setStatus('error');
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section 
            id="contacts" 
            className="py-20 px-5 md:px-20 lg:px-32 text-text-white relative overflow-hidden"
            aria-labelledby="contacts-title"
        >
            {/* Decorative background */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
            
            <div className="flex items-center gap-4 mb-12">
                <h2 id="contacts-title" className="text-3xl md:text-4xl font-bold whitespace-nowrap">
                    <span className="text-primary" aria-hidden="true">#</span>contacts
                </h2>
                <hr className="h-px flex-grow bg-gradient-to-r from-primary to-transparent border-0" aria-hidden="true" />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
                <div className="animate-slide-up">
                    <p className="text-lg text-text-gray leading-relaxed mb-8">
                        I'm interested in freelance opportunities. However, if you have other requests or questions, don't hesitate to contact me!
                    </p>
                    
                    <aside className="bg-surface border border-border rounded-xl p-6 space-y-4" aria-label="Contact information">
                        <h3 className="font-semibold text-lg mb-4">Message me here</h3>
                        <a 
                            href="https://www.instagram.com/filinko.dev/"
                            className="flex items-center gap-3 text-text-gray hover:text-primary transition-colors group"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <FaInstagram size={18} aria-hidden="true" />
                            </div>
                            <span>filinko.dev</span>
                        </a>
                        <a 
                            href="mailto:mehdittaleb@gmail.com"
                            className="flex items-center gap-3 text-text-gray hover:text-primary transition-colors group"
                        >
                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <FaRegEnvelope size={18} aria-hidden="true" />
                            </div>
                            <span>mehdittaleb@gmail.com</span>
                        </a>
                    </aside>
                </div>

                <div className="animate-fade-in">
                    {status === 'success' && (
                        <div 
                            role="alert" 
                            aria-live="polite"
                            className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg mb-6 flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Message sent successfully!
                        </div>
                    )}
                    
                    {status === 'error' && (
                        <div 
                            role="alert" 
                            aria-live="assertive"
                            className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-6 flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Failed to send message. Please try again.
                        </div>
                    )}

                    <form 
                        className="space-y-4" 
                        onSubmit={handleSubmit}
                        aria-label="Contact form"
                    >
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-text-gray mb-2">Name</label>
                                <input 
                                    value={formInput.name}
                                    onChange={handleChange} 
                                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors placeholder:text-text-gray/50" 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-text-gray mb-2">Email</label>
                                <input 
                                    value={formInput.email}
                                    onChange={handleChange} 
                                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors placeholder:text-text-gray/50" 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-text-gray mb-2">Subject</label>
                            <input 
                                value={formInput.title}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors placeholder:text-text-gray/50" 
                                type="text" 
                                name="title" 
                                id="title" 
                                placeholder="What's this about?"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-text-gray mb-2">Message</label>
                            <textarea 
                                value={formInput.message} 
                                onChange={handleChange} 
                                className="w-full px-4 py-3 min-h-40 bg-surface border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors placeholder:text-text-gray/50 resize-none" 
                                name="message" 
                                id="message" 
                                placeholder="Your message here..."
                                required
                            ></textarea>
                        </div>
                        <button 
                            className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" 
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
export default Contacts;