const coding = ["js", "ruby", "java", "python", "cpp"]

const books = [
    {title: 'book one', genre: 'fiction', publish: 1981, edition: 2004},
    {title: 'book two', genre: 'non-fiction', publish: 1992, edition: 2008},
    {title: 'book three', genre: 'history', publish: 1999, edition: 2007},
    {title: 'book four', genre: 'non-fiction', publish: 1989, edition: 2010},
    {title: 'book five', genre: 'science', publish: 2009, edition: 2014},
    {title: 'book six', genre: 'fiction', publish: 1987, edition: 2010},
    {title: 'book seven', genre: 'history', publish: 1986, edition: 1996},
    {title: 'book eight', genre: 'science', publish: 2011, edition: 2016},
    {title: 'book nine', genre: 'non-fiction', publish: 1981, edition: 1989},
]


// const userBooks = books.filter( (bk) => bk.genre === "history")

// userBooks = books.filter( (bk) => {
//      return bk.publish >= 1995 && bk.genre === "history"
// })

// console.log(userBooks);

// just example

userBooks = books.filter( (rp) => rp.publish >= 1980 && rp.genre === "fiction" && rp.edition >= 2005)
console.log(userBooks);