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
        position: 'relative', // Fix it to the bottom
        bottom: 0, // Stick to the bottom
        left: 0,
        width: '100%', // Full width of the screen
        backgroundColor: '#1abc9c', // Background color
        color: '#fff', // Text color
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        height: '60px', // Footer height
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)', // Shadow for visual appeal
        zIndex: 1000, // Ensure it stays on top
    },
    footerText: {
        margin: 0, // No margin for the text
        fontSize: '1.2rem', // Slightly larger font
    },
};

export default Footer;
