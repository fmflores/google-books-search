import React from 'react';

export default ()=>{
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <a className="navbar-brand" href="./">Google Books</a>
  <div id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/">Search</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/favs">Saved</a>
      </li>
    </ul>
  </div>
</nav>
    )
}