

   import './bootstrap';
import { createApp } from 'vue'; 
import UserSearch from './components/UserSearch.vue'; 
const app = createApp({});
app.component('user-search', UserSearch); 
app.mount('#app'); 
