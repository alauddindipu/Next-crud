import React from 'react';
import Link from 'next/link'
const Navbar = () => {
    return (
        <div>
            <nav>
                <u>       <b><p><Link href="/">CRUD Operation</Link></p></b>
                </u>
                {/* <Link href="/Read">Home Menu</Link> */}
                <Link href="/CreateOption/Create">Create Menu</Link>
            </nav>
        </div>
    );
}

export default Navbar;
