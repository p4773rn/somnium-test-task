import cover1 from '@/assets/cover1.jpg'
import cover2 from '@/assets/cover2.jpg'
import cover3 from '@/assets/cover3.jpg'

const booksArray = []
const covers = [cover1, cover2, cover3]
for (let i = 1; i <= 20; i++) {
    booksArray.push({
        name: `Another Book Number ${i}`,
        price: `${i * 100}`,
        author: 'John Doe',
        year: `${2000 + i}`,
        cover: covers[(i - 1) % 3],
    })
}

export default booksArray
