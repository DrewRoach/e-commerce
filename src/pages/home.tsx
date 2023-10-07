import { PRODUCTS } from "../utils/products";
import { Product } from "../components/product";
const Home = () => {
  return (
    <div className="home-page">
      <header className="header">
        <div className="header-content">
          <h1>Welcome to Eous</h1>
          <p>Your Vision, Our Passion</p>
        </div>
      </header>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            At Eous, our mission is to provide the finest eyewear
            that not only enhances your vision but also complements your
            style. We are dedicated to delivering high-quality products and
            exceptional customer service.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            Our vision is to be the premier destination for eyewear enthusiasts.
            We aim to create a seamless shopping experience where customers can
            find the perfect glasses to express their individuality and style.
          </p>
        </div>
      </section>

      <section className="strategy">
        <h2>Our Business Strategy</h2>
        <p>
          Eous's strategy revolves around offering a curated selection
          of eyewear, from designer frames to prescription lenses. We prioritize
          quality, affordability, and style. Our customer-centric approach ensures
          that every purchase is a satisfying experience.
        </p>
      </section>

      <section className="customer-message">
        <h2>A Message to Our Customers</h2>
        <p>
          We want to thank you for choosing Eous as your eyewear
          provider. Your satisfaction is our top priority, and we are committed
          to helping you see the world with clarity and confidence. Explore our
          collection and find the perfect pair that reflects your personality.
          Welcome to a world of crystal-clear vision!
        </p>
      </section>
    <div className="productContainer">
      <h1 style={{gridColumn:"1/4", textAlign:"center"}}>Products</h1>
      {PRODUCTS.map((product) => {
        return (
            <Product {...product} />
        );
      })}
    </div>
    </div>
  );
};

export default Home;
