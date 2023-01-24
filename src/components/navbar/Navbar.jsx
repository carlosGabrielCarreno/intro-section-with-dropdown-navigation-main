import { useEffect, useState } from 'react';
import { BurguerButton } from '../BurguerButton';
import logo from '../../images/logo.svg';
import todoList from '../../images/icon-todo.svg';
import calendar from '../../images/icon-calendar.svg';
import reminders from '../../images/icon-reminders.svg';
import planning from '../../images/icon-planning.svg';
import './_navbar.scss';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<header className="container">
			<div className="wrapper">
				<img src={logo} className="logotipo" alt="logo mark" />
				{/*  */}
				{windowSize.width > 960 ? (
					<>
						<nav className={`links-desktop`}>
							<ul>
								<div className="calendar">Calendar</div>
								<div className="reminders">Reminders</div>
								<div className="planning">Planning</div>
								<div className="company">Company</div>
								<div className="carrers">Carrers</div>
								<div className="about">About</div>
								<div className="container-buttons">
									<button className="login">Login</button>
									<button className="register">Register</button>
								</div>
							</ul>
						</nav>
					</>
				) : (
					<></>
				)}
				{/*  */}
				<div
					className="mobileIcon"
					onClick={() => setShowMobileMenu(!showMobileMenu)}
				>
					{showMobileMenu ? <FaTimes /> : <FaBars />}
				</div>
			</div>
			{showMobileMenu ? (
				<>
					<nav className={`links ${showMobileMenu ? 'open' : ''}`}>
						<ul>
							<div className="calendar">Calendar</div>
							<div className="reminders">Reminders</div>
							<div className="planning">Planning</div>
							<div className="company">Company</div>
							<div className="carrers">Carrers</div>
							<div className="about">About</div>
							<div className="container-buttons">
								<button className="login">Login</button>
								<button className="register">Register</button>
							</div>
						</ul>
					</nav>
				</>
			) : (
				<></>
			)}
		</header>
	);
};

// export const Navbar = () => {
//   const [menuStatus, setMenuStatus] = useState(false);

//   const handleActiveBtn = () => {
//     setMenuStatus(!menuStatus);
//   };

//   return (
//     <header className="container">
//       <img src={logo} alt="logo mark" />

//       <nav className={`links ${menuStatus ? 'active' : ''}`}>
//         <ul>
//           <select className="select select-feacture">
//             <option value="Feactures">
//               <span>
//                 <img src={todoList} alt="" /> Feactures
//               </span>
//             </option>
//             <option value="Calendar">
//               <img src={calendar} /> <span>Calendar</span>
//             </option>
//             <option value="Reminders">
//               <img src={reminders} /> <span>Reminders</span>
//             </option>
//             <option value="Planning">
//               <img src={planning} /> <span>Planning</span>
//             </option>
//           </select>
//           <select className="select select-company">
//             <option value="Company">Company</option>
//           </select>
//           <a className="carrers">Carrers</a>
//           <a className="about">About</a>
//         </ul>
//         <div className="container-buttons">
//           {/* <button className="mode">Mode</button> */}
//           <button className="login">Login</button>
//           <button className="register">Register</button>
//         </div>
//       </nav>
//       <div className="burguer">
//         <BurguerButton clicked={menuStatus} handleActiveBtn={handleActiveBtn} />
//       </div>
//       <div className={`initial ${menuStatus ? ' active' : ''}`}></div>
//     </header>
//   );
// };
