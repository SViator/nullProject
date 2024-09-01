import {Link} from 'react-router-dom';
import s from './Header.module.css';

export default function Header() {
	return (
		<header className={s.header}>
			<Link to={'/'} className={s.headerLogo}>
				<img src="/img/logo.svg" alt="logo" />
				<h3>Abito</h3>
			</Link>

			<div className={s.headerControls}>
				<button className={`${s.btn} + '' + ${s.btnOutline}`}>Вход и регистрация</button>
				<button className={`${s.btn} + '' + ${s.btnPrimary}`}>Подать объявление</button>
			</div >
			<div className={s.headerBurger}>
				<img src="/img/burger.svg" alt="burger" />
			</div>
		</header >
	)
}