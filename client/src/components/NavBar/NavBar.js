import React from "react";
import "./style.css";

// function NavBar(props) {
//   return (
//     <div className="sticky">
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           About
//         </a>
//         <a className="navbar-brand" href="#">
//           Projects
//         </a>
//         <a className="navbar-brand" href="#">
//           Contact
//         </a>
     
//       </nav>
//     </div>
//   );
// }
function NavBar(props) {
  return (
    <div className="sticky">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>

</div>
);
}

export default NavBar;
