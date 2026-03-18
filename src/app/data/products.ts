import jenikaImg from 'figma:asset/b7ea70ff668c4a2f3ef964fefab21963c48c7b79.png';
import jenikaBrownImg from 'figma:asset/6d60ccc9b494b1ef9899365523fbf437ff8ee621.png';
import jenikaBrown2Img from 'figma:asset/56c1a12a60c7e8d9034c6d7ca105673231212d80.png';
import jenikaGrishaImg from 'figma:asset/05588751bae7fe874a429d78a6f15a366d4829cb.png';
import jenikaGrishaTealImg from 'figma:asset/9c8db5ad4c4a29347f3c5a9cb10de82930720c47.png';
import jenikaGrishaOliveImg from 'figma:asset/c03e6a3deced16e0dfc47cda78eed29ec58d0ef1.png';
import jenikaGrishaYellowImg from 'figma:asset/9ed3e1821e32ab2775d66221c6c25737776322f7.png';
import jenikaGrishaTeal2Img from 'figma:asset/e2001794d7a56cf42e3415786ab0201801e5e608.png';
import jenikaGrishaOlive2Img from 'figma:asset/8145d6a1dbe44b07389f3da88aed1a52dbbd926f.png';
import mayaPinkImg from 'figma:asset/e3ed058affa9eee0973b6ea9e88fea97fe1b7682.png';
import mayaLimeImg from 'figma:asset/0cb50fcbd05fb70c1b3e5c22fa422bae2a72fd2b.png';
import mayaMintImg from 'figma:asset/328b71262242e7ece3138136fd9c6fafc9249bae.png';
import midnightMoodImg from 'figma:asset/7c1eba473e1b6c72ddb4632d7931289a342661cc.png';
import soutoImg from 'figma:asset/8d172df20cd36fc44144ff608bb1eb90d23e0ae3.png';
import ritualImg from 'figma:asset/7549fd1b8740e4a2acb20122acc57d88e371f4a7.png';
import equalizeImg from 'figma:asset/e9fb0c8959d772e1f3c90d11ee3f4f51b28bdfd2.png';
import noiracentImg from 'figma:asset/3487590d473f83e0b4be06ae4271c2a37de91cd6.png';
import vixyImg from 'figma:asset/7577d0d9562e8a65a15b88f6caeec9104670c878.png';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  sizes: string[];
  inStock: boolean;
  featured?: boolean;
  badge?: string;
}

export const products: Product[] = [
  {
    id: '18',
    name: 'KAASHVI JENIKA Red Ethnic Suit',
    description: 'Gorgeous red ethnic suit from KAASHVI JENIKA collection with exquisite embroidery work. Features elegant V-neck design with intricate threadwork and sequin embellishments. Complete 3-piece set includes beautifully crafted kurta with embroidered sleeves, matching bottom, and dupatta. Premium fabric with comfortable fit. Perfect for festivals, weddings, parties, and traditional celebrations.',
    price: 754,
    originalPrice: 3999,
    image: jenikaImg,
    images: [
      jenikaImg,
    ],
    category: 'Dresses',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    badge: 'NEW',
  },
  {
    id: '19',
    name: 'KAASHVI JENIKA Chocolate Brown Ethnic Suit',
    description: 'Elegant chocolate brown ethnic suit from KAASHVI JENIKA collection with sophisticated pinstripe embroidery. Features classic V-neck design with delicate threadwork and floral embellishments. Complete 3-piece set includes beautifully tailored kurta with embroidered details, matching bottom, and dupatta. Premium quality fabric with comfortable fit. Perfect for casual gatherings, festivals, office parties, and traditional celebrations.',
    price: 754,
    originalPrice: 2999,
    image: jenikaBrownImg,
    images: [
      jenikaBrownImg,
    ],
    category: 'Dresses',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    badge: 'NEW',
  },
  {
    id: '20',
    name: 'KAASHVI JENIKA Dark Brown Ethnic Suit',
    description: 'Stylish dark brown ethnic suit from KAASHVI JENIKA collection with intricate embroidery and embellishments. Features elegant V-neck design with delicate threadwork and floral embroidery. Complete 3-piece set includes beautifully crafted kurta with embroidered sleeves, matching bottom, and dupatta. Premium fabric with comfortable fit. Perfect for festivals, weddings, parties, and traditional celebrations.',
    price: 754,
    originalPrice: 2999,
    image: jenikaBrown2Img,
    images: [
      jenikaBrown2Img,
    ],
    category: 'Dresses',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    badge: 'NEW',
  },
  {
    id: '21',
    name: 'KAASHVI JENIKA Grisha Ethnic Suit',
    description: 'Stylish Grisha ethnic suit from KAASHVI JENIKA collection with intricate embroidery and embellishments. Features elegant V-neck design with delicate threadwork and floral embroidery. Complete 3-piece set includes beautifully crafted kurta with embroidered sleeves, matching bottom, and dupatta. Premium fabric with comfortable fit. Perfect for festivals, weddings, parties, and traditional celebrations.',
    price: 754,
    originalPrice: 2999,
    image: jenikaGrishaImg,
    images: [
      jenikaGrishaImg,
    ],
    category: 'Dresses',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    badge: 'NEW',
  },
  {
    id: '22',
    name: 'KAASHVI JENIKA Grisha Teal Ethnic Suit',
    description: 'Stylish Grisha teal ethnic suit from KAASHVI JENIKA collection with intricate embroidery and embellishments. Features elegant V-neck design with delicate threadwork and floral embroidery. Complete 3-piece set includes beautifully crafted kurta with embroidered sleeves, matching bottom, and dupatta. Premium fabric with comfortable fit. Perfect for festivals, weddings, parties, and traditional celebrations.',
    price: 754,
    originalPrice: 2999,
    image: jenikaGrishaTealImg,
    images: [
      jenikaGrishaTealImg,
    ],
    category: 'Dresses',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    badge: 'NEW',
  },
  {
    id: '23',
    name: 'KAASHVI JENIKA Grisha Olive Ethnic Suit',
    description: 'Stylish Grisha olive ethnic suit from KAASHVI JENIKA collection with intricate embroidery and embellishments. Features elegant V-neck design with delicate threadwork and floral embroidery. Complete 3-piece set includes beautifully crafted kurta with embroidered sleeves, matching bottom, and dupatta. Premium fabric with comfortable fit. Perfect for festivals, weddings, parties, and traditional celebrations.',
    price: 754,
    originalPrice: 2999,
    image: jenikaGrishaOliveImg,
    images: [
      jenikaGrishaOliveImg,
    ],
    category: 'Dresses',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    badge: 'NEW',
  },
  {
    id: '24',
    name: 'KAASHVI JENIKA Grisha Yellow Ethnic Suit',
    description: 'Stylish Grisha yellow ethnic suit from KAASHVI JENIKA collection with intricate embroidery and embellishments. Features elegant V-neck design with delicate threadwork and floral embroidery. Complete 3-piece set includes beautifully crafted kurta with embroidered sleeves, matching bottom, and dupatta. Premium fabric with comfortable fit. Perfect for festivals, weddings, parties, and traditional celebrations.',
    price: 754,
    originalPrice: 2999,
    image: jenikaGrishaYellowImg,
    images: [
      jenikaGrishaYellowImg,
    ],
    category: 'Dresses',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    badge: 'NEW',
  },
  {
    id: '25',
    name: 'KAASHVI JENIKA Grisha Teal 2 Ethnic Suit',
    description: 'Stylish Grisha teal 2 ethnic suit from KAASHVI JENIKA collection with intricate embroidery and embellishments. Features elegant V-neck design with delicate threadwork and floral embroidery. Complete 3-piece set includes beautifully crafted kurta with embroidered sleeves, matching bottom, and dupatta. Premium fabric with comfortable fit. Perfect for festivals, weddings, parties, and traditional celebrations.',
    price: 754,
    originalPrice: 2999,
    image: jenikaGrishaTeal2Img,
    images: [
      jenikaGrishaTeal2Img,
    ],
    category: 'Dresses',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    badge: 'NEW',
  },
  {
    id: '26',
    name: 'KAASHVI JENIKA Grisha Olive 2 Ethnic Suit',
    description: 'Stylish Grisha olive 2 ethnic suit from KAASHVI JENIKA collection with intricate embroidery and embellishments. Features elegant V-neck design with delicate threadwork and floral embroidery. Complete 3-piece set includes beautifully crafted kurta with embroidered sleeves, matching bottom, and dupatta. Premium fabric with comfortable fit. Perfect for festivals, weddings, parties, and traditional celebrations.',
    price: 754,
    originalPrice: 2999,
    image: jenikaGrishaOlive2Img,
    images: [
      jenikaGrishaOlive2Img,
    ],
    category: 'Dresses',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    badge: 'NEW',
  },
  {
    id: '27',
    name: 'KAASHVI MAYA Pink Ethnic Suit',
    description: 'Beautiful pink ethnic suit from KAASHVI MAYA collection with elegant white embroidery. Features classic V-neck design with delicate threadwork and floral embellishments on the chest. Complete 3-piece set includes beautifully crafted kurta with 3/4 sleeves, matching straight pants, and dupatta. Premium quality fabric with comfortable fit. Perfect for casual gatherings, festivals, office parties, and traditional celebrations.',
    price: 754,
    originalPrice: 2999,
    image: mayaPinkImg,
    images: [
      mayaPinkImg,
    ],
    category: 'Dresses',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    badge: 'NEW',
  },
  {
    id: '28',
    name: 'KAASHVI MAYA Lime Ethnic Suit',
    description: 'Beautiful lime ethnic suit from KAASHVI MAYA collection with elegant white embroidery. Features classic V-neck design with delicate threadwork and floral embellishments on the chest. Complete 3-piece set includes beautifully crafted kurta with 3/4 sleeves, matching straight pants, and dupatta. Premium quality fabric with comfortable fit. Perfect for casual gatherings, festivals, office parties, and traditional celebrations.',
    price: 754,
    originalPrice: 2999,
    image: mayaLimeImg,
    images: [
      mayaLimeImg,
    ],
    category: 'Dresses',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    badge: 'NEW',
  },
  {
    id: '29',
    name: 'KAASHVI MAYA Mint Ethnic Suit',
    description: 'Beautiful mint ethnic suit from KAASHVI MAYA collection with elegant white embroidery. Features classic V-neck design with delicate threadwork and floral embellishments on the chest. Complete 3-piece set includes beautifully crafted kurta with 3/4 sleeves, matching straight pants, and dupatta. Premium quality fabric with comfortable fit. Perfect for casual gatherings, festivals, office parties, and traditional celebrations.',
    price: 754,
    originalPrice: 2999,
    image: mayaMintImg,
    images: [
      mayaMintImg,
    ],
    category: 'Dresses',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    badge: 'NEW',
  },
  {
    id: '2',
    name: 'Casual Comfort Shirt',
    description: 'Lightweight and breathable casual shirt. Perfect for everyday wear with a modern fit.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1651083567132-355325837b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzaGlydCUyMGZhc2hpb258ZW58MXx8fHwxNzczMjA4MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1651083567132-355325837b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzaGlydCUyMGZhc2hpb258ZW58MXx8fHwxNzczMjA4MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    category: 'Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
  },
  {
    id: '4',
    name: 'Winter Puffer Jacket',
    description: 'Warm and stylish winter jacket with premium insulation. Water-resistant and windproof.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1706765779494-2705542ebe74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBqYWNrZXQlMjBmYXNoaW9ufGVufDF8fHx8MTc3MzIzMjExOHww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1706765779494-2705542ebe74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBqYWNrZXQlMjBmYXNoaW9ufGVufDF8fHx8MTc3MzIzMjExOHww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    category: 'Outerwear',
    sizes: ['M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
  },
  {
    id: '5',
    name: 'Designer Handbag',
    description: 'Luxury designer handbag with premium leather finish. Spacious interior with multiple compartments.',
    price: 299.99,
    originalPrice: 499.99,
    image: 'https://images.unsplash.com/photo-1758171692659-024183c2c272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGhhbmRiYWclMjBsdXh1cnl8ZW58MXx8fHwxNzczMTU1OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1758171692659-024183c2c272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGhhbmRiYWclMjBsdXh1cnl8ZW58MXx8fHwxNzczMTU1OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    category: 'Accessories',
    sizes: ['One Size'],
    inStock: true,
    badge: 'SALE',
  },
  {
    id: '8',
    name: 'Classic Denim Jeans',
    description: 'Timeless denim jeans with a perfect fit. Durable and comfortable for everyday wear.',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1579664531470-ac357f8f8e2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBzdG9yZSUyMHByb2R1Y3RzfGVufDF8fHx8MTc3MzIyNDgyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1579664531470-ac357f8f8e2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBzdG9yZSUyMHByb2R1Y3RzfGVufDF8fHx8MTc3MzIyNDgyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    category: 'Bottoms',
    sizes: ['28', '30', '32', '34', '36'],
    inStock: true,
  },
  {
    id: '30',
    name: 'MIDNIGHT MOOD Sleeveless T-Shirt',
    description: 'Stylish white sleeveless t-shirt with bold "MIDNIGHT MOOD" graphic print and artistic design elements. Features modern typography with geometric patterns and eye-catching graphics. Premium quality cotton fabric for all-day comfort. Perfect for casual outings, gym wear, summer style, and streetwear fashion. Comfortable sleeveless design ideal for warm weather.',
    price: 400,
    originalPrice: 799,
    image: midnightMoodImg,
    images: [
      midnightMoodImg,
    ],
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    badge: 'NEW',
  },
  {
    id: '31',
    name: 'SOUTO Sleeveless T-Shirt',
    description: 'Stylish brown sleeveless t-shirt with bold "SOUTO" neon graphic print and artistic design elements. Features modern typography with geometric patterns and eye-catching graphics. Premium quality cotton fabric for all-day comfort. Perfect for casual outings, gym wear, summer style, and streetwear fashion. Comfortable sleeveless design ideal for warm weather.',
    price: 400,
    originalPrice: 799,
    image: soutoImg,
    images: [
      soutoImg,
    ],
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    badge: 'NEW',
  },
  {
    id: '32',
    name: 'RITUAL Sleeveless T-Shirt',
    description: 'Stylish teal blue-green sleeveless t-shirt with bold "RITUAL" graphic print and "TREE WITHOUT BLOSSOMS" text. Features modern typography with artistic geometric patterns and eye-catching graphics. Premium quality cotton fabric for all-day comfort. Perfect for casual outings, gym wear, summer style, and streetwear fashion. Comfortable sleeveless design ideal for warm weather.',
    price: 400,
    originalPrice: 799,
    image: ritualImg,
    images: [
      ritualImg,
    ],
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    badge: 'NEW',
  },
  {
    id: '33',
    name: 'EQUALIZE Sleeveless T-Shirt',
    description: 'Stylish rust terracotta sleeveless t-shirt with elegant "Equalize Freedom Original" embossed text and artistic graphic design patch. Features modern typography with geometric patterns and eye-catching graphics. Premium quality cotton fabric for all-day comfort. Perfect for casual outings, gym wear, summer style, and streetwear fashion. Comfortable sleeveless design ideal for warm weather.',
    price: 400,
    originalPrice: 799,
    image: equalizeImg,
    images: [
      equalizeImg,
    ],
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    badge: 'NEW',
  },
  {
    id: '34',
    name: 'NOIRACENT Sleeveless T-Shirt',
    description: 'Stylish black sleeveless t-shirt with bold "NOIRACENT" graphic print and artistic design elements. Features modern typography with geometric patterns and eye-catching graphics. Premium quality cotton fabric for all-day comfort. Perfect for casual outings, gym wear, summer style, and streetwear fashion. Comfortable sleeveless design ideal for warm weather.',
    price: 400,
    originalPrice: 799,
    image: noiracentImg,
    images: [
      noiracentImg,
    ],
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    badge: 'NEW',
  },
  {
    id: '35',
    name: 'VIXY Sleeveless T-Shirt',
    description: 'Stylish black sleeveless t-shirt with bold "VIXY" graphic print and artistic design elements. Features modern typography with geometric patterns and eye-catching graphics. Premium quality cotton fabric for all-day comfort. Perfect for casual outings, gym wear, summer style, and streetwear fashion. Comfortable sleeveless design ideal for warm weather.',
    price: 400,
    originalPrice: 799,
    image: vixyImg,
    images: [
      vixyImg,
    ],
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    badge: 'NEW',
  },
];

export const categories = [
  'All',
  'Dresses',
  'Shirts',
  'T-Shirts',
  'Outerwear',
  'Accessories',
  'Bottoms',
];