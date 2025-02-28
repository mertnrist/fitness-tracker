const BASE_URL = '/api'

export const profileService = {
	// Bio güncelleme
	updateBio: async (newBio) => {
		try {
			const response = await fetch(`${BASE_URL}/profile/bio`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ bio: newBio }),
			})

			if (!response.ok) {
				throw new Error('Bio güncellenirken bir hata oluştu')
			}

			return await response.json()
		} catch (error) {
			throw error
		}
	},

	// Profil bilgilerini getir
	getProfile: async () => {
		try {
			const response = await fetch(`${BASE_URL}/profile`)

			if (!response.ok) {
				throw new Error('Profil bilgileri alınamadı')
			}

			return await response.json()
		} catch (error) {
			throw error
		}
	},

	// Profil fotoğrafı yükleme
	uploadProfilePhoto: async (file) => {
		const formData = new FormData()
		formData.append('photo', file)

		try {
			const response = await fetch(`${BASE_URL}/profile/photo`, {
				method: 'POST',
				body: formData,
			})

			if (!response.ok) {
				throw new Error('Fotoğraf yüklenirken bir hata oluştu')
			}

			return await response.json()
		} catch (error) {
			throw error
		}
	},

	// Kapak fotoğrafı yükleme
	uploadCoverPhoto: async (file) => {
		const formData = new FormData()
		formData.append('photo', file)

		try {
			const response = await fetch(`${BASE_URL}/profile/cover`, {
				method: 'POST',
				body: formData,
			})

			if (!response.ok) {
				throw new Error('Fotoğraf yüklenirken bir hata oluştu')
			}

			return await response.json()
		} catch (error) {
			throw error
		}
	},

	// Profil fotoğrafını kaldır
	removeProfilePhoto: async () => {
		try {
			const response = await fetch(`${BASE_URL}/profile/photo`, {
				method: 'DELETE',
			})

			if (!response.ok) {
				throw new Error('Fotoğraf kaldırılırken bir hata oluştu')
			}

			return await response.json()
		} catch (error) {
			throw error
		}
	},
}
