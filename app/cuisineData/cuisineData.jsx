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
    },
    {
      id: 2,
      src: "/pekingDuck.jpg",
      alt: "Peking Duck",
      rating: { stars: 4.5, reviews: 1200 },
      link: "chinese/peking-duck",
    },
    {
      id: 3,
      src: "/carrotcake.jpg",
      alt: "Carrot Cake",
      rating: { stars: 4.5, reviews: 1222 },
      link: "chinese/carrot-cake",
    },
    {
      id: 4,
      src: "/dimsum.jpg",
      alt: "Dim Sum",
      rating: { stars: 4.5, reviews: 2000 },
      link: "chinese/dim-sum",
    },
    {
      id: 5,
      src: "/popiah.JPG",
      alt: "Popiah",
      rating: { stars: 4.5, reviews: 100 },
      link: "chinese/popiah",
    },
  ],

  
  Italian: [
    {
      id: 6,
      src: "/lasanga.png",
      alt: "lasanga",
      rating: { stars: 4.5, reviews: 1000 },
      link: "italian/lasanga",
    },
    {
      id: 7,
      src: "/pizza.jpg",
      alt: "Pizza",
      rating: { stars: 4.5, reviews: 1201 },
      link: "italian/pizza",
    },
    {
      id: 8,
      src: "/pasta.jpg",
      alt: "Pasta",
      rating: { stars: 4.5, reviews: 1203 },
      link: "italian/pasta",
    },
    {
      id: 9,
      src: "/Tiramisu.jpg",
      alt: "Tiramisu Cake",
      rating: { stars: 4.5, reviews: 1250 },
      link: "italian/tiramisu-cake",
    },
  ],

  
  Korean: [
    {
      id: 10,
      src: "/bibimbap.jpg",
      alt: "Bibimbap",
      rating: { stars: 4.5, reviews: 1206 },
      link: "korean/bibimbap",
    },
    {
      id: 11,
      src: "/tteokbooki.jpg",
      alt: "Korean Rice Cake",
      rating: { stars: 4.5, reviews: 1270 },
      link: "korean/tteokbokki",
    },
    {
      id: 12,
      src: "/kbbq.jpg",
      alt: "Korean BBQ",
      rating: { stars: 4.5, reviews: 1210 },
      link: "korean/korean-barbeque",
    },
  ],

  
  Japanese: [
    {
      id: 13,
      src: "/japanese food.jpg",
      alt: "Sushi",
      rating: { stars: 4.5, reviews: 1290 },
      link: "japanese/sushi",
    },
    {
      id: 14,
      src: "/ramen.jpg",
      alt: "Ramen",
      rating: { stars: 4.5, reviews: 3000 },
      link: "japanese/ramen",
    },
    {
      id: 15,
      src: "/tonkatsu.jpg",
      alt: "Tonkatsu",
      rating: { stars: 4.5, reviews: 5020 },
      link: "japanese/tonkatsu",
    },
    {
      id: 16,
      src: "/Onigiri.jpg",
      alt: "Onigiri",
      rating: { stars: 4.5, reviews: 1209 },
      link: "japanese/onigiri",
    },
    {
      id: 17,
      src: "/pancakes.jpeg",
      alt: "Japanese Pancakes",
      rating: { stars: 4.5, reviews: 1209 },
      link: "japanese/japanese-pancakes",
    },
  ],
};





