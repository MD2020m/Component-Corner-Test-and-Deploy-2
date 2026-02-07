import Hero from '../components/Hero';

function HomePage() {
    return (
        <div className='hero-div'>
            <Hero
            title='A New src' subtitle='A place for components and component collectors'
            callToAction="Find the perfect component for whatever it is you're working on!" />
            <div className='site-intro'>
                <h1 className='why-shop-here'>Why Shop with Us?</h1>
                <p className='shop-because'>
                    Why spend your time writing code that thousands of talented developers have 
                    written before? Here at Component Corner you can find .jsx files on provided by 
                    talented developers ready to implement in your next React application. Need a new 
                    product card for the storefront you're working on? A post card for your revolutionary 
                    new social media app? A polished media player for your video streaming site? Simply find them 
                    all right here, download the files, and implement them. You'll have the perfect components with 
                    thorough documentation in minutes instead of hours, and the freedom to put your own spin on them
                    with custom styling and functionality!
                </p>
            </div>
        </div>
    )
}

export default HomePage