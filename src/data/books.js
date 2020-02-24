const booksArray = []
for (let i = 1; i <= 20; i++) {
    booksArray.push({
        name: `Another Book Number ${i}`,
        price: `${i * 100}`,
        author: 'John Doe',
        year: `${2000 + i}`,
        cover: `https://images-na.ssl-images-amazon.com/images/I/41cKHGhTVdL._SX323_BO1,204,203,200_.jpg`,
    })
}

export default booksArray
