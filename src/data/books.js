import cover1 from '@/assets/cover1.jpg'
import cover2 from '@/assets/cover2.jpg'
import cover3 from '@/assets/cover3.jpg'

const booksArray = []
const covers = [cover1, cover2, cover3]
const names = [
    'Foo',
    'Bar',
    'Get',
    'House',
    'Car',
    'Zap',
    'Qer',
    'Wot',
    'Eat',
    'Sap',
    'Top',
]

for (let i = 1; i <= 20; i++) {
    let name = ''
    // Generate random name
    for (let j = 0; j < 5; j++) {
        name += names[Math.floor(Math.random() * names.length)]
    }
    booksArray.push({
        name: `${name} ${i}`,
        price: `${i * 100}`,
        author: 'John Doe',
        year: `${2000 + i}`,
        cover: covers[(i - 1) % 3],
    })
}

export default booksArray
