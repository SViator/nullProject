import {useOutletContext} from "react-router-dom";
import Card from "../components/Card/Card";

export default function Home() {
	const {products} = useOutletContext();
	return (
		<div className="content-main">
			<h3>Рекомендации для вас</h3>
			<div className="content-main__list">
				{products.map(card => (<Card key={card.id}{...card} />))}
			</div>
		</div>
	)
}