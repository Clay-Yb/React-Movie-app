import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../ContextProvider';
import DropDown from '../DropDown/DropDown';
import './NavBar.scss';
const NavBar = () => {
	const { searchTerm, setSearchTerm, searchVideos = [], loading } = useGlobalContext();
	return (
		<header className="header">
			<nav className="nav container">
				<Link to="/">
					<h3>Vilm</h3>
				</Link>
				<form>
					<input
						type="text"
						autoComplete="off"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<BiSearch />
					{!loading && searchTerm.length ? (
						<ul>
							{searchVideos.map((item) => (
								<DropDown key={item.id} {...item} />
							))}
						</ul>
					) : null}
				</form>
			</nav>
		</header>
	);
};

export default NavBar;
