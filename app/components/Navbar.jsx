import React from 'react';
import Link from 'next/link'
const Navbar = () => {
    return (
        <div>
            <nav>
            <h1>        Home of CRUD
        </h1>
        <Link href="/">Home Menu</Link> 
        <Link href="/Create">Create Menu</Link> 
            </nav>
        </div>
    );
}

export default Navbar;
