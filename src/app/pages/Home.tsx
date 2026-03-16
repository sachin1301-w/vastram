import { Link } from 'react-router';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Truck } from 'lucide-react';

export function Home() {
  const featuredProducts = products.filter((p) => p.featured);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
  };

  // Slideshow images
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1558452919-08ae4aea8e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBzdG9yZSUyMGJhbm5lcnxlbnwxfHx8fDE3NzMzMTUyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Discover Your Style',
      description: 'Shop the latest trends in fashion'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1683836513886-d1bb711ab1e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVuZHklMjBjYXN1YWwlMjBmYXNoaW9uJTIwY29sbGVjdGlvbnxlbnwxfHx8fDE3NzMzMTUyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Trendy Collections',
      description: 'Explore our exclusive fashion range'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1767334010488-83cdb8539273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcHBhcmVsJTIwZGlzcGxheXxlbnwxfHx8fDE3NzMzMTUyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Modern Apparel',
      description: 'Premium quality for every occasion'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1669207261271-a0041d4b0948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwY2xvdGhlcyUyMHNob3BwaW5nfGVufDF8fHx8MTc3MzMwMDMyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Stylish Shopping',
      description: 'Find your perfect outfit today'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1769981271695-bb3d766ee419?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZmFzaGlvbiUyMGJvdXRpcXVlfGVufDF8fHx8MTc3MzMxNTI0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Premium Boutique',
      description: 'Luxury fashion at your fingertips'
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slideshow */}
      <section className="relative overflow-hidden">
        <div className="slideshow-container">
          <Slider {...sliderSettings}>
            {slides.map((slide) => (
              <div key={slide.id} className="relative">
                <div className="relative h-[350px] md:h-[450px]">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                      <motion.h2 
                        className="text-3xl md:text-5xl mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        {slide.title}
                      </motion.h2>
                      <motion.p 
                        className="text-lg md:text-xl mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        {slide.description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <Link to="/products">
                          <Button size="lg" className="bg-amber-700 hover:bg-amber-800">
                            Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                          </Button>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl mb-5 tracking-tight bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Featured Products</h2>
            <p className="text-gray-600 text-lg tracking-wide">Discover our handpicked collection</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Link to="/products">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg">
                  View All Products
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="bg-amber-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </motion.div>
              <h3 className="text-xl mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive prices on all products</p>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={scaleIn}
            >
              <motion.div 
                className="bg-amber-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                <Truck className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free delivery on orders over ₹500</p>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="bg-amber-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </motion.div>
              <h3 className="text-xl mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment processing</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}