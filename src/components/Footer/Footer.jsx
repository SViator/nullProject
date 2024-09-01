import s from "./Footer.module.css";

export default function Footer() {
	return (
		<footer className={s.footer}>
			<div className={s.footer__info}>
				<p>© ООО «Абито», 2011–2021</p>
				<a href="#">Политика конфиденциальности</a>
				<a href="#">Обработка данных</a>
			</div>
		</footer>
	)
}