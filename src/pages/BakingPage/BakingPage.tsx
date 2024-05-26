import React, { useState, useCallback, useEffect, useRef } from 'react'
import axios from 'axios'
import './BakingPage.css'

interface Message {
	role: 'user' | 'assistant'
	content: string
}

const CozeBotComponent: React.FC = () => {
	const [query, setQuery] = useState<string>('')
	const [chatHistory, setChatHistory] = useState<Message[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const chatEndRef = useRef<HTMLDivElement>(null)

	const handleQueryChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setQuery(event.target.value)
		},
		[]
	)

	const handleSubmit = useCallback(
		async (event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault()
			if (query.trim() === '') return
			setIsLoading(true)
			const userMessage: Message = { role: 'user', content: query }

			setChatHistory(prevHistory => [...prevHistory, userMessage])
			setQuery('')

			try {
				const response = await axios.post('/api/chat', { message: query })

				const filteredMessages = Array.isArray(response.data.messages)
					? response.data.messages.map((msg: any) => ({
							role: 'assistant',
							content: msg.content,
					  }))
					: []

				setChatHistory(prevHistory => [...prevHistory, ...filteredMessages])
			} catch (error) {
				console.error('Ошибка:', error)
			} finally {
				setIsLoading(false)
				scrollToBottom()
			}
		},
		[query]
	)

	const scrollToBottom = () => {
		chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}

	useEffect(() => {
		scrollToBottom()
	}, [chatHistory])

	return (
		<div className='chat-container'>
			<div className='chat-history'>
				{chatHistory.map((message, index) => (
					<div key={index} className={`chat-message ${message.role}`}>
						<span>{message.content}</span>
					</div>
				))}
				<div ref={chatEndRef} />
			</div>
			<form className='chat-form' onSubmit={handleSubmit}>
				<input
					type='text'
					value={query}
					onChange={handleQueryChange}
					placeholder='Напишите ваше сообщение здесь...'
					disabled={isLoading}
				/>
				<button type='submit' disabled={isLoading}>
					{isLoading ? 'Отправка...' : 'Отправить'}
				</button>
			</form>
		</div>
	)
}

export default CozeBotComponent
