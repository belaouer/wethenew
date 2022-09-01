const collections = [
  { id: "nike-dunk-low", title: "NIKE DUNK LOW" },
  { id: "air-jordan-1-mid", title: "AIR JORDAN 1 MID" },
  { id: "new-balance", title: "NEW BALANCE" },
  { id: "air-jordan", title: "AIR JORDAN" },
  { id: "white-sneakers", title: "SNEAKERS BLANCHES" },
];

const carouselItems = [
  {
    id: 1,
    title: "Air Max 1 Patta White Grey",
    brand: "Nike",
    price: "à partir de €320.00",
    img: "nike-air-max-1-patta-white.webp",
  },
  {
    id: 2,
    title: "Cortez 4.0 Sacai White University Red Blue",
    brand: "Nike",
    price: "à partir de €310.00",
    img: "nike-cortez-4-0-sacai-white.webp",
  },
  {
    id: 3,
    title: "Dunk Low SE Lottery Green pale Ivory",
    brand: "Nike",
    price: "à partir de €200.00",
    img: "air-jordan-1-retro-high-og.webp",
  },
  {
    id: 4,
    title: "Forum Buckle Low Bad Bunny Blue Tint",
    brand: "Adidas",
    price: "à partir de €410.00",
    img: "adidas-forum-buckle-low.webp",
  },
  {
    id: 5,
    title: "Air Jordan 1 Retro High OG Stealth",
    brand: "Air Jordan",
    price: "à partir de €235.00",
    img: "air-jordan-1-retro-high-og.webp",
  },
  {
    id: 6,
    title: "Air Jordan 1 Mid University Blue Grey",
    brand: "Air Jordan",
    price: "à partir de €235.00",
    img: "air-jordan-1-mid-university-blue.webp",
  },
];

const categories = [
  { id: "nouveautes", title: "Nouveauté", allSelection: "Voir la sélection" },
  {
    id: "air-jordan-a-mid",
    title: "Air Jordan 1 Mid",
    allSelection: "Voir la sélection",
  },
  { id: "nike-dunk", title: "Nike Dunk", allSelection: "Voir la sélection" },
  {
    id: "air-jordan-4",
    title: "Air Jordan 4",
    allSelection: "Voir la sélection",
  },
];

const brands = [
  { id: "air-jordan", title: "Air Jordan" },
  { id: "nike", title: "Nike" },
  { id: "yeezy", title: "Yeezy" },
  { id: "new-balance", title: "New Balance" },
];

const reviews = [
  {
    id: 1,
    numStars: 5,
    confirmed: true,
    title: "Très satisfaute de ma commande encore...",
    text: "Très satisfaute de ma commande encore une fois. Les délais sont respectés beaucoup d'.....",
    author: "Maxim",
    commentDate: "16 août",
  },
  {
    id: 2,
    numStars: 5,
    confirmed: true,
    title: "Très satisfaute de ma commande encore...",
    text: "Très satisfaute de ma commande encore une fois. Les délais sont respectés beaucoup d'.....",
    author: "Leo",
    commentDate: "16 août",
  },
  {
    id: 3,
    numStars: 4,
    confirmed: false,
    title: "Très satisfaute de ma commande encore...",
    text: "Très satisfaute de ma commande encore une fois. Les délais sont respectés beaucoup d'.....",
    author: "Antoine",
    commentDate: "16 août",
  },
  {
    id: 4,
    numStars: 4,
    confirmed: true,
    title: "Très satisfaute de ma commande encore...",
    text: "Très satisfaute de ma commande encore une fois. Les délais sont respectés beaucoup d'.....",
    author: "Malik",
    commentDate: "16 août",
  },
  {
    id: 5,
    numStars: 5,
    confirmed: true,
    title: "Très satisfaute de ma commande encore...",
    text: "Très satisfaute de ma commande encore une fois. Les délais sont respectés beaucoup d'.....",
    author: "Ludo",
    commentDate: "16 août",
  },
  {
    id: 6,
    numStars: 4,
    confirmed: false,
    title: "Très satisfaute de ma commande encore...",
    text: "Très satisfaute de ma commande encore une fois. Les délais sont respectés beaucoup d'.....",
    author: "Flore",
    commentDate: "29 août",
  },
  {
    id: 7,
    numStars: 4,
    confirmed: true,
    title: "Très satisfaute de ma commande encore...",
    text: "Très satisfaute de ma commande encore une fois. Les délais sont respectés beaucoup d'.....",
    author: "Mohamed",
    commentDate: "16 mars",
  },
];

const articles = [
  {
    id: 1,
    title:
      "Après une sortie manquée sur Patta, la Air Max 1 White Grey ressort aujourd'hui",
    text: "Une nouvelle vague de Air Max signée Patta.",
    img: "article-1",
  },
  {
    id: 2,
    title: "Back to School : les essentiels de la rentrée",
    text: "Tout ce qu'il vous faut pour la rentrée ! ",
    img: "article-2",
  },
  {
    id: 3,
    title:
      "Free Game : on a testé la plateforme de Virgil Abloh, voilà ce qu'on en retient",
    text: "Un outil à destination de tous les jeunes entrepreneurs !",
    img: "article-3",
  },
];

const cards = [
  { id: 1, title: "Nos contacter", text: "Écrivez-nous : help@wethenew.com" },
  { id: 2, title: "En savoir plus", text: "Concept" },
  { id: 3, title: "Trouvez votre produit", text: "Rechrche" },
  { id: 4, title: "Services", text: "Wethenew Family" },
  { id: 5, title: "Devise", text: "EUR" },
];
export {
  collections,
  carouselItems,
  categories,
  brands,
  reviews,
  articles,
  cards,
};
