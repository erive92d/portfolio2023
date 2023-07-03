
const Footer = () => {
    return (
        <footer className="bg-black text-white py-4">
            <div className="container mx-auto text-center text-gray-600">
                <p className="text-white">&copy; {new Date().getFullYear()} Deorren's Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;