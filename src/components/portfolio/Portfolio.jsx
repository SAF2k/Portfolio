import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img2.png'


const data = [
  {
    id: 1,
    image:IMG1,
    title: 'Python Project using customtkinter Library',
    github: "https://github.com/SAF2k/Quick-B",
    btn1: 'Quick-B'
  },
  {
    id: 2,
    image:IMG2,
    title: 'Library',
    github: "https://github.com/SAF2k/Quick-B",
    btn1: 'Portfolio'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfoloContainer">
        {
          data.map(({id,image,title,github,btn1}) => {
            return (
              <article key= {id} className='portfolioItem'>
                <div className="portfolioItemsImage">
                  <img src={image} alt={title} />
                </div>
                <div className="protfolioItemCta">
                  <h3>{title}</h3>
                  <a href={github} className='btn'>{btn1}</a>
                </div>
              </article>
            )
          })
        }
      
      </div>
    </section>
  )
}

export default Portfolio