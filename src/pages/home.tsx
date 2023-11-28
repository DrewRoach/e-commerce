import './home.css'
import {useNavigate} from 'react-router-dom';

const Home = ()  => {
    const navigate = useNavigate();
    const handleProducts = () => {
        navigate('/products');
      }
  return (
            <section id="home">
            <div className="home_page">
                <div className="home_img">
                    <img src="https://i.postimg.cc/t403yfn9/home2.jpg" alt="img" />
                </div>
                <div className="home_txt">
                    <h2>FALL - WINTER<br />Collection 2023</h2>
                    <div className="home_label">
                        <p>A specialist label creating luxury essentials. Ethically crafted<br />with an unwavering commitment to exceptional quality.</p>
                        <p>Your Vision, Our Passion</p>
                        <p>At Eous, our mission is to provide the finest eyewear <br />
                        that not only enhances your vision but also complements your <br />
                        style. We are dedicated to delivering high-quality products and <br />
                            exceptional customer service.</p>
                        <p>Our vision is to be the premier destination <br />for eyewear enthusiasts.
                            We aim to create a seamless <br />shopping experience where customers can
                            find<br />the perfect glasses to express their individuality and style.</p>
                        <p>Eous's strategy revolves around offering a curated selection <br />
                        of eyewear, from designer frames to prescription lenses. <br />We prioritize 
                        quality, affordability, and style. <br />Our customer-centric approach ensures
                        that every purchase <br />is a satisfying experience.</p>
                    </div>
                    <div className = "button" onClick = {handleProducts}><a href="#">SHOP NOW</a><div className='bx bx-right-arrow-alt'></div></div>
                    <div className="home_social_icons">
                        <a href="#"><i className='bx bxl-facebook'></i></a>
                        <a href="#"><i className='bx bxl-twitter'></i></a>
                        <a href="#"><i className='bx bxl-pinterest'></i></a>
                        <a href="#"><i className='bx bxl-instagram'></i></a>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default Home;
