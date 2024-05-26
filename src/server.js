const express = require('express')
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000
const COZE_API_URL = 'https://api.coze.com/open_api/v2/chat'
const PERSONAL_ACCESS_TOKEN =
	'pat_3SuwPNleza5xCEOQFALTFJpV6SsQdKQXXNo2NfJbFKUDtjC8sdTKma8HndEuTJYG' // Замените на ваш токен
const BOT_ID = '7365620971673387014' // Замените на ID вашего бота

app.post('/api/chat', async (req, res) => {
	try {
		const { message, chat_history } = req.body

		console.log('Получено сообщение:', message)
		console.log('История чата:', chat_history)

		const response = await axios.post(
			COZE_API_URL,
			{
				bot_id: BOT_ID,
				user: '7288341866996', // Идентификатор пользователя
				query: message,
				chat_history: chat_history,
				stream: false,
			},
			{
				headers: {
					Authorization: `Bearer ${PERSONAL_ACCESS_TOKEN}`,
					'Content-Type': 'application/json',
				},
			}
		)

		const filteredMessages = response.data.messages.filter(
			msg => msg.role === 'assistant' && msg.type === 'answer'
		)

		console.log('Отфильтрованные сообщения:', filteredMessages)

		res.json({ messages: filteredMessages })
	} catch (error) {
		console.error('Ошибка при обработке запроса:', error)
		if (axios.isAxiosError(error)) {
			console.error('Детали ошибки:', error.response?.data)
			res
				.status(error.response?.status || 500)
				.send(error.response?.data || 'Внутренняя ошибка сервера')
		} else {
			res.status(500).send('Внутренняя ошибка сервера')
		}
	}
})

app.listen(PORT, () => {
	console.log(`Сервер запущен на порту ${PORT}`)
})
