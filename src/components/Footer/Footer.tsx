import React from 'react'
import './Footer.css' // Импортируем файл стилей для футера
const Footer: React.FC = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<p>© 2024 Ваша компания. Все права защищены.</p>
			</div>
		</footer>
	)
}

export default Footer
