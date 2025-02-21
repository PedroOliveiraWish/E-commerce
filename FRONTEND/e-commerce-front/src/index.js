import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from './App';
import { UserSave } from './context/useContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserSave>
    <App />
  </UserSave>
);