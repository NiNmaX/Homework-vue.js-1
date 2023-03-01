import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')
document.querySelector('.header__burger').addEventListener('click', function (e) {
  e.preventDefault();
  this.classList.toggle('header__burger--active');
  document.querySelector('.header__menu').classList.toggle('header__menu--active');
  document.body.classList.toggle('lock');
});


