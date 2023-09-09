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
        className='border-b border-b-cyan-500 py-10  md:w-full md:flex' id="contact">
            <h1 className=' font-bold w-full rounded-r-xl text-white text-center p-6 text-2xl'><i className="fa-regular fa-paper-plane"></i> Connect!</h1>
            <form className="max-w-md md:w-screen md:p-2 mx-auto  p-6 lg:max-w-2xl " onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="subject">
                        Subject
                    </label>
                    <input
                        className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        className="h-40 lg:h-40 shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </form>
        </motion.div>

    );
};

export default Contact;
