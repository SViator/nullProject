import {useParams} from "react-router-dom";
import {useOutletContext} from "react-router-dom";

export default function Product() {
	const {products} = useOutletContext();
	const {id} = useParams();

	const findProduct = products.find((p) => p.id === +id);


	return (
		<>
			{
				findProduct ?
					<div className="contend-product">
						< div className="product__descript" >
							<h3>{findProduct.title}</h3>
							<img src={findProduct.img} alt="photo" />
							<p className="product__text">
								{findProduct.description}
							</p>
						</div >
						<div className="product__offer">
							<h3 className="offer__price">{findProduct.price}</h3>
							<button className="btn offer__btn">Показать телефон</button>
						</div>
					</div >
					:
					<h3>Такого товара не существует</h3>
			}
		</>
	)
}