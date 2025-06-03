//// Optional: Add JS logic here (e.g., jQuery setup or UI scripts)
console.log('main.js initialized');

// Ensure this is at the top of your file
import './styles/styles.css';

// Import all JS and SCSS inside /markup
function importAll(r) {
    r.keys().forEach(r);
}

importAll(require.context('./markup', true, /\.(js|css)$/));