import React from "react";
import { Nav, NavLink, NavMenu }
	from "./Components";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		
		<NavLink to="/Login" >
			Log in
		</NavLink>
		<NavLink to="/Signup">
			Sign Up
		</NavLink>
		<NavLink to="/RegisterBusiness">
			Register business
		</NavLink>
		<NavLink to="/EnterDetails">
			EnterDetails
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
