import React from 'react';

function Footer() {
    return (
        <footer className="bg-black py-16 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Quicklinks */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Quicklinks</h2>
                    <ul className="space-y-2 text-xl text-white">
                        <li>About</li>
                        <li>Themes</li>
                        <li>Timeline</li>
                        <li>Team</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                        <li>MLH Code of Conduct</li>
                        <li>Join Us</li>
                    </ul>
                </div>
                {/* Right Column: Social & Connect */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Follow Us</h2>
                    <ul className="space-y-2 text-xl text-white">
                        <li>Github</li>
                        <li>Discord</li>
                    </ul>
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Connect. Learn. Grow</h3>
                        <ul className="space-y-2 text-xl text-white">
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
