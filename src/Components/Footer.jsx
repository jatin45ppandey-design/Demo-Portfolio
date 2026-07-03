import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <ul style={styles.list}>
        <li>
          <a 
            href="https://github.com/jatin45ppandey-design" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.link}
          >
            GitHub
          </a>
        </li>
        <li>
          <a 
            href="https://www.linkedin.com/in/jatin-pandey-pandey-a1654237a/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.link}
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a 
            href="https://leetcode.com/u/Jatin45_Pandey/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.link}
          >
            LeetCode
          </a>
        </li>
        <li>
          <a 
            href="https://www.instagram.com/jatin45p/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.link}
          >
            Instagram
          </a>
        </li>
      </ul>
    </footer>
  );
}

// Extracting styles keeps the JSX clean and easy to read
const styles = {
  footer: {
    backgroundColor: '#111', // A softer black looks a bit more premium
    padding: '24px 0',
    width: '100%',
  },
  list: {
    display: 'flex',
    justifyContent: 'center', // Centers the links dynamically
    flexWrap: 'wrap', // Allows links to drop to a new line on tiny screens
    gap: '40px', // A more mobile-friendly gap
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  link: {
    color: 'wheat',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
  }
};

export default Footer;