import { useState } from 'react';
import { motion } from 'framer-motion';
const Contact = () => {
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const handleSubmit = (e) => {

        e.preventDefault();
        const email = 'erive92d@gmail.com';
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    return (
        <motion.div
             id="contact" 
             className='min-h-screen bg-custom-black flex flex-col justify-center items-center md:w-full md:flex-col'
             >
              <h1 className='font-bold w-full text-center p-12 text-4xl'>Contact Me</h1>
                <div >
                    <form className="w-96 md:w-96 md:p-2 p-6  " onSubmit={handleSubmit}>
                        <div className="mb-4 ">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="subject">
                                Subject
                            </label>
                            <input
                                className=" textarea textarea-ghost bg-custom-off-white border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                id="subject"
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>
                        <div className="mb-6 lg:h-50 h-50">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="body">
                                Body
                            </label>
                            <textarea
                                className="h-40 textarea textarea-ghost bg-custom-off-white  text-black lg:h-40 shadow border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                id="body"
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="rounded bg-bg-custom-cyan border text-white font-bold py-2 px-4 "
                                type="submit"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
        </motion.div>

    );
};

export default Contact;
