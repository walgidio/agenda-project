import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';

const login = new Login('.form-login');
const registro = new Login('form-register');

login.init();
registro.init();

// import './assets/css/style.css';
