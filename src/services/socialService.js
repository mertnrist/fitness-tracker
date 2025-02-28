const BASE_URL = '/api'

export const socialService = {
	// Arkadaş listesini getir
	getFriends: async () => {
		const response = await fetch(`${BASE_URL}/friends`)
		return response.json()
	},

	// Arkadaşlık isteklerini getir
	getFriendRequests: async () => {
		const response = await fetch(`${BASE_URL}/friend-requests`)
		return response.json()
	},

	// Önerileri getir
	getSuggestions: async () => {
		const response = await fetch(`${BASE_URL}/friend-suggestions`)
		return response.json()
	},

	// Arkadaşlık isteği gönder
	sendFriendRequest: async (userId) => {
		const response = await fetch(`${BASE_URL}/friend-requests`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ userId }),
		})
		return response.json()
	},

	// Arkadaşlık isteğini kabul et
	acceptFriendRequest: async (requestId) => {
		const response = await fetch(
			`${BASE_URL}/friend-requests/${requestId}/accept`,
			{
				method: 'POST',
			}
		)
		return response.json()
	},

	// Arkadaşlık isteğini reddet
	rejectFriendRequest: async (requestId) => {
		const response = await fetch(
			`${BASE_URL}/friend-requests/${requestId}/reject`,
			{
				method: 'POST',
			}
		)
		return response.json()
	},

	// Arkadaşı sil
	removeFriend: async (friendId) => {
		const response = await fetch(`${BASE_URL}/friends/${friendId}`, {
			method: 'DELETE',
		})
		return response.json()
	},

	// Kullanıcı ara
	searchUsers: async (query) => {
		const response = await fetch(`${BASE_URL}/users/search?q=${query}`)
		return response.json()
	},
}
