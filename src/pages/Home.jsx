import Yasmin from '../assets/Yasmin.png';
import HeroImg from '../assets/hero3.png';
import HeroImg1 from '../assets/bg-web.png';
import Circle1 from '../assets/c1.png'
import Circle2 from '../assets/c2.png'
const Home = () => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className='hero__tittle'>
                        <h2 className='intro'>Hi,
                            <br></br>I’m <img className="yasminName" alt="Yasmin" src={Yasmin}></img>
                            <br />A Front-end Web Developer </h2>
                        <p className='intro'>{`I'm an independent creative`}
                            <br></br><strong>fornt end developer</strong>
                            <br></br>from Sweden</p>
                    </div>
                    <div className='hero__content'>
                        <img id="img1" className='imgs' alt="Hero Image" src={HeroImg} ></img>
                        <img id="img2" className='imgs' alt="Hero Image" src={HeroImg1} ></img>
                        <img id='imgC1' className='imgs' alt=' Circle1' src={Circle1}></img>
                        <img id='imgC2' className='imgs' alt=' Circle2' src={Circle2}></img>
                        <img id='imgC3' className='imgs' alt=' Circle3' src={Circle1}></img>
                    </div>
                </div>
            </section>
            <footer>&copy; Copyright Yasmin Ishaque</footer>
        </>
    )
}
export default Home;