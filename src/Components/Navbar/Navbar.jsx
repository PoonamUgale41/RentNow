import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import homeIcon from "../../assets/icons/home.png";
import userIcon from "../../assets/icons/user.png";

import "./Navbar.css";


function Navbar(){

return(

<nav className="navbar">


<div className="nav-container">


<Link 
to="/"
className="logo"
>


<img 
src={logo}
alt="EasyRent Logo"
/>


<span>
EasyRent
</span>


</Link>




<ul className="nav-links">


<li>

<Link to="/">
Home
</Link>

</li>


<li>

<Link to="/properties">
Properties
</Link>

</li>


<li>

<Link to="/about">
About
</Link>

</li>


<li>

<Link to="/contact">
Contact
</Link>

</li>


</ul>





<div className="nav-buttons">


<Link 
to="/login"
className="login-btn"
>


<img 
src={userIcon}
alt="user"
/>


Login


</Link>




<Link

to="/register"

className="register-btn"

>

Register

</Link>



</div>



</div>


</nav>

)

}


export default Navbar;