import './Hero.css';

function Hero({ img, imgAlt, title, subtitle, callToAction }) {
    return <div className='hero-div'>
        <h2 className='hero-title'>{title}</h2>
        <h3 className='hero-subtitle'>{subtitle}</h3>
        <p className='hero-cta'>{callToAction}</p>
    </div>
}

export default Hero;