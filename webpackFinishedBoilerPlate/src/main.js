//// Import your SCSS (modular styles using @use)
//import './styles/styles.scss';

//// Optional: Add JS logic here (e.g., jQuery setup or UI scripts)
//console.log('App initialized');

// Ensure this is at the top of your file
import './styles/styles.scss';

// Import all JS and SCSS inside /markup
function importAll(r) {
    r.keys().forEach(r);
}

importAll(require.context('./markup', true, /\.(js|scss)$/));