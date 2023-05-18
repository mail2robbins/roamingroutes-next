import tour1 from "../images/tour-1.jpg";
import tour2 from "../images/tour-7.jpeg";
import tour3 from "../images/tour-3.jpg";
import tour4 from "../images/tour-4.jpeg";
// import tour5 from "./images/tour-5.jpeg";
// import tour6 from "./images/tour-6.jpeg";
// import tour7 from "./images/tour-7.jpeg";
import tour8 from "../images/tour-8.jpg";
import tour10 from "../images/tour-10.jpg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const privacyLinks = [{ id: 1, href: "#home", text: "privacy" }];

export const socialLinks = [
  // { id: 1, href: "https://www.facebook.com", icon: "fab fa-youtube" },
  // {
  //   id: 2,
  //   href: "https://www.youtube.com/watch?v=mjSeFi9JLIw&t=43s",
  //   icon: "fab fa-youtube",
  // },
  {
    id: 3,
    href: "https://www.youtube.com/@roaming-routes",
    icon: "fab fa-youtube",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "We help you identify several ways to save money when booking tour packages.",
  },
  {
    id: 2,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "We guarantee ensuring an enjoyable and stress-free travel experience for our customers.",
  },
  {
    id: 3,
    icon: "fas fa-tree fa-fw",
    title: "endless options",
    text: "Our tour packages offer endless options for travelers to explore different destinations, cultures, and experiences around the world.",
  },
];

export const tours = [
  {
    id: 101,
    image: tour1,
    date: "Advanced Package",
    title: "Puerto Rico Islands",
    info: `Traveling to Puerto Rico is less difficult than you might think. Citizens of the United States do not need a passport. Puerto Rico, a strong and utterly resilient island, is as historic as it is scenic. The island is rich in natural beauty and unspoiled landscapes. White-sand beaches meet tropical rainforests that extend inland to the island's mountains. There are also three bioluminescent bays on the island, which is an experience in and of itself because this phenomenon is only found in a few places around the world.`,
    location: "Puerto Rico",
    duration: 8,
    cost: 4100,
  },
  {
    id: 1,
    image: tour2,
    date: "Standard Package",
    title: "Tibet Adventure",
    info: `This journey into the Amdo Tibetan region provides an inside look at Tibetan life. Stay with a family in a small mountain village and get a firsthand look at their way of life. Enjoy their cuisine and try your hand at cooking alongside your hosts. This cultural tour will give you a much better understanding of Tibetan culture and lifestyle. This fascinating corner of China features colorful scenery and rich cultures that are seamlessly woven together into one beautiful tapestry in this mountainous region of Asia.`,
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 201,
    image: tour3,
    date: "Advanced Package",
    title: "Dominican Republic",
    info: `The Dominican Republic's beaches attract visitors from all over the world. As you take in the sights and sounds of the Dominican Republic, endless beaches blend with Merengue music. The Dominican Republic, a two-hour flight from Miami, has 1,000 miles of coastline and 250 miles of some of the Caribbean's best beaches.`,
    location: "Dominican Rep.",
    duration: 11,
    cost: 1400,
  },
  {
    id: 2,
    image: tour8,
    date: "Advanced Package",
    title: "best of java",
    info: `On a spectacular 14-day journey from Jakarta to Ubud, get to know Indonesia from a different - and more varied - perspective. Discover Jakarta and Yogyakarta's current and cultural capitals, hike up Mt Bromo for epic views of the countryside, meander through the lush jungles of Seloliman Nature Reserve in search of local wildlife, and cross the ditch to Bali's north coast, with plenty of time to relax on the sandy beaches of Permuteran. Take the plunge and get to know some of Indonesia's hotspots in a more authentic way with this journey that takes you from city to coast, jungle to market, and temple to mountain.`,
    location: "indonesia",
    duration: 14,
    cost: 1400,
  },
  // {
  //   id: 103,
  //   image: tour1,
  //   date: "Standard Package",
  //   title: "The Islands of the Bahamas",
  //   info: `The Bahamas Islands, located just off the coast of Florida, provide visitors with an exciting and action-packed vacation experience. Explore Nassau's shopping and dining options while strolling past candy-colored building facades. Visit one of the local casinos, which offer Vegas-style entertainment and gambling. Relax and take in the scenery, which includes soft-sand beaches, lush palm-filled gardens, and adventure-filled underwater gardens just waiting to be discovered. Nassau and Paradise Island provide visitors with a vacation filled with endless possibilities.`,
  //   location: "Bahamas",
  //   duration: 7,
  //   cost: 5800,
  // },
  {
    id: 301,
    image: tour4,
    date: "Premium Package",
    title: "Ultimate Kenya and Tanzania",
    info: `A super-luxurious safari that includes the "Best of the Best" of Kenya and Tanzania's wild wilderness. Expect incredible "Big Five" sightings in open-vehicle safaris, as well as the Samburu "Special Five," a unique game species. Explore the endless plains of the Serengeti, one of Africa's most important wildlife areas. Stop for sundowners as the sun sets over the African horizon. Relax in a beautiful spa while admiring the African savannahs.`,
    location: "Kenya",
    duration: 15,
    cost: 5000,
  },
  // {
  //   id: 3,
  //   image: tour3,
  //   date: "Premium Package",
  //   title: "explore hong kong",
  //   info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
  //   location: "hong kong",
  //   duration: 8,
  //   cost: 5000,
  // },
  {
    id: 102,
    image: tour10,
    date: "Standard Package",
    title: "The Islands of Tahiti",
    info: `Travel to these beautiful islands with a vacation package that includes round-trip airfare from Los Angeles or Seattle. Relax in your overwater bungalow, stroll along the coral beaches, visit sacred ruins, learn about island culture through traditional Polynesian music and dance, and get up close and personal with ocean wildlife while snorkeling and diving.`,
    location: "Tahiti",
    duration: 6,
    cost: 5800,
  },
  // {
  //   id: 4,
  //   image: tour4,
  //   date: "Prestige Package",
  //   title: "kenya highlights",
  //   info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
  //   location: "kenya",
  //   duration: 20,
  //   cost: 3300,
  // },
];
