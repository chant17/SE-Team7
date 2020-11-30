import React from "react";
import Button from 'react-bootstrap/Button';

function Sales() {
  return (
    <div>
      <div class="Title">Sales Admin Page</div>
      <div class="container">
          
        <a href="Linked Page" class="cool-link">
          Sales report
        </a>
        <a href="Linked Page" class="cool-link">
          Sales Lead
        </a>
        <a href="Linked Page" class="cool-link">
          Sales sales Demo
        </a>
        <a class="cool-link" onClick={event => window.location.href="/login"}>Logout</a>{' '}
      </div>
    </div>
  );
}
export default Sales;
