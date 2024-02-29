import './imageExpand.css';
const ImageExpand = ({ image, onOverlayClick }) => {
    const handleCloseClick = (e) => {
      e.stopPropagation();
      onOverlayClick();
    }
  
    return (
      <div className="image-expand" onClick={onOverlayClick}>
        <div className="image-expand-overlay" onClick={handleCloseClick}></div>
        <img className="expanded-image" src={image} alt="" />
        <button className="image-expand-close" onClick={handleCloseClick}>Close</button>
      </div>
    );
  };
  
  export default ImageExpand;