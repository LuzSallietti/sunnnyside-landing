import './home.scss';

import Aos from 'aos';
import '../../node_modules/aos/dist/aos.css';

import logo from '../assets/images/logo.svg'
import footer_logo from '../assets/images/logo1.svg';
import banner_img from '../assets/images/desktop/image-header.jpg';
import sm_banner_img from '../assets/images/mobile/image-header.jpg'
import arrow_down from '../assets/images/icon-arrow-down.svg';
import img_transform from '../assets/images/desktop/image-transform.jpg';
import sm_img_transform from '../assets/images/mobile/image-transform.jpg';
import img_standOut from '../assets/images/desktop/image-stand-out.jpg';
import sm_img_standOut from '../assets/images/mobile/image-stand-out.jpg';
import img_gDesign from '../assets/images/desktop/image-graphic-design.jpg';
import sm_img_gDesign from '../assets/images/mobile/image-graphic-design.jpg';
import img_Photography from '../assets/images/desktop/image-photography.jpg';
import sm_img_Photography from '../assets/images/mobile/image-photography.jpg';
import img_Emily from '../assets/images/image-emily.jpg';
import img_Jennie from '../assets/images/image-jennie.jpg';
import img_Thomas from '../assets/images/image-thomas.jpg';
import gallery_milk from '../assets/images/desktop/image-gallery-milkbottles.jpg';
import sm_gallery_milk from '../assets/images/mobile/image-gallery-milkbottles.jpg';
import gallery_orange from '../assets/images/desktop/image-gallery-orange.jpg';
import sm_gallery_orange from '../assets/images/mobile/image-gallery-orange.jpg';
import gallery_cone from '../assets/images/desktop/image-gallery-cone.jpg';
import sm_gallery_cone from '../assets/images/mobile/image-gallery-cone.jpg';
import gallery_sugar from '../assets/images/desktop/image-gallery-sugarcubes.jpg';
import sm_gallery_sugar from '../assets/images/mobile/image-gallery-sugar-cubes.jpg';

import Logo from '../components/Logo/Logo';
import Menu from '../components/Menu/Menu';
import Button from '../components/Button/Button';
import Banner from '../components/Banner/Banner';
import Feature from '../components/Feature/Feature';
import PhotoBox from '../components/Photo-Box/Photo-Box';
import Services from '../components/Services/Services';
import Testimony from '../components/Testimony/Testimony';
import RSSMenu from '../components/RSSMenu/RSSMenu';

import { useEffect } from 'react';
import { useRef } from 'react';

const Home = () => {    
    const mobileMenu = useRef(null)   
    
    useEffect(() => { 
        setTimeout(() => {
        Aos.init({duration:1250, offset:200})
        },1000)        
        }, []);

const responsiveMenu = () => {
    if (window.outerWidth < 1024){
        return <>
        <div className="menu-wrapper" ref={mobileMenu}>
            <div className="triangle-up"></div>
            <Menu menu={["About", "Services", "Projects"]} position="header"/>
            <Button href="/contact" cta="Contact" />                          
        </div>
        </>
    } else {
        return <>
         <Menu menu={["About", "Services", "Projects"]} position="header"/>
         <Button href="/contact" cta="Contact" />
        </>
    }
}
const showMenu = () => {
    mobileMenu.current.classList.toggle("show-wrapper");   
}
const menuToggler = () => {
    return window.outerWidth < 1024 && <div className="toggler" onClick={showMenu}><i className="fas fa-bars"></i></div>
}
    return <>
    <main className="main fadeIn">
            <header className="main-header">
            <nav className="header-nav">
                <Logo src={logo} alt="logo"/>
                {responsiveMenu()}
                {menuToggler()}            
            </nav>
            </header>
            <section className="banner-section">
            <Banner
                img={[banner_img, sm_banner_img]}
                alt="media naranja"
                title="We are creatives"
                svg={arrow_down} />
            </section>
            <article className="article" id="about">
            {window.outerWidth > 1024 ?
                <>
                <Feature
                title="Transform your brand"
                desc="We are a full-service creative agency specializing in helping brands grow fast. 
                Engage your clients through compelling visuals that do most of the marketing for you."
                href="https://www.example.com"
                cta="Learn more"
                dataAos="fade-up"                              
                />              
                <PhotoBox
                src={[img_transform, sm_img_transform]}
                alt="stand out illustration"
                location="features"
                dataAos="flip-down"                               
            />
            </> :
            <>            
            <PhotoBox
                src={[img_transform, sm_img_transform]}
                alt="stand out illustration"
                location="features"
                dataAos="flip-down"
            />
            <Feature
                title="Transform your brand"
                desc="We are a full-service creative agency specializing in helping brands grow fast. 
                Engage your clients through compelling visuals that do most of the marketing for you."
                href="https://www.example.com"
                cta="Learn more"
                dataAos="fade-up"                              
                /> 
                </>            
            }   
            </article>
            <article className="article">          
            <>
            <PhotoBox
            src={[img_standOut, sm_img_standOut]}
            alt="transform illustration"
            location="features"
            dataAos="flip-up"
            /> 
            <Feature
            title="Stand out to the right audience"  
            desc="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."          
            href="https://www.example.com"
            cta="Learn more"
            dataAos="fade-down"
            />            
            </>              
            </article>        
            <ul className="services-container" id="services">
            <Services
            title= "Graphic design"
            desc= "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
            src= {[img_gDesign, sm_img_gDesign]}
            alt= "graphic design illustration"
            color= "green"
            dataAos="zoom-in"
            dataDelay="0"                       
            />
            <Services
            title= "Photography"
            desc= "Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
            src= {[img_Photography, sm_img_Photography]}
            alt= "photography illustration"
            color="dark-blue"
            dataAos="zoom-in"
            dataDelay="750"                            
            />
            </ul>
            <section className="testimonials-container" data-aos="zoom-out-down">
            <h4 className="testimonials-title">Client testimonials</h4>
            <ul className="testimonials-ul">
                <Testimony
                src ={img_Emily}
                alt ="Emilie R."
                quote = "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
                name = "Emily R."
                job_title = " Marketing Director"            
                />           
                <Testimony
                src ={img_Thomas}
                alt ="Thomas S."
                quote = " Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
                name = "Thomas S."
                job_title = "Chief Operating Officer"            
                />  
                <Testimony
                src ={img_Jennie}
                alt ="Jennie F."
                quote = "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
                name = "Jennie F."
                job_title = "Business Owner"            
                />                            
            </ul>
            </section>
            <section className="gallery" id="projects">
            <PhotoBox
            src={[gallery_milk, sm_gallery_milk]}
            alt="milk bottles"
            location="gallery"
            dataAos="flip-left"
            dataDelay="0"
            />
            <PhotoBox
            src={[gallery_orange, sm_gallery_orange]}
            alt="orange"
            location="gallery"
            dataAos="flip-left"
            dataDelay="250"
            />
            <PhotoBox
            src={[gallery_cone, sm_gallery_cone]}
            alt="ice cream cone"
            location="gallery"
            dataAos="flip-left"
            dataDelay="500"
            />
            <PhotoBox
            src={[gallery_sugar, sm_gallery_sugar]}
            alt="sugar cubes"
            location="gallery"
            dataAos="flip-left"
            dataDelay="1000"
            />
            </section>
            <footer className="footer">
            <Logo
            src={footer_logo}
            alt="logo"
            dataDelay="250"
            />
            <nav>
                <Menu
                menu={["About", "Services", "Projects"]}
                position="footer"
                />
                <RSSMenu
                anchors={[
                {
                    href: "https://www.facebook.com",
                    icon: "fab fa-facebook-square"
                },
                {
                    href: "https://www.instagram.com",
                    icon: "fab fa-instagram"
                },
                {
                    href:"https://www.twitter.com",
                    icon:"fab fa-twitter"
                },
                {
                    href:"https://www.pinterest.com",
                    icon:"fab fa-pinterest"
                }
                ]}
                />
            </nav>
            </footer>        
        </main>
        </>
        }
      export default Home;