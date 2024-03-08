import React from 'react';

export default function Navbar({ currentPage }) {
    return (
        <div className="fixed inset-x-0 bottom-0 bg-gray-800 text-white text-center py-2 px-4 flex justify-around items-center shadow-lg">
            <a href="home" className={`flex flex-col items-center ${currentPage === 'home' ? 'font-bold text-cool-gray-500 text-lg bg-blue-500 rounded-lg p-2 shadow-md' : ''}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                <span className="text-xs">Home</span>
            </a>
            <a href="add-receipt" className={`flex flex-col items-center ${currentPage === 'add-receipt' ? 'font-bold text-cool-gray-500 text-lg bg-blue-500 rounded-lg p-2 shadow-md' : ''}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                <span className="text-xs">Add Receipt</span>
            </a>
            <a href="search-receipt" className={`flex flex-col items-center ${currentPage === 'search-receipt' ? 'font-bold text-cool-gray-500 text-lg bg-blue-500 rounded-lg p-2 shadow-md' : ''}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20h4m0 0l-2-2m2 2l2-2m-2 2v-4M3 10a7 7 0 1114 0 7 7 0 01-14 0z" /></svg>
                <span className="text-xs">Search Receipt</span>
            </a>
            <a href="#" className={`flex flex-col items-center ${currentPage === 'profile' ? 'font-bold text-cool-gray-500 text-lg bg-blue-500 rounded-lg p-2 shadow-md' : ''}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v2m4.219 1.179l1.414-1.414 2.122 2.122-1.414 1.414M21 12h2m-1.179 4.219l1.414 1.414-2.122 2.122-1.414-1.414M12 21v2m-4.219-1.179l-1.414 1.414-2.122-2.122 1.414-1.414M3 12H1m1.179-4.219L1.765 6.367l2.122-2.122 1.414 1.414M12 3a9 9 0 100 18 9 9 0 000-18zm0 4a5 5 0 110 10 5 5 0 010-10z" /></svg>
                <span className="text-xs">Profile</span>
            </a>
        </div>
    );
}
