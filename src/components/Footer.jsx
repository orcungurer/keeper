import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>© {currentYear} Orcun Gurer</p>
        </footer>
    );
}

export default Footer;