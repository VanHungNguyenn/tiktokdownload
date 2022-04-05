// const link =
// 	'https://www.tiktok.com/foryou?feed_mode=v1&is_copy_url=1&is_from_webapp=v1&item_id=7080487586963148059#/@duonghaa2k1/video/7080487586963148059'
// const link2 =
// 	'https://www.tiktok.com/@dan.foolish/video/7078636053514423578?is_copy_url=1&is_from_webapp=v1'
// const link3 =
// 	'https://www.tiktok.com/@_thljnh/video/7082583502884982042?is_copy_url=1&is_from_webapp=v1'

const getIdVideo = (link) => {
	if (link.includes('foryou')) {
		return link.split('/video/')[1]
	} else {
		const regex = /(?<=video\/)(.*)(?=\?)/g
		const id = link.match(regex)

		if (id === null) {
			return null
		}

		return id.toString()
	}
}

export default getIdVideo

// console.log(getIdVideo(link3))
