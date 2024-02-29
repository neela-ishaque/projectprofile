import AboutArr from '../components/aboutArr';



const aboutArrData = [
  {
    title: 'Html CS JavaScript',
    description: 'I’ve skill working with HTML,CSS & JavaScript , those help to understand basic structure of a website',
    image: '',
  },
  {
    title: 'Reactjs',
    description: 'This is a list of my skills and expertise.',
    image: 'a',
  },
];
function About() {
  return (
    <div className='container'>
      <div className='aboutMe'>
      <div className='htmlS'>
        <AboutArr {...aboutArrData[0]} />
        </div>
        <div className='reactS'>
        <AboutArr {...aboutArrData[1]} />
        </div>
      </div>
    </div>
  );
}

export default About;