//recipe-helper/src/components/Slider/CollectionSlider.tsx
import React from 'react'
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './CategorySlider.css'

const CollectionSlider: React.FC = () => {
	const navigate = useNavigate()
	const handleClick = (path: string) => navigate(path)
	const collections = [
		{
			title: 'Паста и пицца',
			imageUrl:
				'https://img.freepik.com/premium-photo/italian-cuisine-pizza-pasta-toasts_645697-7707.jpg',
			path: '/pasta-pizza',
		},
		{
			title: 'Вегетарианские блюда',
			imageUrl:
				'https://www.sostra.ru/upload/resize_cache/iblock/445/320_210_2/ovoshchi_grill.jpg',
			path: '/vegetarian',
		},
		{
			title: 'Морепродукты',
			imageUrl:
				'https://media.glamour.ru/photos/61696815d51cd15be254f51f/16:9/w_1280,c_limit/Midii%20v%20souse%20bisk%20iz%20kamchatskogo%20kraba.JPG',
			path: '/scroll',
		},
		// Добавьте другие подборки
	]
	const settings = {
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 12000,
	}

	return (
		<Slider {...settings}>
			{collections.map((collection, index) => (
				<div
					key={index}
					className='collection-slide'
					onClick={() => handleClick(collection.path)}
				>
					<img src={collection.imageUrl} alt={collection.title} />
					<h3>{collection.title}</h3>
				</div>
			))}
		</Slider>
	)
}

export default CollectionSlider
