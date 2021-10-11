import React from 'react';

function Header(props) {
    return (
        <div>
            <header>
                <nav className="container flex items-start py-4 mt-4 sm:mt-12">
                    <div className="py-1"><img src="../assets/air-canada-logo.png" width="100" alt="" /></div>
                    <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Cotact</li>
                    <li className="cursor-pointer">Store</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;