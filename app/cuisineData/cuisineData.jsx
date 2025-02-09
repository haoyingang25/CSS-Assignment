//ANG HAO YING S10270430F
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
      rating: { stars: 4.5, reviews: 3230 },
      link: "chinese/chinese-dumplings",
      position: [39.9042, 116.4074], // Beijing, China
      location: "Din Tai Fung, China, Bei Jing Shi, Chao Yang Qu. 新源西里中街24号, Postal Code 100027"
    },
    {
      id: 2,
      src: "/pekingDuck.jpg",
      alt: "Peking Duck",
      rating: { stars: 4.0, reviews: 1302 },
      link: "chinese/peking-duck",
      position: [22.3193, 114.1694], // Hong Kong
      location: "QuanJude Roast Duck, 9 Shuaifuyuan Hu Tong, Wangfujing, Dongcheng, Beijing China 100005 "
    },
    {
      id: 3,
      src: "/carrotcake.jpg",
      alt: "Carrot Cake",
      rating: { stars: 4.4, reviews: 2445 },
      link: "chinese/carrot-cake",
      position: [1.3774628095642345, 103.772483603644], // Singapore
      location: "Lau Pa Sat, 18 Raffles Quay Singapore 048582"
    },
    {
      id: 4,
      src: "/dimsum.jpg",
      alt: "Dim Sum",
      rating: { stars: 4.7, reviews: 2000 },
      link: "chinese/dim-sum",
      position: [31.2304, 121.4737], // Shanghai, China
      location: "Jade Garden, 1121 Yan an Rd (M), Jing An, Shanghai, China, 200041"
    },
    {
      id: 5,
      src: "/popiah.JPG",
      alt: "Popiah",
      rating: { stars: 4.3, reviews: 658 },
      link: "chinese/popiah",
      position: [1.3521, 103.8198], // Singapore
      location: "Old Airport Road Food Centre, 51 old airport road. Singapore 390051"
    },
  ],

  Italian: [
    {
      id: 6,
      src: "/lasanga.png",
      alt: "Lasagna",
      rating: { stars: 4.4, reviews: 5382 },
      link: "italian/lasagna",
      position: [41.9028, 12.4964], // Rome, Italy
      location: "Trattoria Da Enzo al 29, via dei Vascellari,29,00153 Roma RM Italy"
    },
    {
      id: 7,
      src: "/pizza.jpg",
      alt: "Pizza",
      rating: { stars: 4.4 , reviews: 1201 },
      link: "italian/pizza",
      position: [40.8518, 14.2681], // Naples, Italy
      location: "L'Antica Pizzeria Da Michele, Via Cesare Sersale, 1, 80139 Napoli NA, Italy "
    },
    {
      id: 8,
      src: "/pasta.jpg",
      alt: "Pasta",
      rating: { stars: 4.3, reviews: 1203 },
      link: "italian/pasta",
      position: [45.4642, 9.1900], // Milan, Italy
      location: "Da Oscar, Via Lazzaro Palazzi, 4, 20124 Milano MI, Italy "
    },
    {
      id: 9,
      src: "/Tiramisu.jpg",
      alt: "Tiramisu Cake",
      rating: { stars: 4.7, reviews: 1250 },
      link: "italian/tiramisu-cake",
      position: [43.7312, 10.3985], // Florence, Italy 
      location: "Le Volpi e l'Uva, Piazza dei Rossi, 1R, 50125 Firenze Fl, Italy "
    },
  ],

  Korean: [
    {
      id: 10,
      src: "/bibimbap.jpg",
      alt: "Bibimbap",
      rating: { stars: 4.9 , reviews: 1206 },
      link: "korean/bibimbap",
      position: [37.5665, 126.9780], // Seoul, South Korea
      location: "Myeondong Joomak,  25-1 Myeondong 10-Gil, Jung District Seoul, South Korea "
    },
    {
      id: 11,
      src: "/tteokbooki.jpg",
      alt: "Korean Rice Cake",
      rating: { stars: 4.7, reviews: 1270 },
      link: "korean/tteokbokki",
      position: [35.1798, 129.0756], // Busan, South Korea
      location: "Bunsigdang, 192 Jungang-Daero, Dong-Gu, Busan, South Korea"
    },
    {
      id: 12,
      src: "/kbbq.jpg",
      alt: "Korean BBQ",
      rating: { stars: 4.9, reviews: 1210 },
      link: "korean/korean-barbeque",
      position: [36.3504, 127.3848], // Daejeon, South Korea
      location: "Daejeon Korean BBQ Chicken Restaurant Hoyeonjae, South Korea, Bongmyeon-dong 623-3 KR "
    },
  ],

  Japanese: [
    {
      id: 13,
      src: "/japanese food.jpg",
      alt: "Sushi",
      rating: { stars: 3.9, reviews: 1290 },
      link: "japanese/sushi",
      position: [35.6895, 139.6917], // Tokyo, Japan
      location: "Sukiyabashi Jiro, 104-0061 Tokyo, Chuo city, Ginza, 4 Chome-2-15 "
    },
    {
      id: 14,
      src: "/ramen.jpg",
      alt: "Ramen",
      rating: { stars: 4.3, reviews: 3000 },
      link: "japanese/ramen",
      position: [34.6937, 135.5023], // Osaka, Japan
      location: "Ichiran Ramen, 1 Chome-4-16 Dotonburi, Chuo Ward, Osaka, 542-0071"
    },
    {
      id: 15,
      src: "/tonkatsu.jpg",
      alt: "Tonkatsu",
      rating: { stars: 4.1, reviews: 5020 },
      link: "japanese/tonkatsu",
      position: [34.6937, 135.5023], // Osaka, Japan
      location: "Tonkatsu KATSUKURA, 530-8350 Osaka, Kita ward, Kakudacho, 8-7"
    },
    {
      id: 16,
      src: "/Onigiri.jpg",
      alt: "Onigiri",
      rating: { stars: 4.5, reviews: 1209 },
      link: "japanese/onigiri",
      position: [35.0116, 135.7681], // Kyoto, Japan
      location: "Gochisou Yakimusubi Onimaru Kyoto Shijo Kawaramachi,  7 otabimiyamotocho, Shimogyo Ward, Kyoto, 600-8004"
    },
    {
      id: 17,
      src: "/pancakes.jpeg",
      alt: "Japanese Pancakes",
      rating: { stars: 4.4, reviews: 1209 },
      link: "japanese/japanese-pancakes",
      position: [34.6937, 135.5023], // Osaka, Japan
      location: "A Happy Pancake, 542-0086 Osaka, Chuo ward, Nishishinsaibashi, 2 Chome-10-32"
    },
  ],
};