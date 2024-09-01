import {Link} from "react-router-dom"
import s from "./Card.module.css"

export default function Card({id, img, title, price, adress, date}) {
	return (
		<Link to={`/product/${id}`} className={s.card}>
			<img src={img} alt="img" />
			<h5 className={s.card__title}>{title}</h5>
			<p className={s.card__price}>{price}</p>
			<p className={s.card__adress}>{adress}</p>
			<p className={s.card__date}>{date}</p>
		</Link>
	)
}

<Link to={`contacts/1`}>Your Name</Link>