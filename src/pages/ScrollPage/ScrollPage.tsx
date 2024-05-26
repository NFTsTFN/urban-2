import React from 'react'
import './ScrollPage.css'
import { useNavigate } from 'react-router-dom'

const ScrollPage: React.FC = () => {
	const navigate = useNavigate()

	const handleNextPage = () => {
		navigate('/next-page') // Обновите этот маршрут на свой
	}

	const renderCard = (name: string, stars: number, preparations: number) => {
		return (
			<div className='card'>
				<h3>{name}</h3>
				<div className='stars'>
					{'★'.repeat(stars)}
					{'☆'.repeat(5 - stars)}
				</div>
				<p>Приготовлений: {preparations}</p>
			</div>
		)
	}

	return (
		<div className='scroll-page'>
			<div className='card-columns'>
				{Array.from({ length: 1 }).map((_, i) => (
					<React.Fragment key={i}>
						{renderCard('Имя 1', 5, 45)}
						{renderCard('Имя 2', 4, 15)}
						{renderCard('Имя 3', 2, 25)}
						{renderCard('Имя 4', 3, 35)}
					</React.Fragment>
				))}
			</div>
			<button className='next-page-btn' onClick={handleNextPage}>
				Следующая страница
			</button>
		</div>
	)
}

export default ScrollPage
