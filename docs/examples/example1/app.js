import Feat from '../library.es.js';

const app = document.querySelector('#app');

const val = Feat('World');

app.innerHTML = `
  <h1>${val}!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
