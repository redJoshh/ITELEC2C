console.log("Hello Quokka");
const videoGames = [
  {
    id: 201,
    title: "The Legend of Zelda: Breath of the Wild",
    publicationDate: "2017-03-03",
    author: "Nintendo", // developer / publisher
    genres: ["action-adventure", "open world", "fantasy"],
    hasMovieAdaptation: false,
    pages: 100, // average gameplay hours
    translations: {
      japanese: "ゼルダの伝説 ブレス オブ ザ ワイルド",
      spanish: "La leyenda de Zelda: Breath of the Wild",
    },
    reviews: {
      goodreads: {
        rating: 4.79,
        ratingsCount: 1450000,
        reviewsCount: 32000,
      },
      librarything: {
        rating: 4.65,
        ratingsCount: 98000,
        reviewsCount: 2100,
      },
    },
  },
  {
    id: 202,
    title: "The Witcher 3: Wild Hunt",
    publicationDate: "2015-05-19",
    author: "CD Projekt Red",
    genres: ["role-playing", "open world", "fantasy"],
    hasMovieAdaptation: true,
    pages: 120,
    translations: {
      polish: "Wiedźmin 3: Dziki Gon",
      spanish: "The Witcher 3: Caza Salvaje",
    },
    reviews: {
      goodreads: {
        rating: 4.81,
        ratingsCount: 2100000,
        reviewsCount: 48000,
      },
      librarything: {
        rating: 4.72,
        ratingsCount: 135000,
        reviewsCount: 3400,
      },
    },
  },
  {
    id: 203,
    title: "Minecraft",
    publicationDate: "2011-11-18",
    author: "Mojang Studios",
    genres: ["sandbox", "survival", "creative"],
    hasMovieAdaptation: false,
    pages: 300,
    translations: {
      spanish: "Minecraft",
      chinese: "我的世界",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 5000000,
        reviewsCount: 92000,
      },
      librarything: {
        rating: 4.4,
        ratingsCount: 210000,
        reviewsCount: 5200,
      },
    },
  },
  {
    id: 204,
    title: "God of War",
    publicationDate: "2018-04-20",
    author: "Santa Monica Studio",
    genres: [null, "adventure", "mythology"],
    hasMovieAdaptation: true,
    pages: 50,
    translations: null,
    reviews: {
      goodreads: {
        rating: 4.74,
        ratingsCount: 1800000,
        reviewsCount: 41000,
      },
      librarything: {
        rating: 4.6,
        ratingsCount: 125000,
        reviewsCount: 2900,
      },
    },
  },
  {
    id: 205,
    title: "Cyberpunk 2077",
    publicationDate: "2020-12-10",
    author: "CD Projekt Red",
    genres: ["role-playing", "open world", "cyberpunk"],
    hasMovieAdaptation: true,
    pages: 80,
    translations: {
      polish: "Cyberpunk 2077",
      japanese: "サイバーパンク2077",
    },
    reviews: {
      goodreads: {
        rating: 3.95,
        ratingsCount: 1200000,
        reviewsCount: 67000,
      },
      librarything: {
        rating: 3.88,
        ratingsCount: 89000,
        reviewsCount: 4100,
      },
    },
  },
];

function getGames() {
  return videoGames;
}

function getGame(id) {
  return videoGames.find((g) => g.id === id);
}

//Object Destructuring

const gameOne = getGame(205);
// const title = gameOne.title;
// const author = gameOne.author;
// const genre = gameOne.genres;

// const { title, author, genres, publicationDate } = gameOne;
// console.log(title, author, genres, publicationDate);

// console.log(title);
// console.log(author);
// console.log(genre);
// const games = getGames(videoGames);
// console.log(games);
// const oneGame = getGame(204);
// console.log(oneGame);

//Array Destructuring

// console.log(secondGenre);

const game204 = getGame(204);
const { title, publicationDate, pages, translations } = game204;

console.log(title);
console.log(publicationDate);
console.log(pages);
console.log(translations);

// console.log(translations.spanish);
// console.log(translations.portuguese);

//Spread and Rest Operator

//Rest
const arr = [1, 2, 3, 4, 5, 6];
const [firstElement, secondElement, ...others1] = arr;

console.log(firstElement);
console.log(secondElement);
console.log(others1);

const genres = game204.genres;
const [firstGenre, ...others] = genres;
console.log(firstGenre);
console.log(others);

//Spread
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

const arr3 = [...arr1, ...arr2];
const arr4 = [...arr3, 9, 10, 11];
console.log(arr4);
console.log(arr3);

//add console property : PS5

const newGameone = { ...gameOne, console: "PS5" };

console.log(newGameone);

const [primaryGenre, ...others2] = genres;
//Template Literal
console.log(
  "The primary genre is " + primaryGenre + " and the other genres are: ",
);
console.log(`The Primary Genre is ${primaryGenre ?? "No primary genre"}`);

//arrow function
// function sum1(x, y) {
//   x + y;
// }
const sum = (x, y) => x + y;

console.log(sum(1, 2));

//short circuit and logical operators
//&&
//||
//??

console.log(
  gameOne.hasMovieAdaptation ? "This movie has movie adaptation!" : "No Movie",
);

game204.translations = "spanish";

console.log(game204.translations || "No translations!");

const darkMode = false;
console.log(darkMode && "Darkmode is one!");

const count = null;
console.log(count ?? "This is null ");
