import React, { useState } from 'react'

const SeafoodPage: React.FC = () => {
	const [message, setMessage] = useState('') // Состояние для хранения сообщения

	const handleSendMessage = () => {
		console.log(`Сообщение отправлено: ${message}`) // Выводим сообщение в консоль
	}

	return (
		<div>
			<h1>Морепродукты</h1>
			<img
				src='https://i.gifer.com/origin/fb/fb20ca310d03a6c34f0f74c27a91cd42_w200.gif'
				alt=''
			/>
			{/* Добавляем форму ввода */}
			<div className='footik'>
				<input
					type='text'
					value={message}
					onChange={e => setMessage(e.target.value)} // Обновляем состояние при изменении ввода
					placeholder='Введите сообщение...'
				/>
				<button onClick={handleSendMessage}>Отправить</button>
			</div>
		</div>
	)
}

export default SeafoodPage
