import React from 'react'
import News from '../pages/News'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <nav className="font-[Montserrat] flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
                <div className="mb-2 sm:mb-0">
                    <Link to="/" className="text-2xl font-bold no-underline text-grey-darkest hover:text-blue-dark">Green GPS</Link>
                </div>
                <div>
                    <Link to="/" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-4 hover:underline hover:font-medium">Home</Link>
                    <Link to="/locator" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-4 hover:underline hover:font-medium">Locate</Link>
                    <Link to="/news" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-4 hover:underline hover:font-medium">News</Link>
                    <Link to="/recycle" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-4 hover:underline hover:font-medium">Recycle</Link>
                </div>
            </nav>
        </div>
    )
}