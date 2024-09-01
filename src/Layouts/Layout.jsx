import Header from "../components/Header/Header";
import Service from "../components/Service/Service";
import Footer from "../components/Footer/Footer";
import {Outlet} from "react-router-dom";
import {cardArr, services} from "../components/constants";
import {useEffect, useState} from "react";

export default function Layout() {
	const [searchText, setSearchText] = useState('');
	const [products, setProducts] = useState([]);

	const handleSearch = (event) => {
		setSearchText(event.target.value);
	}

	const handleSearchArr = () => {
		setProducts(cardArr.filter((p) => p.title.includes(searchText) || p.price.includes(searchText)));
		setSearchText('');
	}

	useEffect(() => {
		setProducts(cardArr)
	}, [])

	return (
		<div className="wrap">
			<Header />
			<main>
				<section className="search">
					<input
						id="searchInput"
						placeholder="Поиск по объявлениям"
						type="text"
						value={searchText}
						onChange={handleSearch}
						required
					/>
					<button className="btn searchBtn" onClick={handleSearchArr}>
						<img src="/img/search.svg" alt="search" />
						<h5>Найти</h5>
					</button>
				</section>

				<section className="content">

					<Outlet context={{products}} />

					<aside className="content-services">
						<h4>Сервисы и услуги</h4>
						<div className="content-services__list">
							{services.map(item => (<Service key={item.id}{...item} />))}
							<div className="line"></div>
						</div>
					</aside>
				</section>
			</main>
			<Footer />
		</div>
	)
}