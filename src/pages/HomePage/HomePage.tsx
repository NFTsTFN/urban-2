// recipe-helper/src/pages/HomePage/HomePage.tsx
import React from 'react'
import CategorySlider from '../../components/Slider/CategorySlider'
import CollectionSlider from '../../components/Slider/CollectionSlider'

const HomePage: React.FC = () => {
	return (
		<div className='container'>
			<div className='content'>
				<CategorySlider />
				<CollectionSlider />
			</div>
		</div>
	)
}

export default HomePage
