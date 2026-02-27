export const makeImg = (seed) => `https://picsum.photos/seed/${seed}/200/200`

export const INIT_CATEGORIES = [
 { id: 1, name: 'Phones', img: makeImg('phone1'), hasContent: true },
 { id: 2, name: 'Laptops', img: makeImg('laptop2'), hasContent: true },
 { id: 3, name: 'Tablets', img: makeImg('tablet3'), hasContent: true },
 { id: 4, name: 'Headphones', img: makeImg('audio4'), hasContent: true },
 { id: 5, name: 'Camera', img: makeImg('camera5'), hasContent: true },
 { id: 6, name: 'Watches', img: makeImg('watch6'), hasContent: true },
 { id: 7, name: 'TVs', img: makeImg('tv7'), hasContent: true },
 { id: 8, name: 'Gaming', img: makeImg('game8'), hasContent: true },
 { id: 9, name: 'Speakers', img: makeImg('speak9'), hasContent: true },
 { id: 10, name: 'Camera', img: makeImg('cam10'), hasContent: true },
 { id: 11, name: 'Keyboards', img: makeImg('key11'), hasContent: true },
 { id: 12, name: 'Monitors', img: makeImg('mon12'), hasContent: true },
 { id: 13, name: 'Printers', img: makeImg('print13'), hasContent: true },
 { id: 14, name: 'Routers', img: makeImg('route14'), hasContent: true },
 { id: 15, name: 'Camera', img: makeImg('cam15'), hasContent: true },
 { id: 16, name: 'Accessories', img: makeImg('acc16'), hasContent: true }
]

export const INIT_BRANDS = ['Samsung', 'Xiaomi', 'LG', 'Nokia', 'Panasonic']
export const INIT_SLIDERS = [
 { id: 1, name: 'Healthcare_Erbology.png', img: '📱' },
 { id: 2, name: 'Healthcare_Erbology.png', img: '📱' },
 { id: 3, name: 'Healthcare_Erbology.png', img: '📱' }
]
export const INIT_BANNERS = [
 { id: 1, name: 'Healthcare_Erbology.png', img: '🎧' }
]
export const TABS = ['Categories', 'Brands', 'Banners']
