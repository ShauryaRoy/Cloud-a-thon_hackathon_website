import React from 'react';

function Navbar() {
    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-900 bg-opacity-80 backdrop-blur-lg p-3 sm:p-4 rounded-full shadow-lg z-50">
            <ul className="flex justify-center items-center space-x-4 sm:space-x-8 text-white text-sm sm:text-base">
                <li className="hover:text-cyan-400 hover:scale-105 transition-all">
                    <a href="#home">Home</a>
                </li>
                <li className="hover:text-cyan-400 hover:scale-105 transition-all">
                    <a href="#tracks">Tracks</a>
                </li>
                <li className="hover:text-cyan-400 hover:scale-105 transition-all">
                    <a href="#prizes">Prizes</a>
                </li>
                <li className="hover:text-cyan-400 hover:scale-105 transition-all">
                    <a href="#timeline">Timeline</a>
                </li>
                <li className="hover:text-cyan-400 hover:scale-105 transition-all">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
