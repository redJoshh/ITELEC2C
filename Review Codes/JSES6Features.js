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
    genres: ["action", "adventure", "mythology"],
    hasMovieAdaptation: true,
    pages: 50,
    translations: {
      spanish: "God of War",
      portuguese: "God of War",
    },
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

function getOneGame(id) {
  return videoGames.find((g) => g.id === id);
}

//Activity 1: Object Destructuring
const objDestructuring = getOneGame(201);
// const { title, author, pages } = objDestructuring;
// console.log(title);
// console.log(author);
// console.log(pages);

//Activity 2: Array Destructing
// const arrayDestruct = getOneGame(201).genres;
// const [mainGenre, ...otherGenres] = arrayDestruct;
// console.log(mainGenre);
// console.log(otherGenres);

// //Activity 3: Spread Operator
// const spreadOperator1 = [...objDestructuring.genres, "Multiplayer"];
// const spreadOperator2 = { ...objDestructuring.pages, pages: 120 };
// console.log(spreadOperator1);
// console.log(spreadOperator2);

// //Activity 4: Rest Operator
// const getDetailsRest = objDestructuring;
// // const { title, ...gameDetails } = getDetailsRest;
// // console.log(title);
// //console.log(gameDetails);

// //Activity 5: Arrow Functions
// const isLongGame = (game) => game.pages > 80 ?? false;
const godOfWar = getOneGame(204);
// console.log(isLongGame(objDestructuring));
// console.log(isLongGame(godOfWar));

// //Activity 6: Template Literals
// const useTemplateLit = objDestructuring;
// const { title, author, pages } = useTemplateLit;
// console.log(`Game: ${title}`);
// console.log(`Developer: ${author}`);
// console.log(`Playtime: ${pages} hours`);

// //Activity 7: If Statement vs. Ternary Operator
//Part A

// const act7A = objDestructuring;
// if (act7A.hasMovieAdaptation == true) {
//   console.log("This game has a movie or series adaptation");
// } else {
//   console.log("No Movie Adaptation Available");
// }

//Part B
// const act7B =
//   godOfWar.hasMovieAdaptation == true
//     ? console.log("This game has a movie or series adaptation")
//     : console.log("No Movie Adaptation Available");

//Activity 8 Logical Operators & Short Circuiting
// const cyberPunk = getOneGame(205);
// console.log(cyberPunk.translations == "Spanish" || "No Spanish Translation");

// console.log(
//   godOfWar.hasMovieAdaptation &&
//     `Show Adaptation Details: ${godOfWar.hasMovieAdaptation}`,
// );

// console.log(godOfWar?.reviews?.goodreads);

//Bonus Challenge
function printGameSummary(videoGame) {
  //Getting Details
  const { title, author, pages, hasMovieAdaptation } = videoGame;
  const movieSeries =
    videoGame.hasMovieAdaptation == true
      ? "Has movie/series adaptation ✅"
      : "No movie/series adaptation❌";

  console.log(`🎮 ${title}`);
  console.log(`Developer: ${author}`);
  console.log(`Playtime: ${pages} hours`);
  console.log(movieSeries);
}

const testVideoGame = getOneGame(202);
printGameSummary(testVideoGame);
