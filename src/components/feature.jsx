const Feature = ({imgLink,fTitle,fText}) => {
  return (
    <div className="feature">
        <img className="feature__img" alt="feature-image" src={imgLink}></img>
        <strong className="feature__Title"  >{fTitle}</strong>
        <p className="feature__Text">{fText}</p>
    </div>
  )
}
export default Feature