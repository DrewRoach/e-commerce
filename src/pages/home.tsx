import './home.css'

const Home = ()  => {
  return (
    <section className="section_all bg-light" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title_all text-center">
                            <h1 className="font-weight-bold">Welcome To <span className="text-custom">Eous</span></h1>
                            <p className="section_subtitle mx-auto text-muted">Your Vision, Our Passion</p>
                            <div className="">
                                <i className=""></i>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row vertical_content_manage mt-5">
                    <div className="col-lg-6">
                        <div className="about_header_main mt-3">
                            <h4 className="about_heading text-capitalize font-weight-bold mt-4">Our Mission</h4>
                            <p className="text-muted mt-3">At Eous, our mission is to provide the finest eyewear
            that not only enhances your vision but also complements your
            style. We are dedicated to delivering high-quality products and
            exceptional customer service.</p>
                        </div>
                        <div className="about_header_main mt-3">
                            <h4 className="about_heading text-capitalize font-weight-bold mt-4">Our Vision</h4>
                            <p className="text-muted mt-3">Our vision is to be the premier destination for eyewear enthusiasts.
            We aim to create a seamless shopping experience where customers can
            find the perfect glasses to express their individuality and style.</p>
                        </div>
                    <div className="about_header_main mt-3">
                            <h4 className="about_heading text-capitalize font-weight-bold mt-4">Our Business Strategy</h4>
                            <p className="text-muted mt-3">Eous's strategy revolves around offering a curated selection
          of eyewear, from designer frames to prescription lenses. We prioritize
          quality, affordability, and style. Our customer-centric approach ensures
          that every purchase is a satisfying experience.</p>
                        </div>
                    </div>
              
                </div>

                {/* <div className="row mt-3">
                    <div className="col-lg-4">
                        <div className="about_content_box_all mt-3">
                            <div className="about_detail text-center">
                                <div className="about_icon">
                                    <i className="fas fa-pencil-alt"></i>
                                </div>
                                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">Creative Design</h5>
                                <p className="edu_desc mt-3 mb-0 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="about_content_box_all mt-3">
                            <div className="about_detail text-center">
                                <div className="about_icon">
                                    <i className="fab fa-angellist"></i>
                                </div>
                                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">We make Best Result</h5>
                                <p className="edu_desc mb-0 mt-3 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="about_content_box_all mt-3">
                            <div className="about_detail text-center">
                                <div className="about_icon">
                                    <i className="fas fa-paper-plane"></i>
                                </div>
                                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">best platform </h5>
                                <p className="edu_desc mb-0 mt-3 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
  );
}

export default Home;
