const makeImg = (seed) => `https://picsum.photos/seed/${seed}/200/200`

export const INITIAL_CATEGORIES = [
 { id: 1, name: 'Phones', img: makeImg('phone1') },
 { id: 2, name: 'Laptops', img: makeImg('laptop2') },
 { id: 3, name: 'Tablets', img: makeImg('tablet3') },
 { id: 4, name: 'Headphones', img: makeImg('audio4') }
]
