import skullCapBlack from "@/assets/skull-cap-black.jpg";
import skullCapPurple from "@/assets/skull-cap-purple.jpg";
import skullCapGrey from "@/assets/skull-cap-grey.jpg";
import skullCapNavy from "@/assets/skull-cap-navy.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
  description: string;
  features: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "laser-classic-black",
    name: "Laser Classic Black",
    price: 549.99,
    image: skullCapBlack,
    colors: ["Black"],
    description: "The original Lazer Effect skull cap featuring our signature minimalist laser-etched logo. Crafted from premium cotton blend for all-day comfort.",
    features: [
      "Premium cotton blend fabric",
      "Laser-etched cyan logo",
      "One size fits all",
      "Machine washable",
      "Reinforced stitching"
    ],
    inStock: true
  },
  {
    id: "neon-purple-edition",
    name: "Neon Purple Edition",
    price: 639.99,
    image: skullCapPurple,
    colors: ["Purple"],
    description: "Limited edition purple skull cap with holographic laser accents that shift and shimmer in the light. Perfect for making a bold statement.",
    features: [
      "Holographic laser effects",
      "Premium purple fabric",
      "Light-reactive design",
      "Limited edition",
      "Comfort fit band"
    ],
    inStock: true
  },
  {
    id: "cyber-grey-pattern",
    name: "Cyber Grey Pattern",
    price: 599.99,
    image: skullCapGrey,
    colors: ["Grey"],
    description: "Cyberpunk-inspired grey skull cap featuring an intricate green laser pattern. Where street style meets futuristic design.",
    features: [
      "Cyberpunk laser pattern",
      "Breathable grey fabric",
      "Green accent details",
      "Modern fit",
      "Fade-resistant colors"
    ],
    inStock: true
  },
  {
    id: "navy-tribal-laser",
    name: "Navy Tribal Laser",
    price: 579.99,
    image: skullCapNavy,
    colors: ["Navy"],
    description: "Deep navy skull cap with cyan tribal laser patterns inspired by digital art and modern geometry. A perfect fusion of tradition and technology.",
    features: [
      "Tribal laser patterns",
      "Deep navy color",
      "Cyan accent details",
      "Geometric design",
      "Premium comfort"
    ],
    inStock: true
  }
];