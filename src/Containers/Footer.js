import React from 'react';

function Footer() {
    return (
        <div style={styles.footerSection}>
            <p style={styles.footerText}>© 2024 WoT Survey Team.</p>
        </div>
    );
}

const styles = {
    footerSection: {
        position: 'relative',
        bottom: 0, 
        left: 0,
        width: '100%', 
        backgroundColor: '#1abc9c',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
    },
    footerText: {
        margin: 0,
        fontSize: '1.2rem',
    },
};

export default Footer;

