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
    id: '1',
    name: 'Elegant Floral Dress',
    description: 'Beautiful floral print dress perfect for any occasion. Made with premium fabric for ultimate comfort.',
    price: 1,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1562182856-e39faab686d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGRyZXNzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzMyMDQxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1562182856-e39faab686d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGRyZXNzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzMyMDQxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    category: 'Dresses',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    featured: true,
    badge: 'TEST',
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
    id: '9',
    name: 'Classic White T-Shirt',
    description: 'Premium quality white t-shirt made from soft cotton. A wardrobe essential for every style.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1648483098902-7af8f711498f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwdHNoaXJ0JTIwcHJvZHVjdCUyMHdoaXRlfGVufDF8fHx8MTc3MzI1MjE0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1648483098902-7af8f711498f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwdHNoaXJ0JTIwcHJvZHVjdCUyMHdoaXRlfGVufDF8fHx8MTc3MzI1MjE0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
  },
  {
    id: '10',
    name: 'Black Crew Neck T-Shirt',
    description: 'Classic black t-shirt with premium fabric. Perfect for layering or wearing solo.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1662103627854-ae7551d1eddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHRzaGlydCUyMGNsb3RoaW5nJTIwc3RvcmV8ZW58MXx8fHwxNzczMjUyMTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1662103627854-ae7551d1eddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHRzaGlydCUyMGNsb3RoaW5nJTIwc3RvcmV8ZW58MXx8fHwxNzczMjUyMTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
  },
  {
    id: '11',
    name: 'Graphic Print T-Shirt',
    description: 'Trendy graphic t-shirt with unique design. Express your style with this statement piece.',
    price: 34.99,
    originalPrice: 44.99,
    image: 'https://images.unsplash.com/photo-1759941279446-dea2722bca33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwdHNoaXJ0JTIwZmFzaGlvbiUyMGNhc3VhbHxlbnwxfHx8fDE3NzMyNTIxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1759941279446-dea2722bca33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwdHNoaXJ0JTIwZmFzaGlvbiUyMGNhc3VhbHxlbnwxfHx8fDE3NzMyNTIxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    badge: 'NEW',
  },
  {
    id: '12',
    name: 'Black Sleeveless Graphic Tee',
    description: 'Stylish sleeveless graphic t-shirt with modern design. Perfect for casual wear and workouts.',
    price: 39.99,
    image: 'figma:asset/7577d0d9562e8a65a15b88f6caeec9104670c878.png',
    images: [
      'figma:asset/7577d0d9562e8a65a15b88f6caeec9104670c878.png',
    ],
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
  },
  {
    id: '13',
    name: 'Sleeveless Surf Graphic Tee',
    description: 'Cool sleeveless t-shirts with surf-inspired graphics. Available in blue and terracotta colors. Ultimate comfort for casual beach vibes.',
    price: 44.99,
    image: 'figma:asset/b6b16327925b696e39d809e3b96c50a9443b05fa.png',
    images: [
      'figma:asset/b6b16327925b696e39d809e3b96c50a9443b05fa.png',
    ],
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
    badge: 'TRENDING',
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