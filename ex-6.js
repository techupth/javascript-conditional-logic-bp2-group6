let favoriteBooks = [];

function addFavoriteBook(bookName) {
  
 if (bookName.includes("Beauty")) {
    favoriteBooks.push(bookName);
  }
}
addFavoriteBook("Beauty and the Beast")
addFavoriteBook("Warhammer 40k")
addFavoriteBook("Star Wars: Attack of the Clones")
addFavoriteBook("Christmas Beauty")
console.log(favoriteBooks)