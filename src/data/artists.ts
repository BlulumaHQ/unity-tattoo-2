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
      "/images/portfolio/tattoo-fineline-botanical.jpg",
      "/images/portfolio/tattoo-fineline-portrait.jpg",
      "/images/portfolio/tattoo-dotwork-mandala.jpg",
      "/images/portfolio/tattoo-cat-portrait.webp",
      "/images/portfolio/tattoo-strawberry-heart.webp",
      "/images/portfolio/tattoo-wolf-realism.jpg",
      "/images/portfolio/tattoo-statue-realism.webp",
      "/images/portfolio/tattoo-moon-woman.webp",
    ],
  },
  {
    name: "Paige McGrath",
    slug: "paige-mcgrath",
    specialty: "Neo-traditional & non-traditional",
    bio: "Paige specializes in neo-traditional and non-traditional styles, with a particular fondness for bright poppy colors and high-contrast designs. When she's not tattooing, Paige draws inspiration by immersing herself in books, or exploring the world outside.",
    image: "/images/artist-paige.webp",
    gallery: [
      "/images/portfolio/paige-portfolio-03.webp",
      "/images/portfolio/paige-portfolio-04.webp",
      "/images/portfolio/paige-portfolio-05.webp",
      "/images/portfolio/paige-portfolio-06.webp",
      "/images/portfolio/paige-portfolio-07.webp",
      "/images/portfolio/paige-portfolio-08.webp",
      "/images/portfolio/paige-portfolio-09.webp",
      "/images/portfolio/paige-portfolio-10.webp",
      "/images/portfolio/paige-portfolio-11.webp",
      "/images/portfolio/paige-portfolio-12.webp",
    ],
  },
  {
    name: "Bronson Ramos",
    slug: "bronson-ramos",
    specialty: "Cursed neo-traditional",
    bio: "Bronson's tattoo art style is best described as cursed neotraditional, with bold lines, bright colour schemes, and a grotesque take on pop culture characters. Due to his traditional apprenticeship however, he's more than comfortable to do black and grey, traditional americana, or any number of tattoo styles.",
    image: "/images/artist-bronson.webp",
    gallery: [
      "/images/portfolio/tattoo-trad-eagle.jpg",
      "/images/portfolio/tattoo-neo-trad-skull-rose.jpg",
      "/images/portfolio/tattoo-eagle-snake.webp",
      "/images/portfolio/tattoo-strawberry-heart.webp",
      "/images/portfolio/tattoo-robot-helmet.webp",
      "/images/portfolio/tattoo-snake-bg.webp",
      "/images/portfolio/tattoo-frog-samurai.webp",
      "/images/portfolio/tattoo-wolf-realism.jpg",
    ],
  },
  {
    name: "Jesse Kvarnstrom",
    slug: "jesse-kvarnstrom",
    specialty: "Neo-traditional & traditional",
    bio: "Jesse Kvarnstrom is a tattoo artist whose work blends elements of traditional and new school tattoo styles. Drawing inspiration from American traditional, neo-traditional, and new school influences, he brings a unique twist to each design.",
    image: "/images/artist-jesse.webp",
    gallery: [
      "/images/portfolio/tattoo-wolf-realism.jpg",
      "/images/portfolio/tattoo-statue-realism.webp",
      "/images/portfolio/tattoo-cat-portrait.webp",
      "/images/portfolio/tattoo-snake-bg.webp",
      "/images/portfolio/tattoo-fineline-portrait.jpg",
      "/images/portfolio/tattoo-trad-eagle.jpg",
      "/images/portfolio/tattoo-eagle-snake.webp",
      "/images/portfolio/tattoo-robot-helmet.webp",
    ],
  },
  {
    name: "Soodie Yang",
    slug: "soodie-yang",
    specialty: "Black and grey realism & fine line",
    bio: "Rooted in Black and Grey Realism, Soodie is inspired by classical statues and the beauty of the human form, which she translates to detailed, realistic tattoos.",
    image: "/images/artist-soodie.webp",
    gallery: [
      "/images/portfolio/soodie-portfolio-01.webp",
      "/images/portfolio/soodie-portfolio-02.webp",
      "/images/portfolio/soodie-portfolio-03.webp",
      "/images/portfolio/soodie-portfolio-04.webp",
      "/images/portfolio/soodie-portfolio-05.webp",
      "/images/portfolio/soodie-portfolio-06.webp",
      "/images/portfolio/soodie-portfolio-07.webp",
      "/images/portfolio/soodie-portfolio-08.webp",
      "/images/portfolio/soodie-portfolio-09.webp",
      "/images/portfolio/soodie-portfolio-10.webp",
      "/images/portfolio/soodie-portfolio-11.webp",
      "/images/portfolio/soodie-portfolio-12.webp",
    ],
  },
  {
    name: "Brianne Throne",
    slug: "brianne-throne",
    specialty: "Neo-traditional & neo-Japanese",
    bio: "Brianne is a multi-style tattoo artist with a special interest in illustrative neo-traditional and neo-Japanese design. With 7 years of experience in the trade, she is best known for her full colour anime and pop culture tattoos.",
    image: "/images/artist-brianne.webp",
    gallery: [
      "/images/portfolio/tattoo-neo-trad-skull-rose.jpg",
      "/images/portfolio/tattoo-moon-woman.webp",
      "/images/portfolio/tattoo-strawberry-heart.webp",
      "/images/portfolio/tattoo-trad-eagle.jpg",
      "/images/portfolio/tattoo-robot-helmet.webp",
      "/images/portfolio/tattoo-watercolor-bird.jpg",
      "/images/portfolio/tattoo-dotwork-mandala.jpg",
      "/images/portfolio/tattoo-frog-samurai.webp",
    ],
  },
  {
    name: "Atisha Rainey",
    slug: "atisha-rainey",
    specialty: "Neo-traditional & illustrative",
    bio: "Atisha is known for her strong illustrative skill set, which features a blend of various styles. She enjoys incorporating Art Nouveau influences, adding an elegant and flowing aesthetic to her designs, while using gothic elements to create stark, contrasting visuals.",
    image: "/images/artist-atisha.webp",
    gallery: [
      "/images/portfolio/tattoo-moon-woman.webp",
      "/images/portfolio/tattoo-neo-trad-skull-rose.jpg",
      "/images/portfolio/tattoo-robot-helmet.webp",
      "/images/portfolio/tattoo-watercolor-bird.jpg",
      "/images/portfolio/tattoo-frog-samurai.webp",
      "/images/portfolio/tattoo-fineline-botanical.jpg",
      "/images/portfolio/tattoo-cat-portrait.webp",
      "/images/portfolio/tattoo-japanese-dragon.jpg",
    ],
  },
  {
    name: "Jordyn Bishop",
    slug: "jordyn-bishop",
    specialty: "Neo-traditional",
    bio: "",
    image: "/images/artist-placeholder.webp",
    gallery: [],
  },
];
