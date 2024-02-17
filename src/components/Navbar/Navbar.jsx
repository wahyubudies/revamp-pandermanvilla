import React, { useState } from 'react';
import GeneralUtility from '../../utility/Utility';
import RouteName from '../../route/RouteName';

const Navbar = () => {
    const BASE_URL_IMG = import.meta.env.BASE_URL + "img";
    const [menuOpen, setMenuOpen] = useState(false);
    const [villaOpen, setVillaOpen] = useState(false);
    const [selectedVilla, setSelectedVilla] = useState(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleVillaClick = (name) => {
        window.location.href = RouteName.villa[name];
        setSelectedVilla(villa);
        setVillaOpen(false);
    };

    return (
        <nav className="bg-white py-6 px-4">
            <div className="container mx-auto flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center">
                    <a href={RouteName.home}>
                        <img src={BASE_URL_IMG + "/logo.png"} alt="Logo Panderman Villa Batu" className="h-8 w-full object-contain mr-2" />
                    </a>
                </div>

                {/* Menu */}
                <div className="hidden md:flex items-center space-x-5">
                    <a href={RouteName.home} className="text-gray-paragraf hover:text-black font-medium">Home</a>
                    <a href={RouteName.about} className="text-gray-paragraf hover:text-black font-medium">About</a>

                    {/* Dropdown Villa */}
                    <div className="relative">
                        <div
                            onClick={() => setVillaOpen(!villaOpen)}
                            className="cursor-pointer text-gray-paragraf hover:text-black font-medium flex items-center">
                            {GeneralUtility.toCapitalize(selectedVilla) || 'Villa'}
                            <svg
                                className={`h-4 w-4 ml-1 fill-current text-gray-500 transition-transform ${villaOpen ? 'rotate-180' : 'rotate-0'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                        </div>

                        {villaOpen && (
                            <div className="absolute mt-2 bg-white border border-gray-300 rounded shadow-md z-20">
                                <div
                                    onClick={() => handleVillaClick('puncak')}
                                    className="cursor-pointer hover:bg-gray-100 px-4 py-2">
                                    Puncak
                                </div>
                                <div
                                    onClick={() => handleVillaClick('induk')}
                                    className="cursor-pointer hover:bg-gray-100 px-4 py-2">
                                    Induk
                                </div>
                                <div
                                    onClick={() => handleVillaClick('asalia')}
                                    className="cursor-pointer hover:bg-gray-100 px-4 py-2">
                                    Asalia
                                </div>
                                <div
                                    onClick={() => handleVillaClick('mawar')}
                                    className="cursor-pointer hover:bg-gray-100 px-4 py-2">
                                    Mawar
                                </div>
                                <div
                                    onClick={() => handleVillaClick('elang')}
                                    className="cursor-pointer hover:bg-gray-100 px-4 py-2">
                                    Elang
                                </div>
                            </div>
                        )}
                    </div>

                    <a href={RouteName.facilities} className="text-gray-paragraf hover:text-black font-medium">Facilities</a>
                    <a href={RouteName.contact} className="text-green-primary hover:text-white font-medium py-2 px-4 rounded-full border-2 border-green-primary hover:bg-green-primary">Contact</a>
                </div>

                {/* Responsive Menu Button (Hamburger icon) */}
                <div className="md:hidden flex items-center">
                    {menuOpen ? (
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    ) : (
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    )}
                </div>

            </div>

            {/* Responsive Menu (Hidden by default) */}
            <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-white mt-4`}>
                <a href={RouteName.home} className="block text-gray-paragraf hover:text-black hover:bg-slate-200 focus:bg-slate-200 rounded p-2">Home</a>
                <a href={RouteName.about} className="block text-gray-paragraf hover:text-black hover:bg-slate-200 focus:bg-slate-200 rounded p-2">About</a>

                {/* Dropdown Villa (Responsive) */}
                <div className="relative">
                    <div
                        onClick={() => setVillaOpen(!villaOpen)}
                        className="cursor-pointer text-gray-paragraf hover:text-black hover:bg-slate-200 focus:bg-slate-200 rounded p-2 flex items-center">
                        {GeneralUtility.toCapitalize(selectedVilla) || 'Villa'}
                        <svg
                            className={`h-4 w-4 ml-1 fill-current text-gray-500 transition-transform ${villaOpen ? 'rotate-180' : 'rotate-0'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                    </div>

                    {villaOpen && (
                        <div className="absolute mt-2 bg-white border border-gray-300 rounded shadow-md z-20">
                            <div
                                onClick={() => handleVillaClick('puncak')}
                                className="cursor-pointer hover:bg-gray-100 px-4 py-2">
                                Puncak
                            </div>
                            <div
                                onClick={() => handleVillaClick('induk')}
                                className="cursor-pointer hover:bg-gray-100 px-4 py-2">
                                Induk
                            </div>
                            <div
                                onClick={() => handleVillaClick('asalia')}
                                className="cursor-pointer hover:bg-gray-100 px-4 py-2">
                                Asalia
                            </div>
                            <div
                                onClick={() => handleVillaClick('mawar')}
                                className="cursor-pointer hover:bg-gray-100 px-4 py-2">
                                Mawar
                            </div>
                            <div
                                onClick={() => handleVillaClick('elang')}
                                className="cursor-pointer hover:bg-gray-100 px-4 py-2">
                                Elang
                            </div>
                        </div>
                    )}
                </div>

                <a href={RouteName.facilities} className="block text-gray-paragraf hover:text-black hover:bg-slate-200 focus:bg-slate-200 rounded p-2">Facilities</a>
                <a href={RouteName.contact} className="block mt-4 text-center text-green-primary hover:text-white py-2 px-4 rounded-full w-full hover:text-whhite hover:bg-green-primary focus:bg-green-primary focus:text-white p-2 border-2 border-green-primary">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
