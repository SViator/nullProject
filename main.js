const searchBtn = document.querySelector('#searchButton');
const searchInp = document.querySelector('#searchInput');
const cardWrap = document.querySelector('.content-main__list')

const cardArr = [
	{
		id: 0,
		img: './img/card-img.jpeg',
		title: 'Первый товар',
		price: '170 ₽',
		adress: 'Казань, р-н Вахитовский',
		date: '10 июля 11:39',
	},
	{
		id: 1,
		img: './img/card-img.jpeg',
		title: 'Второый товар',
		price: '171 ₽',
		adress: 'Казань, р-н Вахитовский',
		date: '10 июля 11:39',
	},
	{
		id: 2,
		img: './img/card-img.jpeg',
		title: 'Третий товар',
		price: '172 ₽',
		adress: 'Казань, р-н Вахитовский',
		date: '10 июля 11:39',
	},
	{
		id: 3,
		img: './img/card-img.jpeg',
		title: 'Четвертый товар',
		price: '173 ₽',
		adress: 'Казань, р-н Вахитовский',
		date: '10 июля 11:39',
	},
	{
		id: 4,
		img: './img/card-img.jpeg',
		title: 'Пятый товар',
		price: '174 ₽',
		adress: 'Казань, р-н Вахитовский',
		date: '10 июля 11:39',
	},
	{
		id: 5,
		img: './img/card-img.jpeg',
		title: 'Шестой товар',
		price: '175 ₽',
		adress: 'Казань, р-н Вахитовский',
		date: '10 июля 11:39',
	},
];

const render = (arr) => {
	cardWrap.innerHTML = '';

	arr.forEach((item, idx) => {
		cardWrap.insertAdjacentHTML('beforeend', `
			<a href="./product.html" class="content-card">
				<img src="${item.img}" alt="${item.title}">
				<h5 class="content-card__title">${item.title}</h5>
				<p class="content-card__price">${item.price}</p>
				<p class="content-card__adress">${item.adress}</p>
				<p class="content-card__date">${item.date}</p>
			</a>
		`)
	})
};

const fltrArr = (arr, valString) => {
	return arr.filter((item) => {
		return item.title.includes(valString) || item.price.includes(valString)
	})
}

render(cardArr);

searchBtn.addEventListener('click', () => {
	render(fltrArr(cardArr, searchInp.value))
	searchInp.value = '';
});
