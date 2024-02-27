function Footer() {
    return (
        <footer className="bg-gray-700 text-white text-center p-4">
            <div className="container mx-auto">
                <p>&copy; {(new Date()).getFullYear()} My Bookstore. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
