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
            className='min-h-screen flex flex-col justify-center items-center md:w-full md:flex-col lg:flex-col' id="contact">
            <h1 className='font-bold w-full  text-center p-6 text-4xl'><i className="fa-regular fa-paper-plane"></i> Connect!</h1>
            <form className="w-96 md:w-96 md:p-2 p-6 lg:w-4/6 " onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="subject">
                        Subject
                    </label>
                    <input
                        className="shadow textarea rounded-none bg-gray-500 appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
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
                        className="h-40 textarea rounded-none bg-gray-500  lg:h-40 shadow appearance-none border w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                        id="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        className="btn btn-outline text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
