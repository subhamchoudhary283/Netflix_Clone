import './Home.css'
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner_img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>The Protector is a Turkish Netflix series about Hakan, a shopkeeper turned mystical guardian of Istanbul.</p>
          
          <div className='hero-btns'>
            <button onClick={() => window.open('https://www.youtube.com/watch?v=80dqOwAOhbo', '_blank')} className='btn'><img src={play_icon} alt="" />Play</button>
            <button onClick={() => window.open('https://www.google.com/search?q=the+protector&oq=the+protec&gs_lcrp=EgZjaHJvbWUqFggAEAAYgwEYkQIY4wIYsQMYgAQYigUyFggAEAAYgwEYkQIY4wIYsQMYgAQYigUyEwgBEC4YgwEYkQIYsQMYgAQYigUyDAgCEC4YQxiABBiKBTINCAMQABiRAhiABBiKBTINCAQQABiRAhiABBiKBTIGCAUQRRg5MgwIBhAuGEMYgAQYigUyBwgHEAAYgAQyBwgIEAAYgAQyDAgJEAAYQxiABBiKBdIBCTQ0NTlqMGoxNagCCLACAfEF8XGvauhu14_xBfFxr2robteP&sourceid=chrome&ie=UTF-8', '_blank')} className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>

          <TitleCards/>

        </div>
      </div>
      <div className="more-cards">
        <TitleCards titles={'Popular Movies'} category={'popular'}/>
        <TitleCards titles={'Top Rated Movies'} category={'top_rated'} />
        <TitleCards titles={'Upcoming Releases'} category={"upcoming"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
