import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Image from "next/image";

// BEM -> Block Element Modifier (Naming convention)

const Navbar = () => {
	return (
		<div className='gpt3__navbar'>
			<div className='gpt3__navbar-links'>
				<div className='gpt3__navbar-links_logo'>
					<Image src={"/assets/logo.svg"} alt='logo' width={100} height={100} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
