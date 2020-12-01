import React from "react";

function Finance() {
  return (
    <div>
      <div class="Title">Finance Admin Page</div>
      <div class="container">
        <div class="card">
          <div class="box">
            <div class="content">
              <h2>Finance Reports</h2>
              <h3>click link below to be redirected</h3>
              <a href="someLinkHere">Click Here</a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="card">
          <div class="box">
            <div class="content">
              <h2>Accounts Payable</h2>
              <h3>See which accounts need to be paid / invoices</h3>
              <a href="someLinkHere">Click Here</a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="card">
          <div class="box">
            <div class="content">
              <h2>Accounts Recievable</h2>
              <h3>Click below for a list of transfers</h3>
              <a href="someLinkHere">Click Here</a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="card">
          <div class="box">
            <div class="content">
              <h2>Tax</h2>
              <h3>Click below to see tax audit and info</h3>
              <a href="someLinkHere">Click Here</a>
            </div>
          </div>
        </div>
      </div>
      <div class="container d-flex justify-content-center">
        <button
          class="cool-link btn-danger "
          onClick={(event) => (window.location.href = "/login")}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
export default Finance;
