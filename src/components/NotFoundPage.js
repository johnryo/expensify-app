import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <p>404 - Not Found!</p>
    <Link to="/">Take me home</Link>
  </div>
);

export default NotFoundPage;
