import s from "./Service.module.css"

export default function Service({img, alt, title, text, lower}) {
	let classList = s.services__item;
	if (lower) classList += ' ' + s.services__item_lower;

	return (
		< div className={classList} >
			<img src={img} alt={alt} />
			<span>{title}</span>
			<p>{text}</p>
		</div >
	)
}