// src/pages/BakingPage/Baking.tsx
import React, { useState } from 'react'
import axios from 'axios'

// Определение интерфейса для структуры сообщения
interface Message {
	role: 'user' | 'assistant'
	type?: 'answer' | 'function_call' | 'tool_response' | 'follow_up'
	content: string
	content_type: 'text' | 'markdown'
	extra_info?: any
}

const CozeBotComponent: React.FC = () => {
	const [query, setQuery] = useState<string>('')
	const [response, setResponse] = useState<string>('')
	const [chatHistory, setChatHistory] = useState<Message[]>([])
	const [stream, setStream] = useState<boolean>(false) // Установите в true для потоковых ответов

	const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value)
	}

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		// Замените на ваш фактический токен доступа и идентификатор бота
		const personalAccessToken =
			'pat_3SuwPNleza5xCEOQFALTFJpV6SsQdKQXXNo2NfJbFKUDtjC8sdTKma8HndEuTJYG'
		const botId = '7365616524948389894'

		try {
			const response = await axios.post(
				'https://api.coze.com/open_api/v2/chat',
				{
					bot_id: botId,
					user: '7288341866996', // Замените на ваш идентификатор пользователя
					query: query,
					chat_history: chatHistory,
					stream: stream,
				},
				{
					headers: {
						Authorization: `Bearer ${personalAccessToken}`,
						'Content-Type': 'application/json',
						Connection: 'keep-alive',
						Accept: '*/*',
					},
				}
			)

			// Обработка ответа
			console.log('Ответ:', response.data)

			// Находим сообщение с типом 'answer' для отображения пользователю
			const answerMessage = response.data.messages.find(
				(msg: Message) => msg.type === 'answer'
			)
			if (answerMessage) {
				setResponse(answerMessage.content) // Устанавливаем содержимое ответа в состояние
			} else {
				setResponse('No answer received') // Если нет ответа, устанавливаем соответствующее сообщение
			}

			// Обновление истории чата всеми сообщениями
			setChatHistory(prevHistory => [
				...prevHistory,
				...(response.data.messages as Message[]),
			])
		} catch (error) {
			console.error('Ошибка:', error)
			setResponse('Error occurred') // Устанавливаем сообщение об ошибке
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='text' value={query} onChange={handleQueryChange} />
				<button type='submit'>Отправить сообщение</button>
			</form>
			<div>
				<p>Ответ от Coze Bot:</p>
				<pre>{response}</pre>
			</div>
		</div>
	)
}

export default CozeBotComponent
