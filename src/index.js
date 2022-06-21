import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'
import App from './Router/App'

import './Config/i18n'

const root = ReactDOM.createRoot(document.getElementById('root'));

  

root.render(
  <React.StrictMode>
    <Router>
      <Suspense Fallback="Loading...">
        <App />
      </Suspense>
    </Router>
  </React.StrictMode>
);
