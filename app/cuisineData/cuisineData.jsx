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
      location: { name: "Dumpling", address: "1 Chinatown Rd, Singapore" },
      rating: { stars: 4.5, reviews: 120 },
    },
    {
      id: 2,
      src: "/pekingDuck.jpg",
      alt: "Peking Duck",
      location: { name: "Peking Restaruant", address: "6 Orchard Rd, Singapore" },
      rating: { stars: 4.5, reviews: 1200 },
    },
    {
      id: 3,
      src: "/carrotcake.jpg",
      alt: "Carrot Cake",
      location: { name: "Lau Pa Sat", address: "23 Raffles Rd, Singapore" },
      rating: { stars: 4.5, reviews: 1222 },
    },
    {
      id: 4,
      src: "/dimsum.jpg",
      alt: "Dim Sum",
      location: { name: "Crystal Jade", address: "90 ChinaTown Rd, Singapore" },
      rating: { stars: 4.5, reviews: 2000 },
    },
    {
      id: 5,
      src: "/popiah.JPG",
      alt: "Popiah",
      location: { name: "Clementi Food Court", address: "12 Clementi Rd, Singapore" },
      rating: { stars: 4.5, reviews: 100 },
    },
  ],

  
  Italian: [
    {
      id: 6,
      src: "/lasanga.png",
      alt: "lasanga",
      location: { name: "Chill Cafe", address: "33 Marina Bay Dr, Singapore" },
      rating: { stars: 4.5, reviews: 1000 },
    },
    {
      id: 7,
      src: "/pizza.jpg",
      alt: "Pizza",
      location: { name: "Pizza Heaven", address: "159 City Square, Singapore" },
      rating: { stars: 4.5, reviews: 1201 },
    },
    {
      id: 8,
      src: "/pasta.jpg",
      alt: "Pasta",
      location: { name: "Tipo", address: "101 City Square, Singapore" },
      rating: { stars: 4.5, reviews: 1203 },
    },
    {
      id: 9,
      src: "/Tiramisu.jpg",
      alt: "Tiramisu Cake",
      location: { name: "Dessert Palace", address: "99 City Square, Singapore" },
      rating: { stars: 4.5, reviews: 1250 },
    },
  ],

  
  Korean: [
    {
      id: 10,
      src: "/bibimbap.jpg",
      alt: "Bibimbap",
      location: { name: "Korean", address: "66 Tanjong Pagar Rd, Singapore" },
      rating: { stars: 4.5, reviews: 1206 },
    },
    {
      id: 11,
      src: "/tteokbooki.jpg",
      alt: "Korean Rice Cake",
      location: { name: "Rice Cake", address: "10 Clake Quay Rd, Singapore" },
      rating: { stars: 4.5, reviews: 1270 },
    },
    {
      id: 12,
      src: "/kbbq.jpg",
      alt: "Korean BBQ",
      location: { name: "Gangnam KBBQ", address: "5 Tanjong Pagar Rd, Singapore" },
      rating: { stars: 4.5, reviews: 1210 },
    },
  ],

  
  Japanese: [
    {
      id: 13,
      src: "/japanese food.jpg",
      alt: "Sushi",
      location: { name: "Sushi", address: "66 Clarke Quay, Singapore" },
      rating: { stars: 4.5, reviews: 1290 },
    },
    {
      id: 14,
      src: "/ramen.jpg",
      alt: "Ramen",
      location: { name: "Ramen", address: "7 Orchard Gateway, Singapore" },
      rating: { stars: 4.5, reviews: 3000 },
    },
    {
      id: 15,
      src: "/tonkatsu.jpg",
      alt: "Tonkatsu",
      location: { name: "Tonkatsu", address: "70 Westage Gateway, Singapore" },
      rating: { stars: 4.5, reviews: 5020 },
    },
    {
      id: 16,
      src: "/Onigiri.jpg",
      alt: "Onigiri",
      location: { name: "Japan shop", address: "8 Westage Gateway, Singapore" },
      rating: { stars: 4.5, reviews: 1209 },
    },
    {
      id: 17,
      src: "/pancakes.jpeg",
      alt: "Japanese Pancakes",
      location: { name: "Pancake", address: "8 Vivo City, Singapore" },
      rating: { stars: 4.5, reviews: 1209 },
    },
  ],
};





