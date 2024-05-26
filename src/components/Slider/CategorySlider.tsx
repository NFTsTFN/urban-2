//recipe-helper/src/components/Slider/CategorySlider.tsx
import React from 'react'
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './CategorySlider.css'

const CategorySlider: React.FC = () => {
	const navigate = useNavigate()
	const handleClick = (path: string) => {
		console.log('Navigating to:', path)
		navigate(path)
	}
	const categories = [
		{
			name: 'Завтрак',
			imageUrl: '',
			path: '/breakfast', // Предполагаемый путь
		},
		{
			name: 'Обед',
			imageUrl: '',
			path: '/lunch',
		},
		{
			name: 'Ужин',
			imageUrl: '',
			path: '/dinner',
		},
		{
			name: 'Десерты',
			imageUrl: '',
			path: '/desserts', // Предполагаемый путь
		},
		{
			name: 'Салаты',
			imageUrl: '',
			path: '/Salads',
		},
		{
			name: 'Выпечка',
			imageUrl: '',
			path: '/baking',
		},

		// Добавьте все категории и пути к изображениям
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
			{categories.map((category, index) => (
				<div
					key={index}
					className='category-slide'
					onClick={() => handleClick(category.path)}
				>
					<img
						src={category.imageUrl}
						alt={category.name}
						style={{ cursor: 'pointer' }}
					/>
					<h3>{category.name}</h3>
				</div>
			))}
		</Slider>
	)
}

export default CategorySlider
