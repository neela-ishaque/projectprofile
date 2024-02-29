
import ReactImg from "../assets/react.png"
import htmlCssJs from '../assets/htmlCssJs.png';



function aboutArr({ title, description, image }) {
    return (
        <>
            <div className='aboutCard'>
                <div className='Arrow'>
                    <img className='Arrowimg' src={image==="a"?ReactImg:htmlCssJs} />
                </div>
                <div className='contentText'>
                <h2>{title}</h2>
                <p>{description}</p>
                </div>
            </div>
            </>)
}

export default aboutArr;