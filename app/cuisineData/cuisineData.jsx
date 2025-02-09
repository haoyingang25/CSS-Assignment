//ANG HAO YING S10270430
//what it does:
// Data structure holding details of various cuisines and their dishes
// this is to show what the users have added into their favorites, except the description as it is not really important. if they were to use it to find locations
// this will be use to import at the app/favpage/page.jsx so that it can show the ones they added. 

//chinese = Chinese cuisine category
//italian = Italian cuisine category
//korean = Korean cuisine category
// Japanese cuisine category

// id =  Unique identifier for the dish
// src =  Path to the image of the dish
// alt = Alternative text for the image
// location = Location details for the dish
// rating =  Ratings and reviews for the dish

export const cuisineData = {
  Chinese: [
    {
      id: 1,
      src: "/chinese dumplings.jpg",
      alt: "Chinese Dumplings",
      rating: { stars: 4.5, reviews: 120 },
      link: "chinese/chinese-dumplings",
      position: [39.9042, 116.4074], // Beijing, China
    },
    {
      id: 2,
      src: "/pekingDuck.jpg",
      alt: "Peking Duck",
      rating: { stars: 4.5, reviews: 1200 },
      link: "chinese/peking-duck",
      position: [22.3193, 114.1694], // Hong Kong
    },
    {
      id: 3,
      src: "/carrotcake.jpg",
      alt: "Carrot Cake",
      rating: { stars: 4.5, reviews: 1222 },
      link: "chinese/carrot-cake",
      position: [1.3774628095642345, 103.772483603644], // Singapore
    },
    {
      id: 4,
      src: "/dimsum.jpg",
      alt: "Dim Sum",
      rating: { stars: 4.5, reviews: 2000 },
      link: "chinese/dim-sum",
      position: [31.2304, 121.4737], // Shanghai, China
    },
    {
      id: 5,
      src: "/popiah.JPG",
      alt: "Popiah",
      rating: { stars: 4.5, reviews: 100 },
      link: "chinese/popiah",
      position: [1.3521, 103.8198], // Singapore
    },
  ],

  Italian: [
    {
      id: 1,
      src: "/lasanga.png",
      alt: "lasanga",
      rating: { stars: 4.5, reviews: 1000 },
      link: "italian/lasanga",
      position: [41.9028, 12.4964], // Rome, Italy
    },
    {
      id: 2,
      src: "/pizza.jpg",
      alt: "Pizza",
      rating: { stars: 4.5, reviews: 1201 },
      link: "italian/pizza",
      position: [40.8518, 14.2681], // Naples, Italy
    },
    {
      id: 3,
      src: "/pasta.jpg",
      alt: "Pasta",
      rating: { stars: 4.5, reviews: 1203 },
      link: "italian/pasta",
      position: [45.4642, 9.1900], // Milan, Italy
    },
    {
      id: 4,
      src: "/Tiramisu.jpg",
      alt: "Tiramisu Cake",
      rating: { stars: 4.5, reviews: 1250 },
      link: "italian/tiramisu-cake",
      position: [43.7312, 10.3985], // Florence, Italy 
    },
  ],

  Korean: [
    {
      id: 10,
      src: "/bibimbap.jpg",
      alt: "Bibimbap",
      rating: { stars: 4.5, reviews: 1206 },
      link: "korean/bibimbap",
      position: [37.5665, 126.9780], // Seoul, South Korea
    },
    {
      id: 11,
      src: "/tteokbooki.jpg",
      alt: "Korean Rice Cake",
      rating: { stars: 4.5, reviews: 1270 },
      link: "korean/tteokbokki",
      position: [35.1798, 129.0756], // Busan, South Korea
    },
    {
      id: 12,
      src: "/kbbq.jpg",
      alt: "Korean BBQ",
      rating: { stars: 4.5, reviews: 1210 },
      link: "korean/korean-barbeque",
      position: [36.3504, 127.3848], // Daejeon, South Korea
    },
  ],

  Japanese: [
    {
      id: 13,
      src: "/japanese food.jpg",
      alt: "Sushi",
      rating: { stars: 4.5, reviews: 1290 },
      link: "japanese/sushi",
      position: [35.6895, 139.6917], // Tokyo, Japan
    },
    {
      id: 14,
      src: "/ramen.jpg",
      alt: "Ramen",
      rating: { stars: 4.5, reviews: 3000 },
      link: "japanese/ramen",
      position: [34.6937, 135.5023], // Osaka, Japan
    },
    {
      id: 15,
      src: "/tonkatsu.jpg",
      alt: "Tonkatsu",
      rating: { stars: 4.5, reviews: 5020 },
      link: "japanese/tonkatsu",
      position: [34.6937, 135.5023], // Osaka, Japan
    },
    {
      id: 16,
      src: "/Onigiri.jpg",
      alt: "Onigiri",
      rating: { stars: 4.5, reviews: 1209 },
      link: "japanese/onigiri",
      position: [35.0116, 135.7681], // Kyoto, Japan
    },
    {
      id: 17,
      src: "/pancakes.jpeg",
      alt: "Japanese Pancakes",
      rating: { stars: 4.5, reviews: 1209 },
      link: "japanese/japanese-pancakes",
      position: [34.6937, 135.5023], // Osaka, Japan
    },
  ],
};