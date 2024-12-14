import React from 'react';
import Link from 'next/link'
const Navbar = () => {
    return (
        <div>
            <nav>
                <u>       <b><p>CRUD Operation</p></b>
                </u>
                <Link href="/Read">Home Menu</Link>
                <Link href="/CreateOption/Create">Create Menu</Link>
            </nav>
        </div>
    );
}

export default Navbar;
