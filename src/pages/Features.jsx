import Feature from "../components/feature";
import Feature1img from "../assets/code.png"
import Feature2img from '../assets/respon1.png';
import Feature3img from "../assets/review.png"
const fContent = [
    {
        imgLink: Feature1img,
        fTitle: "Re-useable Code",
        fText: `React components are a fundamental part of achieving code reusability in a React application. This, in turn, leads to more efficient and scalable development.
     When components are reusable, they can be easily imported and integrated into different parts of an application or across different applications. This results in more streamlined development and faster iterations of the application`
    },
    {
        imgLink: Feature2img,
        fTitle: "Resposive Design",
        fText: `Almost every new client these days wants a mobile version of their website. It’s practically essential after all: one design for the BlackBerry, another for the iPhone, the iPad, netbook, Kindle — and all screen resolutions must be compatible, too. In the next five years, we’ll likely need to design for a number of additional inventions.
     In the field of Web design and development, we’re quickly getting to the point of being unable to keep up with the endless new resolutions and devices. For many websites, creating a website version for each resolution and new device would be impossible, or at least impractical. 
     `,
    },
    {
        imgLink: Feature3img,
        fTitle: "Revision chance",
        fText: "Excited to share our Triple Revision Guarantee for your web embed! We're committed to perfecting it through three rounds of revisions. Let's ensure it exceeds your expectations.",
    },
]
const Features = () => {
    return (
        <>
            <h1>Hello Features</h1>
            <div className="container">
                <div className="features">

                    <Feature imgLink={fContent[0].imgLink} fTitle={fContent[0].fTitle} fText={fContent[0].fText} />
                    <Feature imgLink={fContent[1].imgLink} fTitle={fContent[1].fTitle} fText={fContent[1].fText} />
                    <Feature imgLink={fContent[2].imgLink} fTitle={fContent[2].fTitle} fText={fContent[2].fText} />

                </div>
            </div>

        </>
    )
}
export default Features;