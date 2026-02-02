import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/navbar.jsx'
import hero_banner from '/assets_netflix2/hero_banner.jpg'
import hero_title from '/assets_netflix2/hero_title.png'
import play_icon from '/assets_netflix2/play_icon.png'
import info_icon from '/assets_netflix2/info_icon.png'
import Titlecards from '../../components/titlecards/titlecards.jsx'
import Footer from '../../components/footer/footer.jsx'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
             <button className='btn'><img src={play_icon} alt="" />Play</button>
             <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <Titlecards />

        </div>
      </div>
      <div className=" more-cards">
        <Titlecards title={"Blockbuster Movies"} />
          <Titlecards title={"Only on Netflix"} />
            <Titlecards title={"Upcoming"} />
              <Titlecards title={"Top Pics for You"} />
      </div>
      <Footer />
    </div>
  )
}

export default Home