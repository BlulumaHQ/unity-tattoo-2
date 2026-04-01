export interface Artist {
  name: string;
  slug: string;
  specialty: string;
  bio: string;
  image: string;
  gallery: string[];
  isGuest?: boolean;
  instagram?: string;
  email?: string;
}

export const artists: Artist[] = [
  {
    name: "Heather Drew",
    slug: "heather-drew",
    specialty: "Realism",
    bio: "Heather specializes in realism. Her work ranges from refined micro tattoos, life-like animal and pet portraits, to subjects with just the right dose of the strange and disturbing.",
    image: "/images/artist-heather.webp",
    gallery: [
      "/images/artist-heather.webp",
      "/images/portfolio/tattoo-fineline-botanical.jpg",
      "/images/portfolio/tattoo-fineline-portrait.jpg",
      "/images/portfolio/tattoo-dotwork-mandala.jpg",
      "/images/tattoo-work-1.jpg",
      "/images/tattoo-work-5.jpg",
      "/images/portfolio/tattoo-cat-portrait.webp",
      "/images/portfolio/tattoo-strawberry-heart.webp",
    ],
  },
  {
    name: "Paige McGrath",
    slug: "paige-mcgrath",
    specialty: "Neo-traditional & non-traditional",
    bio: "Paige specializes in neo-traditional and non-traditional styles, with a particular fondness for bright poppy colors and high-contrast designs. When she's not tattooing, Paige draws inspiration by immersing herself in books, or exploring the world outside.",
    image: "/images/artist-paige.webp",
    gallery: [
      "/images/artist-paige.webp",
      "/images/portfolio/tattoo-dotwork-mandala.jpg",
      "/images/portfolio/tattoo-snake-bg.webp",
      "/images/portfolio/tattoo-eagle-snake.webp",
      "/images/tattoo-work-2.jpg",
      "/images/tattoo-work-6.jpg",
      "/images/portfolio/tattoo-fineline-botanical.jpg",
      "/images/portfolio/tattoo-statue-realism.webp",
    ],
  },
  {
    name: "Bronson Ramos",
    slug: "bronson-ramos",
    specialty: "Cursed neo-traditional",
    bio: "Bronson's tattoo art style is best described as cursed neotraditional, with bold lines, bright colour schemes, and a grotesque take on pop culture characters. Due to his traditional apprenticeship however, he's more than comfortable to do black and grey, traditional americana, or any number of tattoo styles.",
    image: "/images/artist-bronson.webp",
    gallery: [
      "/images/artist-bronson.webp",
      "/images/portfolio/tattoo-trad-eagle.jpg",
      "/images/portfolio/tattoo-neo-trad-skull-rose.jpg",
      "/images/portfolio/tattoo-eagle-snake.webp",
      "/images/tattoo-work-3.jpg",
      "/images/tattoo-work-7.jpg",
      "/images/portfolio/tattoo-strawberry-heart.webp",
      "/images/portfolio/tattoo-robot-helmet.webp",
    ],
  },
  {
    name: "Jesse Kvarnstrom",
    slug: "jesse-kvarnstrom",
    specialty: "Neo-traditional & traditional",
    bio: "Jesse Kvarnstrom is a tattoo artist whose work blends elements of traditional and new school tattoo styles. Drawing inspiration from American traditional, neo-traditional, and new school influences, he brings a unique twist to each design.",
    image: "/images/artist-jesse.webp",
    gallery: [
      "/images/artist-jesse.webp",
      "/images/portfolio/tattoo-wolf-realism.jpg",
      "/images/portfolio/tattoo-statue-realism.webp",
      "/images/portfolio/tattoo-cat-portrait.webp",
      "/images/tattoo-work-4.jpg",
      "/images/tattoo-work-8.jpg",
      "/images/portfolio/tattoo-snake-bg.webp",
      "/images/portfolio/tattoo-fineline-portrait.jpg",
    ],
  },
  {
    name: "Soodie Yang",
    slug: "soodie-yang",
    specialty: "Black and grey realism & fine line",
    bio: "Rooted in Black and Grey Realism, Soodie is inspired by classical statues and the beauty of the human form, which she translates to detailed, realistic tattoos.",
    image: "/images/artist-soodie.webp",
    gallery: [
      "/images/artist-soodie.webp",
      "/images/portfolio/tattoo-watercolor-bird.jpg",
      "/images/portfolio/tattoo-cat-portrait.webp",
      "/images/portfolio/tattoo-fineline-portrait.jpg",
      "/images/tattoo-work-1.jpg",
      "/images/tattoo-work-3.jpg",
      "/images/portfolio/tattoo-fineline-botanical.jpg",
      "/images/portfolio/tattoo-moon-woman.webp",
    ],
  },
  {
    name: "Brianne Throne",
    slug: "brianne-throne",
    specialty: "Neo-traditional & neo-Japanese",
    bio: "Brianne is a multi-style tattoo artist with a special interest in illustrative neo-traditional and neo-Japanese design. With 7 years of experience in the trade, she is best known for her full colour anime and pop culture tattoos.",
    image: "/images/artist-brianne.webp",
    gallery: [
      "/images/artist-brianne.webp",
      "/images/portfolio/tattoo-neo-trad-skull-rose.jpg",
      "/images/portfolio/tattoo-moon-woman.webp",
      "/images/portfolio/tattoo-strawberry-heart.webp",
      "/images/tattoo-work-2.jpg",
      "/images/tattoo-work-5.jpg",
      "/images/portfolio/tattoo-trad-eagle.jpg",
      "/images/portfolio/tattoo-robot-helmet.webp",
    ],
  },
  {
    name: "Atisha Rainey",
    slug: "atisha-rainey",
    specialty: "Neo-traditional & color",
    bio: "Atisha's neo-traditional work features bold colors and striking compositions. Her artistic vision brings a fresh perspective to classic tattooing styles.",
    image: "/images/artist-atisha.webp",
    gallery: [
      "/images/artist-atisha.webp",
      "/images/portfolio/tattoo-moon-woman.webp",
      "/images/portfolio/tattoo-neo-trad-skull-rose.jpg",
      "/images/portfolio/tattoo-robot-helmet.webp",
      "/images/tattoo-work-4.jpg",
      "/images/tattoo-work-7.jpg",
      "/images/portfolio/tattoo-watercolor-bird.jpg",
      "/images/portfolio/tattoo-frog-samurai.webp",
    ],
  },
  {
    name: "Jay Skeletons",
    slug: "jay-skeletons",
    specialty: "Neo-Japanese & black and grey",
    bio: "Jay has been tattooing professionally for 5 years, constantly pushing boundaries through different forms of art. With experience tattooing across Canada and in Japan, he brings a global perspective to the craft. His true passion lies in bold neo-Japanese color and dark, black and grey illustrative pieces.",
    image: "/images/artist-jay.webp",
    gallery: [
      "/images/artist-jay.webp",
      "/images/portfolio/tattoo-japanese-dragon.jpg",
      "/images/portfolio/tattoo-frog-samurai.webp",
      "/images/portfolio/tattoo-snake-bg.webp",
      "/images/tattoo-work-6.jpg",
      "/images/tattoo-work-8.jpg",
      "/images/portfolio/tattoo-eagle-snake.webp",
      "/images/portfolio/tattoo-wolf-realism.jpg",
    ],
    isGuest: true,
    instagram: "https://www.instagram.com/skeletonsforsale/",
    email: "skeletonsforsale@gmail.com",
  },
];
