
import Image from 'next/image'

export default function Home() {       
  return (
    <main className="">
      <div id="preloader">
    <div className="loader_line" />
  </div>
  <div className="elisc_tm_all_wrap" data-magic-cursor="show">
    <div className="dodo_tm_one_page_wrapper">
      <div className="elisc_tm_topbar">
        <div className="topbar_inner">
          <div className="logo" data-type="image">
            <a className="image" href="#">
                <Image
                        src="/img/logo/logo.png"
                        alt="Picture"
                        fill={true}
                        className="object-cover"
                />
             {/* <img src="img/logo/logo.png" alt="" />*/}
            </a>
            <a className="text" href="#">
              R.Elisc
            </a>
          </div>
          <div className="trigger">
            <div className="hamburger hamburger--slider">
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="elisc_tm_mobile_menu">
        <div className="inner">
          <div className="wrapper">
            <div className="avatar">
              <div className="image" data-img-url="/img/about/1.jpg" />
            </div>
            <div className="menu_list">
              <ul className="anchor_nav">
                <li className="current">
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#service">Services</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#news">Blog</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="social">
              <ul>
                <li>
                  <a href="#">
                  {/*  <img
                      className="svg"
                      src="img/svg/social/facebook.svg"
                      alt=""
                    /> */}
                    <Image
                        src="/img/svg/social/facebook.svg"
                        alt="Picture"
                        fill={true}
                        className="object-cover"
                />
                  </a>
                </li>
                <li>
                  <a href="#">
                   <Image
                        src="/img/svg/social/twitter.svg"
                        alt="Picture"
                        fill={true}
                        className="object-cover"
                />
                  </a>
                </li>
                <li>
                  <a href="#">
                   <Image
                        src="/img/svg/social/instagram.svg"
                        alt="Picture"
                        fill={true}
                        className="object-cover"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                  <Image
                        src="/img/svg/social/dribbble.svg"
                        alt="Picture"
                        fill={true}
                        className="object-cover"
                    />
                   
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                        src="/img/svg/social/tik-tok.svg"
                        alt="Picture"
                        fill={true}
                        className="object-cover"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="copyright">
              <p>Copyright © 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className="elisc_tm_sidebar">
        <div className="sidebar_inner">
          <div className="author">
            <div className="image">
              
              <Image
                        src="/img/thumbs/1-1.jpg"
                        alt="Picture"
                        width="10"
                        height="10"
                    />
              <div className="main" data-img-url="/img/about/1.jpg" />
            </div>
            <div className="name">
              <h3>
                <span>
                  Robert Elisc<span className="back">Robert Elisc</span>
                </span>
              </h3>
            </div>
          </div>
          <div className="menu scrollable">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#news">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="copyright">
            <div className="social">
              <ul>
                <li>
                  <a href="#">
                    <i className="icon-facebook-1" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-twitter-1" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-linkedin-1" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="text">
              <p>Copyright © 2023 Robert Elisc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="elisc_tm_mainpart">
        <div className="mainpart_inner">
          <div className="elisc_tm_section animated" id="home">
            <div className="elisc_tm_home">
              <div className="tm_content">
                <div className="details">
                  <div className="left">
                    <div className="title">
                      <h3>
                        Hi, I'm <span className="blueColor">Elisc!</span>
                      </h3>
                      <h3>
                        <span className="cd-headline rotate-1">
                          <span className="blc">Creative</span>
                          <span className="cd-words-wrapper">
                            <b className="is-visible">Designer</b>
                            <b>Coder</b>
                            <b>Player</b>
                          </span>
                        </span>
                      </h3>
                      <h3>Based in Florida</h3>
                    </div>
                    <div className="subtitle">
                      <p>
                        I'm a Florida based web designer &amp; front‑end
                        developer with{" "}
                        <span className="blueColor">10+ years</span> of
                        experience
                      </p>
                    </div>
                    <div className="buttons">
                      <div className="elisc_tm_button">
                        <a className="anchor" href="#portfolio">
                          Got a project?
                        </a>
                      </div>
                      <div className="elisc_tm_button" data-style="border">
                        <a className="anchor" href="#contact">
                          Let's talk
                        </a>
                      </div>
                    </div>
                    <div className="info">
                      <ul>
                        <li>
                          <a href="tel:+77 022 444 05 05">+77 022 444 05 05</a>
                        </li>
                        <li>
                          <a href="https://marketifythemes.net/cdn-cgi/l/email-protection#7c0f090c0c130e083c1910150f1f521f1311">
                            <span
                              className="__cf_email__"
                              data-cfemail="285b5d5858475a5c684d44415b4b064b4745"
                            >
                             support@elisc.com
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="href_location" href="#">
                            Ave Street Avenue, New York
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="right">
                  
                    <Image
                        src="/img/about/2.png"
                        alt="Picture"
                        width='415'
                        height='472'
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elisc_tm_section" id="about">
            <div className="elisc_tm_about">
              <div className="tm_content">
                <div className="elisc_tm_biography">
                  <div className="left">
                    <div className="title">
                      <span className="mini">- Nice to meet you!</span>
                      <h3 className="name">Robert Elisc</h3>
                      <span className="job">
                        <span className="cd-headline rotate-1">
                          <span className="blc">Web designer &amp;</span>
                          <span className="cd-words-wrapper">
                            <b className="is-visible">Developer</b>
                            <b>Coder</b>
                            <b>Player</b>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="elisc_tm_button">
                      <a className="anchor" href="#portfolio">
                        Got a project?
                      </a>
                    </div>
                  </div>
                  <div className="right">
                    <div className="text">
                      <p>
                        Hello there! My name is{" "}
                        <span className="yellowColor">Robert Elisc</span>. I am
                        a web designer &amp; developer, and I'm very passionate
                        and dedicated to my work.
                      </p>
                      <p>
                        With 20 years experience as a professional a graphic
                        designer, I have acquired the skills and knowledge
                        necessary to make your project a success. I enjoy every
                        step of the design process, from discussion and
                        collaboration.
                      </p>
                    </div>
                    <div className="info">
                      <ul>
                        <li>
                          <span>Age</span>
                          <span>25</span>
                        </li>
                        <li>
                          <span>Born In</span>
                          <span>
                            <a className="href_location" href="#">
                              Florida, USA
                            </a>
                          </span>
                        </li>
                        <li>
                          <span>Mail</span>
                          <span>
                            <a href="https://marketifythemes.net/cdn-cgi/l/email-protection#6a191f1a1a05181e2a0f0603190944090507">
                              <span
                                className="__cf_email__"
                                data-cfemail="c0b3b5b0b0afb2b480a5aca9b3a3eea3afad"
                              >
                                support@elisc.com
                              </span>
                            </a>
                          </span>
                        </li>
                        <li>
                          <span>Phone</span>
                          <span>
                            <a href="tel:+77 022 444 05 05">
                              +77 022 444 05 05
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="elisc_tm_counter">
                  <ul>
                    <li>
                      <div className="list_inner">
                        <h3>10+</h3>
                        <span>Years of Experience</span>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <h3>50+</h3>
                        <span>Projects Completed</span>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <h3>30+</h3>
                        <span>Happy Clients</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="elisc_tm_experience">
                <div className="tm_content">
                  <div className="elisc_tm_title">
                    <span>- Experience</span>
                    <h3>Everything about me!</h3>
                  </div>
                  <div className="list">
                    <ul>
                      <li>
                       
                         <Image
                        src="/img/experience/1.jpg"
                        alt="Picture"
                        fill={true}
                        className="object-cover popup_image"
                    />
                        <div className="list_inner">
                          <div className="short">
                            <div className="job">
                              <span className="yellowColor">
                                -2018 - Present
                              </span>
                              <h3>Web Developer</h3>
                            </div>
                            <div className="place">
                              <span>-Envato Market</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Website development is the process of building,
                              programming, coding and maintaining websites and
                              web applications.
                            </p>
                          </div>
                          <a className="elisc_tm_full_link" href="#" />
                          <div className="hidden_details">
                            <div className="descriptions">
                              <p>
                                Elisc is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p>
                                In today’s digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user’s first impression relates to web design.
                                It’s also why web design services can have an
                                immense impact on your company’s bottom line.
                              </p>
                              <p>
                                That’s why more companies are not only
                                reevaluating their website’s design but also
                                partnering with Elisc, the web design agency
                                that’s driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Image
                        src="/img/experience/2.jpg"
                        alt="Picture"
                       fill={true}
                       className="object-cover popup_image"
                    />
                        <div className="list_inner">
                          <div className="short">
                            <div className="job">
                              <span className="yellowColor">-2016 - 2018</span>
                              <h3>Senior Designer</h3>
                            </div>
                            <div className="place">
                              <span>-ABC Studio</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Website development is the process of building,
                              programming, coding and maintaining websites and
                              web applications.
                            </p>
                          </div>
                          <a className="elisc_tm_full_link" href="#" />
                          <div className="hidden_details">
                            <div className="descriptions">
                              <p>
                                Elisc is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p>
                                In today’s digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user’s first impression relates to web design.
                                It’s also why web design services can have an
                                immense impact on your company’s bottom line.
                              </p>
                              <p>
                                That’s why more companies are not only
                                reevaluating their website’s design but also
                                partnering with Elisc, the web design agency
                                that’s driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        
                       <Image
                        src="/img/experience/3.jpg"
                        alt="Picture"
                        fill={true}
                        className="object-cover popup_image"
                    />
                        <div className="list_inner">
                          <div className="short">
                            <div className="job">
                              <span className="yellowColor">-2015 - 2016</span>
                              <h3>UX Designer</h3>
                            </div>
                            <div className="place">
                              <span>-Colorlib</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Website development is the process of building,
                              programming, coding and maintaining websites and
                              web applications.
                            </p>
                          </div>
                          <a className="elisc_tm_full_link" href="#" />
                          <div className="hidden_details">
                            <div className="descriptions">
                              <p>
                                Elisc is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p>
                                In today’s digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user’s first impression relates to web design.
                                It’s also why web design services can have an
                                immense impact on your company’s bottom line.
                              </p>
                              <p>
                                That’s why more companies are not only
                                reevaluating their website’s design but also
                                partnering with Elisc, the web design agency
                                that’s driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                      
                        <Image
                        src="/img/experience/4.jpg"
                        alt="Picture"
                        fill={true}
                        className="object-cover popup_image"
                    />
                        <div className="list_inner">
                          <div className="short">
                            <div className="job">
                              <span className="yellowColor">-2013 - 2015</span>
                              <h3>Freelancer</h3>
                            </div>
                            <div className="place">
                              <span>-Vivaco Corp.</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Website development is the process of building,
                              programming, coding and maintaining websites and
                              web applications.
                            </p>
                          </div>
                          <a className="elisc_tm_full_link" href="#" />
                          <div className="hidden_details">
                            <div className="descriptions">
                              <p>
                                Elisc is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p>
                                In today’s digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user’s first impression relates to web design.
                                It’s also why web design services can have an
                                immense impact on your company’s bottom line.
                              </p>
                              <p>
                                That’s why more companies are not only
                                reevaluating their website’s design but also
                                partnering with Elisc, the web design agency
                                that’s driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elisc_tm_section" id="service">
            <div className="elisc_tm_services">
              <div className="tm_content">
                <div className="elisc_tm_service_title">
                  <div className="elisc_tm_title">
                    <span>- Services</span>
                    <h3>My Services</h3>
                  </div>
                  <a href="https://marketifythemes.net/cdn-cgi/l/email-protection#c0b3b5b0b0afb2b480a5aca9b3a3eea3afad">
                    <span
                      className="__cf_email__"
                      data-cfemail="097a7c7979667b7d496c65607a6a276a6664"
                    >
                      support@elisc.com
                    </span>
                  </a>
                </div>
                <div className="service_list">
                  <ul>
                    <li>
                   
                      <Image
                        src="/img/service/2.jpg"
                        alt="Picture"
                        fill={true}
                        className="object-cover popup_image"
                    />
                      <div className="list_inner">
                        <div className="details">
                          <div className="title">
                            <span>01</span>
                            <h3>Web Design</h3>
                          </div>
                          <div className="text">
                            <p>
                              Web development is the process of building,
                              programming...
                            </p>
                          </div>
                          <div className="elisc_tm_read_more">
                            <a href="#">
                              Read More
                              <span>
                                <Image
                                    src="/img/svg/rightArrow.svg"
                                    alt="Picture"
                                    fill={true}
                        className="object-cover popup_image"
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                        <a className="elisc_tm_full_link" href="#" />
                        <div className="hidden_details">
                          <div className="descriptions">
                            <p>
                              Elisc is a leading web design agency with an
                              award-winning design team that creates innovative,
                              effective websites that capture your brand,
                              improve your conversion rates, and maximize your
                              revenue to help grow your business and achieve
                              your goals.
                            </p>
                            <p>
                              In today’s digital world, your website is the
                              first interaction consumers have with your
                              business. That's why almost 95 percent of a user’s
                              first impression relates to web design. It’s also
                              why web design services can have an immense impact
                              on your company’s bottom line.
                            </p>
                            <p>
                              That’s why more companies are not only
                              reevaluating their website’s design but also
                              partnering with Elisc, the web design agency
                              that’s driven more than $2.4 billion in revenue
                              for its clients. With over 50 web design awards
                              under our belt, we're confident we can design a
                              custom website that drives sales for your unique
                              business.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                    
                      <Image
                                    src="/img/service/3.jpg"
                                    alt="Picture"
                                    fill={true}
                        className="object-cover popup_image"
                                />
                      <div className="list_inner">
                        <div className="details">
                          <div className="title">
                            <span>02</span>
                            <h3>UI/UX Design</h3>
                          </div>
                          <div className="text">
                            <p>
                              Web development is the process of building,
                              programming...
                            </p>
                          </div>
                          <div className="elisc_tm_read_more">
                            <a href="#">
                              Read More
                              <span>
                             <Image
                                    src="/img/svg/rightArrow.svg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover popup_image"
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                        <a className="elisc_tm_full_link" href="#" />
                        <div className="hidden_details">
                          <div className="descriptions">
                            <p>
                              Elisc is a leading web design agency with an
                              award-winning design team that creates innovative,
                              effective websites that capture your brand,
                              improve your conversion rates, and maximize your
                              revenue to help grow your business and achieve
                              your goals.
                            </p>
                            <p>
                              In today’s digital world, your website is the
                              first interaction consumers have with your
                              business. That's why almost 95 percent of a user’s
                              first impression relates to web design. It’s also
                              why web design services can have an immense impact
                              on your company’s bottom line.
                            </p>
                            <p>
                              That’s why more companies are not only
                              reevaluating their website’s design but also
                              partnering with Elisc, the web design agency
                              that’s driven more than $2.4 billion in revenue
                              for its clients. With over 50 web design awards
                              under our belt, we're confident we can design a
                              custom website that drives sales for your unique
                              business.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                     
                      <Image
                                    src="/img/service/4.jpg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover popup_image"
                                />
                      <div className="list_inner">
                        <div className="details">
                          <div className="title">
                            <span>03</span>
                            <h3>Mobile Application</h3>
                          </div>
                          <div className="text">
                            <p>
                              Web development is the process of building,
                              programming...
                            </p>
                          </div>
                          <div className="elisc_tm_read_more">
                            <a href="#">
                              Read More
                              <span>
                             <Image
                                    src="/img/svg/rightArrow.svg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover popup_image"
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                        <a className="elisc_tm_full_link" href="#" />
                        <div className="hidden_details">
                          <div className="descriptions">
                            <p>
                              Elisc is a leading web design agency with an
                              award-winning design team that creates innovative,
                              effective websites that capture your brand,
                              improve your conversion rates, and maximize your
                              revenue to help grow your business and achieve
                              your goals.
                            </p>
                            <p>
                              In today’s digital world, your website is the
                              first interaction consumers have with your
                              business. That's why almost 95 percent of a user’s
                              first impression relates to web design. It’s also
                              why web design services can have an immense impact
                              on your company’s bottom line.
                            </p>
                            <p>
                              That’s why more companies are not only
                              reevaluating their website’s design but also
                              partnering with Elisc, the web design agency
                              that’s driven more than $2.4 billion in revenue
                              for its clients. With over 50 web design awards
                              under our belt, we're confident we can design a
                              custom website that drives sales for your unique
                              business.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                  
                        <Image
                                    src="/img/service/5.jpg"
                                    alt="Picture"
                                    fill={true}
                        className="object-cover popup_image"
                                />
                      <div className="list_inner">
                        <div className="details">
                          <div className="title">
                            <span>04</span>
                            <h3>User Research</h3>
                          </div>
                          <div className="text">
                            <p>
                              Web development is the process of building,
                              programming...
                            </p>
                          </div>
                          <div className="elisc_tm_read_more">
                            <a href="#">
                              Read More
                              <span>
                              
                                 <Image
                                    src="/img/svg/rightArrow.svg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover popup_image"
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                        <a className="elisc_tm_full_link" href="#" />
                        <div className="hidden_details">
                          <div className="descriptions">
                            <p>
                              Elisc is a leading web design agency with an
                              award-winning design team that creates innovative,
                              effective websites that capture your brand,
                              improve your conversion rates, and maximize your
                              revenue to help grow your business and achieve
                              your goals.
                            </p>
                            <p>
                              In today’s digital world, your website is the
                              first interaction consumers have with your
                              business. That's why almost 95 percent of a user’s
                              first impression relates to web design. It’s also
                              why web design services can have an immense impact
                              on your company’s bottom line.
                            </p>
                            <p>
                              That’s why more companies are not only
                              reevaluating their website’s design but also
                              partnering with Elisc, the web design agency
                              that’s driven more than $2.4 billion in revenue
                              for its clients. With over 50 web design awards
                              under our belt, we're confident we can design a
                              custom website that drives sales for your unique
                              business.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                   
                       <Image
                                    src="/img/service/6.jpg"
                                    alt="Picture"
                                    fill={true}
                        className="object-cover popup_image"
                                />
                      <div className="list_inner">
                        <div className="details">
                          <div className="title">
                            <span>05</span>
                            <h3>Animation</h3>
                          </div>
                          <div className="text">
                            <p>
                              Web development is the process of building,
                              programming...
                            </p>
                          </div>
                          <div className="elisc_tm_read_more">
                            <a href="#">
                              Read More
                              <span>
                              
                       <Image
                                    src="/img/svg/rightArrow.svg"
                                    alt="Picture"
                                    fill={true}
                        className="object-cover popup_image"
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                        <a className="elisc_tm_full_link" href="#" />
                        <div className="hidden_details">
                          <div className="descriptions">
                            <p>
                              Elisc is a leading web design agency with an
                              award-winning design team that creates innovative,
                              effective websites that capture your brand,
                              improve your conversion rates, and maximize your
                              revenue to help grow your business and achieve
                              your goals.
                            </p>
                            <p>
                              In today’s digital world, your website is the
                              first interaction consumers have with your
                              business. That's why almost 95 percent of a user’s
                              first impression relates to web design. It’s also
                              why web design services can have an immense impact
                              on your company’s bottom line.
                            </p>
                            <p>
                              That’s why more companies are not only
                              reevaluating their website’s design but also
                              partnering with Elisc, the web design agency
                              that’s driven more than $2.4 billion in revenue
                              for its clients. With over 50 web design awards
                              under our belt, we're confident we can design a
                              custom website that drives sales for your unique
                              business.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                    
                      <Image
                                    src="/img/service/7.jpg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover popup_image"
                                />
                      <div className="list_inner">
                        <div className="details">
                          <div className="title">
                            <span>06</span>
                            <h3>Game Development</h3>
                          </div>
                          <div className="text">
                            <p>
                              Web development is the process of building,
                              programming...
                            </p>
                          </div>
                          <div className="elisc_tm_read_more">
                            <a href="#">
                              Read More
                              <span>
                            
                                 <Image
                                    src="/img/svg/rightArrow.svg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover popup_image"
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                        <a className="elisc_tm_full_link" href="#" />
                        <div className="hidden_details">
                          <div className="descriptions">
                            <p>
                              Elisc is a leading web design agency with an
                              award-winning design team that creates innovative,
                              effective websites that capture your brand,
                              improve your conversion rates, and maximize your
                              revenue to help grow your business and achieve
                              your goals.
                            </p>
                            <p>
                              In today’s digital world, your website is the
                              first interaction consumers have with your
                              business. That's why almost 95 percent of a user’s
                              first impression relates to web design. It’s also
                              why web design services can have an immense impact
                              on your company’s bottom line.
                            </p>
                            <p>
                              That’s why more companies are not only
                              reevaluating their website’s design but also
                              partnering with Elisc, the web design agency
                              that’s driven more than $2.4 billion in revenue
                              for its clients. With over 50 web design awards
                              under our belt, we're confident we can design a
                              custom website that drives sales for your unique
                              business.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="elisc_tm_video">
              
                   <Image
                                    src="/img/thumbs/4-2.jpg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover placeholder"
                                />
                  <div className="image" data-img-url="/img/service/1.jpg" />
                  <div className="overlay" />
                  <span className="play">
                    
                    <Image
                                    src="/img/svg/play.svg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover play"
                                />
                  </span>
                  <div className="text">
                    <h3>Intro Video</h3>
                  </div>
                  <a
                    className="elisc_tm_full_link popup-youtube"
                    href="https://www.youtube.com/watch?v=7e90gBu4pas"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="elisc_tm_section" id="portfolio">
            <div className="elisc_tm_portfolio">
              <div className="tm_content">
                <div className="elisc_tm_portfolio_title">
                  <div className="elisc_tm_title">
                    <span>- Projects</span>
                    <h3>Recent completed works</h3>
                  </div>
                  <div className="buttons">
                    <a className="prev_button" href="#">
                     
                      <Image
                                    src="/img/svg/prev.svg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover play"
                                />
                    </a>
                    <a className="next_button" href="#">
                     
                      <Image
                                    src="/img/svg/next.svg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover play"
                                />
                    </a>
                  </div>
                </div>
                <div className="portfolio_list">
                  <ul className="owl-carousel gallery_zoom">
                    <li>
                      <div className="list_inner">
                        <div className="image">
                        
                          <Image
                                    src="/img/thumbs/31-36.jpg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover"
                                />
                          <div
                            className="main"
                            data-img-url="/img/portfolio/1.jpg"
                          />
                          <a
                            className="elisc_tm_full_link popup-youtube"
                            href="https://www.youtube.com/watch?v=7e90gBu4pas"
                          />
                        </div>
                        <div className="details">
                          <span className="category">
                            <a href="#">Youtube</a>
                          </span>
                          <h3 className="title">
                            <a
                              className="line_effect popup-youtube"
                              href="https://www.youtube.com/watch?v=7e90gBu4pas"
                            >
                              New Technology
                            </a>
                          </h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <div className="image">
                        
                          <Image
                                    src="/img/thumbs/31-36.jpg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover"
                                />
                          <div
                            className="main"
                            data-img-url="/img/portfolio/2.jpg"
                          />
                          <a
                            className="elisc_tm_full_link popup-vimeo"
                            href="https://vimeo.com/337293658"
                          />
                        </div>
                        <div className="details">
                          <span className="category">
                            <a href="#">Vimeo</a>
                          </span>
                          <h3 className="title">
                            <a
                              className="line_effect popup-vimeo"
                              href="https://vimeo.com/337293658"
                            >
                              Firogo Majestic Ltd.
                            </a>
                          </h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <div className="image">
                         
                          <Image
                                    src="/img/thumbs/31-36.jpg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover"
                                />
                          <div
                            className="main"
                            data-img-url="/img/portfolio/3.jpg"
                          />
                          <a
                            className="elisc_tm_full_link soundcloude_link mfp-iframe audio"
                            href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                          />
                        </div>
                        <div className="details">
                          <span className="category">
                            <a href="#">Soundcloud</a>
                          </span>
                          <h3 className="title">
                            <a
                              className="line_effect soundcloude_link mfp-iframe audio"
                              href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                            >
                              Creative Building
                            </a>
                          </h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <div className="image">
                        
                          <Image
                                    src="/img/thumbs/31-36.jpg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover"
                                />
                          <div
                            className="main"
                            data-img-url="/img/portfolio/4.jpg"
                          />
                          <a
                            className="elisc_tm_full_link portfolio_popup"
                            href="#"
                          />
                        </div>
                        <div className="details">
                          <span className="category">
                            <a href="#">Modalbox</a>
                          </span>
                          <h3 className="title">
                            <a className="line_effect portfolio_popup" href="#">
                              Beautiful Boat
                            </a>
                          </h3>
                        </div>
                      </div>
                      <div className="hidden_content_portfolio">
                        <div className="popup_details">
                          <div className="main_details">
                            <div className="textbox">
                              <p>
                                We live in a world where we need to move quickly
                                and iterate on our ideas as flexibly as
                                possible. Building mockups strikes the ideal
                                balance ease of modification. Building mockups
                                strikes the ideal balance ease of modification.
                              </p>
                              <p>
                                Mockups are useful both for the creative phase
                                of the project - for instance when you're trying
                                to figure out your user flows or the proper
                                visual hierarchy - and the production phase when
                                they phase when they will represent the target
                                product. Building mockups strikes the ideal
                                balance ease of modification.
                              </p>
                            </div>
                            <div className="detailbox">
                              <ul>
                                <li>
                                  <span className="first">Client</span>
                                  <span>Alvaro Morata</span>
                                </li>
                                <li>
                                  <span className="first">Category</span>
                                  <span>
                                    <a href="#">Modalbox</a>
                                  </span>
                                </li>
                                <li>
                                  <span className="first">Date</span>
                                  <span>April 10, 2023</span>
                                </li>
                                <li>
                                  <span className="first">Share</span>
                                  <ul className="share">
                                    <li>
                                      <a href="#">
                                <Image
                                    src="/img/svg/social/facebook.svg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover svg"
                                />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                   
                                        <Image
                                    src="/img/svg/social/twitter.svg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover svg"
                                />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                     
                                        <Image
                                    src="/img/svg/social/instagram.svg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover svg"
                                />
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="additional_images">
                            <ul>
                              <li>
                                <div className="list_inner">
                                  <div className="my_image">
                                  
                                    
                                    <Image
                                    src="/img/thumbs/4-2.jpg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover my_image"
                                />
                                    <div
                                      className="main"
                                      data-img-url="/img/portfolio/5.jpg"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="list_inner">
                                  <div className="my_image">
                                   
                                    <Image
                                    src="/img/thumbs/4-2.jpg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover my_image"
                                />
                                    <div
                                      className="main"
                                      data-img-url="/img/portfolio/6.jpg"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="list_inner">
                                  <div className="my_image">
                                   
                                    <Image
                                    src="/img/thumbs/4-2.jpg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover my_image"
                                />
                                    
                                    <div
                                      className="main"
                                      data-img-url="/img/portfolio/7.jpg"
                                    />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="elisc_tm_button" data-position="center">
                    <a href="#">View all projects</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="elisc_tm_partners">
              <div className="tm_content">
                <div className="elisc_tm_title">
                  <span>- Clients</span>
                  <h3>Customers &amp; clients</h3>
                </div>
                <div className="partners_inner">
                  <ul>
                    <li>
                      <div className="list_inner">
                       
                        <Image
                                    src="/img/partners/1.png"
                                    alt="Picture"
                                    width="111"
                                    height="26"
                                    
                                />
                                    
                        <a className="elisc_tm_full_link" href="#"></a> 
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                       
                        <Image
                                    src="/img/partners/2.png"
                                    alt="Picture"
                                    width="107"
                                    height="27"
                                    
                                />
                        <a className="elisc_tm_full_link" href="#"></a>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                     
                        <Image
                                    src="/img/partners/3.png"
                                    alt="Picture"
                                    width="97"
                                    height="28"
                                />
                        <a className="elisc_tm_full_link"  href="#"></a>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                     
                        
                        <Image
                                    src="/img/partners/4.png"
                                    alt="Picture"
                                    width="68"
                                    height="20"
                                />
                        <a className="elisc_tm_full_link" href="#"></a>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                      
                        <Image
                                    src="/img/partners/5.png"
                                    alt="Picture"
                                    width="76"
                                    height="26"
                                />
                        <a className="elisc_tm_full_link" href="#"></a>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                       
                        <Image
                                    src="/img/partners/6.png"
                                    alt="Picture"
                                    width="46"
                                    height="37"
                                />
                        <a className="elisc_tm_full_link" href="#"></a>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                       
                        <Image
                                    src="/img/partners/7.png"
                                    alt="Picture"
                                    width="78"
                                    height="18"
                                />
                        <a className="elisc_tm_full_link"  href="#"></a>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                      
                        <Image
                                    src="/img/partners/8.png"
                                    alt="Picture"
                                    width="86"
                                    height="21"
                                />
                        <a className="elisc_tm_full_link"  href="#"></a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="elisc_tm_testimonial_wrapper">
              <div className="tm_content">
                <div className="elisc_tm_testimonials">
                  <div className="elisc_tm_title" data-position="center">
                    <span>- Testimonial</span>
                    <h3>What client's say?</h3>
                  </div>
                  <div className="testimonials_list">
                    <ul className="owl-carousel owl-theme">
                      <li>
                        <div className="text">
                          <p>
                            I rarely like to write reviews, but the Marketify
                            team truly deserve a standing ovation for their
                            customer support, customisation and most
                            importantly, friendliness and professionalism.
                          </p>
                        </div>
                        <div className="short">
                          <div className="image">
                            <div
                              className="main"
                              data-img-url="/img/testimonials/1.jpg"
                            />
                          </div>
                          <div className="detail">
                            <h3>John Doe</h3>
                          </div>
                        </div>
                        <p className="job">User Interface Design at PCL Lab</p>
                      </li>
                      <li>
                        <div className="text">
                          <p>
                            Really the Code Quality, Customer Support, and
                            design are awesome and its good support they are
                            giving. They give an instant solution to our needs.
                            Really awesome. I will strongly recommend to my
                            friends.
                          </p>
                        </div>
                        <div className="short">
                          <div className="image">
                            <div
                              className="main"
                              data-img-url="/img/testimonials/2.jpg"
                            />
                          </div>
                          <div className="detail">
                            <h3>Keita Smith</h3>
                          </div>
                        </div>
                        <p className="job">Senior Designer at Behance</p>
                      </li>
                      <li>
                        <div className="text">
                          <p>
                            Loved the template design, documentation,
                            customizability and the customer support from
                            Marketify team! I am a noob in programming but the
                            Marketify team helped me successfully.
                          </p>
                        </div>
                        <div className="short">
                          <div className="image">
                            <div
                              className="main"
                              data-img-url="/img/testimonials/3.jpg"
                            />
                          </div>
                          <div className="detail">
                            <h3>Alan Walker</h3>
                          </div>
                        </div>
                        <p className="job">Sales Manager at Vivaco Shop</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elisc_tm_section" id="news">
            <div className="elisc_tm_news fn_w_sminiboxes">
              <div className="tm_content">
                <div className="wrapper">
                  <div className="left fn_w_sminibox">
                    <div className="elisc_tm_sticky_section">
                      <div className="elisc_tm_title">
                        <span>- Blog</span>
                        <h3>My blog &amp; news</h3>
                      </div>
                      <div className="elisc_tm_button">
                        <a className="anchor" href="#contact">
                          Get in touch
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="right fn_w_sminibox">
                    <div className="elisc_tm_sticky_section">
                      <div className="list">
                        <ul>
                          <li>
                           
                        <Image
                                    src="/img/news/1.jpg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover popup_image"
                                />
                            <div className="list_inner">
                              <div className="info">
                                <div className="meta">
                              
                                   <Image
                                    src="/img/svg/calendar.svg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover svg"
                                />
                                  <span>April 12, 2023</span>
                                </div>
                                <div className="title">
                                  <h3>
                                    <a href="#">
                                      12 unique examples of portfolio websites
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div className="elisc_tm_read_more">
                                <a className="line_effect" href="#">
                                  Learn More
                                  <span>
                                 
                                    <Image
                                    src="/img/svg/rightArrow.svg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover svg"
                                />
                                  </span>
                                </a>
                              </div>
                              <div className="news_hidden_details">
                                <div className="news_popup_informations">
                                  <div className="text">
                                    <p>
                                      Elisc is a leading web design agency with
                                      an award-winning design team that creates
                                      innovative, effective websites that
                                      capture your brand, improve your
                                      conversion rates, and maximize your
                                      revenue to help grow your business and
                                      achieve your goals.
                                    </p>
                                    <p>
                                      In today’s digital world, your website is
                                      the first interaction consumers have with
                                      your business. That's why almost 95
                                      percent of a user’s first impression
                                      relates to web design. It’s also why web
                                      design services can have an immense impact
                                      on your company’s bottom line.
                                    </p>
                                    <p>
                                      That’s why more companies are not only
                                      reevaluating their website’s design but
                                      also partnering with Kura, the web design
                                      agency that’s driven more than $2.4
                                      billion in revenue for its clients. With
                                      over 50 web design awards under our belt,
                                      we're confident we can design a custom
                                      website that drives sales for your unique
                                      business.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                          
                              <Image
                                    src="/img/news/2.jpg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover popup_image"
                                />
                            <div className="list_inner">
                              <div className="info">
                                <div className="meta">
                           
                              <Image
                                    src="/img/svg/calendar.svg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover svg"
                                />
                                  <span>April 01, 2023</span>
                                </div>
                                <div className="title">
                                  <h3>
                                    <a href="#">
                                      Dealing with spring allergy symptoms
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div className="elisc_tm_read_more">
                                <a className="line_effect" href="#">
                                  Learn More
                                  <span>
                                
                                    <Image
                                    src="/img/svg/rightArrow.svg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover svg"
                                />
                                  </span>
                                </a>
                              </div>
                              <div className="news_hidden_details">
                                <div className="news_popup_informations">
                                  <div className="text">
                                    <p>
                                      Elisc is a leading web design agency with
                                      an award-winning design team that creates
                                      innovative, effective websites that
                                      capture your brand, improve your
                                      conversion rates, and maximize your
                                      revenue to help grow your business and
                                      achieve your goals.
                                    </p>
                                    <p>
                                      In today’s digital world, your website is
                                      the first interaction consumers have with
                                      your business. That's why almost 95
                                      percent of a user’s first impression
                                      relates to web design. It’s also why web
                                      design services can have an immense impact
                                      on your company’s bottom line.
                                    </p>
                                    <p>
                                      That’s why more companies are not only
                                      reevaluating their website’s design but
                                      also partnering with Kura, the web design
                                      agency that’s driven more than $2.4
                                      billion in revenue for its clients. With
                                      over 50 web design awards under our belt,
                                      we're confident we can design a custom
                                      website that drives sales for your unique
                                      business.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                         
                            <Image
                                    src="/img/news/3.jpg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover popup_image"
                                />
                            <div className="list_inner">
                              <div className="info">
                                <div className="meta">
                                  
                                   <Image
                                    src="/img/svg/calendar.svg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover svg"
                                />
                                  <span>March 30, 2023</span>
                                </div>
                                <div className="title">
                                  <h3>
                                    <a href="#">
                                      Why we should read fewer books
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div className="elisc_tm_read_more">
                                <a className="line_effect" href="#">
                                  Learn More
                                  <span>
                                 
                                   <Image
                                    src="/img/svg/rightArrow.svg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover svg"
                                />
                                  </span>
                                </a>
                              </div>
                              <div className="news_hidden_details">
                                <div className="news_popup_informations">
                                  <div className="text">
                                    <p>
                                      Elisc is a leading web design agency with
                                      an award-winning design team that creates
                                      innovative, effective websites that
                                      capture your brand, improve your
                                      conversion rates, and maximize your
                                      revenue to help grow your business and
                                      achieve your goals.
                                    </p>
                                    <p>
                                      In today’s digital world, your website is
                                      the first interaction consumers have with
                                      your business. That's why almost 95
                                      percent of a user’s first impression
                                      relates to web design. It’s also why web
                                      design services can have an immense impact
                                      on your company’s bottom line.
                                    </p>
                                    <p>
                                      That’s why more companies are not only
                                      reevaluating their website’s design but
                                      also partnering with Kura, the web design
                                      agency that’s driven more than $2.4
                                      billion in revenue for its clients. With
                                      over 50 web design awards under our belt,
                                      we're confident we can design a custom
                                      website that drives sales for your unique
                                      business.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                          
                            <Image
                                    src="/img/news/4.jpg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover popup_image"
                                />
                            <div className="list_inner">
                              <div className="info">
                                <div className="meta">
                               
                            <Image
                                    src="/img/svg/calendar.svg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover svg"
                                />
                                  <span>March 15, 2023</span>
                                </div>
                                <div className="title">
                                  <h3>
                                    <a href="#">
                                      Skills and tools for efficient web design
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div className="elisc_tm_read_more">
                                <a className="line_effect" href="#">
                                  Learn More
                                  <span>
                                   <Image
                                    src="/img/svg/rightArrow.svg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover svg"
                                />
                                  </span>
                                </a>
                              </div>
                              <div className="news_hidden_details">
                                <div className="news_popup_informations">
                                  <div className="text">
                                    <p>
                                      Elisc is a leading web design agency with
                                      an award-winning design team that creates
                                      innovative, effective websites that
                                      capture your brand, improve your
                                      conversion rates, and maximize your
                                      revenue to help grow your business and
                                      achieve your goals.
                                    </p>
                                    <p>
                                      In today’s digital world, your website is
                                      the first interaction consumers have with
                                      your business. That's why almost 95
                                      percent of a user’s first impression
                                      relates to web design. It’s also why web
                                      design services can have an immense impact
                                      on your company’s bottom line.
                                    </p>
                                    <p>
                                      That’s why more companies are not only
                                      reevaluating their website’s design but
                                      also partnering with Kura, the web design
                                      agency that’s driven more than $2.4
                                      billion in revenue for its clients. With
                                      over 50 web design awards under our belt,
                                      we're confident we can design a custom
                                      website that drives sales for your unique
                                      business.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                          
                            <Image
                                    src="/img/news/5.jpg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover popup_image"
                                />
                            <div className="list_inner">
                              <div className="info">
                                <div className="meta">
                               
                            <Image
                                    src="/img/svg/calendar.svg"
                                    alt="Picture"
                                    fill={true}
                                    className="object-cover svg"
                                />
                                  <span>Feb 20, 2023</span>
                                </div>
                                <div className="title">
                                  <h3>
                                    <a href="#">
                                      How to use python for web scraping
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div className="elisc_tm_read_more">
                                <a className="line_effect" href="#">
                                  Learn More
                                  <span>
                                    <Image
                                      fill={true}
                                      className="object-cover svg"
                                      src="/img/svg/rightArrow.svg"
                                      alt=""
                                    />
                                  </span>
                                </a>
                              </div>
                              <div className="news_hidden_details">
                                <div className="news_popup_informations">
                                  <div className="text">
                                    <p>
                                      Elisc is a leading web design agency with
                                      an award-winning design team that creates
                                      innovative, effective websites that
                                      capture your brand, improve your
                                      conversion rates, and maximize your
                                      revenue to help grow your business and
                                      achieve your goals.
                                    </p>
                                    <p>
                                      In today’s digital world, your website is
                                      the first interaction consumers have with
                                      your business. That's why almost 95
                                      percent of a user’s first impression
                                      relates to web design. It’s also why web
                                      design services can have an immense impact
                                      on your company’s bottom line.
                                    </p>
                                    <p>
                                      That’s why more companies are not only
                                      reevaluating their website’s design but
                                      also partnering with Kura, the web design
                                      agency that’s driven more than $2.4
                                      billion in revenue for its clients. With
                                      over 50 web design awards under our belt,
                                      we're confident we can design a custom
                                      website that drives sales for your unique
                                      business.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <Image
                              
                              fill={true}
                              className="object-cover popup_image"
                              src="/img/news/6.jpg"
                              alt=""
                            />
                            <div className="list_inner">
                              <div className="info">
                                <div className="meta">
                                  <Image
                                    fill={true}
                                    className="object-cover svg"
                                    src="/img/svg/calendar.svg"
                                    alt=""
                                  />{" "}
                                  <span>Feb 11, 2023</span>
                                </div>
                                <div className="title">
                                  <h3>
                                    <a href="#">
                                      Best wireframe tools for web designers
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div className="elisc_tm_read_more">
                                <a className="line_effect" href="#">
                                  Learn More
                                  <span>
                                    <Image
                                      fill={true}
                                      className="object-cover svg"
                                      src="/img/svg/rightArrow.svg"
                                      alt=""
                                    />
                                  </span>
                                </a>
                              </div>
                              <div className="news_hidden_details">
                                <div className="news_popup_informations">
                                  <div className="text">
                                    <p>
                                      Elisc is a leading web design agency with
                                      an award-winning design team that creates
                                      innovative, effective websites that
                                      capture your brand, improve your
                                      conversion rates, and maximize your
                                      revenue to help grow your business and
                                      achieve your goals.
                                    </p>
                                    <p>
                                      In today’s digital world, your website is
                                      the first interaction consumers have with
                                      your business. That's why almost 95
                                      percent of a user’s first impression
                                      relates to web design. It’s also why web
                                      design services can have an immense impact
                                      on your company’s bottom line.
                                    </p>
                                    <p>
                                      That’s why more companies are not only
                                      reevaluating their website’s design but
                                      also partnering with Kura, the web design
                                      agency that’s driven more than $2.4
                                      billion in revenue for its clients. With
                                      over 50 web design awards under our belt,
                                      we're confident we can design a custom
                                      website that drives sales for your unique
                                      business.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <Image
                              fill={true}
                              className="object-cover popup_image"
                              src="/img/news/7.jpg"
                              alt=""
                            />
                            <div className="list_inner">
                              <div className="info">
                                <div className="meta">
                                  <Image
                                    fill={true}
                                    className="object-cover svg"
                                    src="/img/svg/calendar.svg"
                                    alt=""
                                  />{" "}
                                  <span>Jan 31, 2023</span>
                                </div>
                                <div className="title">
                                  <h3>
                                    <a href="#">
                                      Why we’re crazy about animations
                                    </a>
                                  </h3>
                                </div>
                              </div>
                              <div className="elisc_tm_read_more">
                                <a className="line_effect" href="#">
                                  Learn More
                                  <span>
                                    <Image
                                      fill={true}
                                      className="object-cover svg"
                                      src="img/svg/rightArrow.svg"
                                      alt=""
                                    />
                                  </span>
                                </a>
                              </div>
                              <div className="news_hidden_details">
                                <div className="news_popup_informations">
                                  <div className="text">
                                    <p>
                                      Elisc is a leading web design agency with
                                      an award-winning design team that creates
                                      innovative, effective websites that
                                      capture your brand, improve your
                                      conversion rates, and maximize your
                                      revenue to help grow your business and
                                      achieve your goals.
                                    </p>
                                    <p>
                                      In today’s digital world, your website is
                                      the first interaction consumers have with
                                      your business. That's why almost 95
                                      percent of a user’s first impression
                                      relates to web design. It’s also why web
                                      design services can have an immense impact
                                      on your company’s bottom line.
                                    </p>
                                    <p>
                                      That’s why more companies are not only
                                      reevaluating their website’s design but
                                      also partnering with Kura, the web design
                                      agency that’s driven more than $2.4
                                      billion in revenue for its clients. With
                                      over 50 web design awards under our belt,
                                      we're confident we can design a custom
                                      website that drives sales for your unique
                                      business.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elisc_tm_section" id="contact">
            <div className="elisc_tm_contact">
              <div className="tm_content">
                <div className="wrapper">
                  <div className="left">
                    <div className="elisc_tm_title">
                      <span>- Let's Connect</span>
                      <h3>Get in touch</h3>
                    </div>
                    <div className="text">
                      <p>
                        I'm currently avaliable to take on new projects, so feel
                        free to send me a message about anything that you want
                        to run past me. You can contact anytime at 24/7
                      </p>
                    </div>
                    <div className="info">
                      <ul>
                        <li>
                          <a href="tel:+77 022 444 05 05">+77 022 444 05 05</a>
                        </li>
                        <li>
                          <a href="https://marketifythemes.net/cdn-cgi/l/email-protection#11626461617e636551747d7862723f727e7c">
                            <span
                              className="__cf_email__"
                              data-cfemail="3c4f494c4c534e487c5950554f5f125f5351"
                            >
                              support@elisc.com
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="href_location" href="#">
                            Ave Street Avenue, New York
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="right">
                    <div className="fields">
                      <form
                        action="https://marketifythemes.net/"
                        method="post"
                        className="contact_form"
                        id="contact_form"
                      >
                        <div
                          className="returnmessage"
                          data-success="Your message has been received, We will contact you soon."
                        />
                        <div className="empty_notice">
                          <span>Please Fill Required Fields</span>
                        </div>
                        <div className="first">
                          <ul>
                            <li>
                              <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                autoComplete="off"
                              />
                            </li>
                            <li>
                              <input
                                id="email"
                                type="text"
                                placeholder="Your email"
                                autoComplete="off"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="last">
                          <textarea
                            id="message"
                            placeholder="Write something..."
                            defaultValue={""}
                          />
                        </div>
                        <div className="elisc_tm_button">
                          <a id="send_message" href="#">
                            Submit now
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="elisc_tm_map">
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe
                        width="100%"
                        height={375}
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder={0}
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                      />
                      <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon" />
                      <br />
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            ".mapouter{position:relative;text-align:right;height:375px;width:100%;}"
                        }}
                      />
                      <a href="https://www.embedgooglemap.net/">
                        how to add google map
                      </a>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            ".gmap_canvas {overflow:hidden;background:none!important;height:375px;width:100%;}"
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mouse-cursor cursor-outer" />
    <div className="mouse-cursor cursor-inner" />
  </div>
     
    </main>
  )
                  
}
