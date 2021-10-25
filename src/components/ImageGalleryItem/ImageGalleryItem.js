import PropTypes from "prop-types";
import "./ImageGalleryItem.css";

function ImageGalleryItem({ pictures, onClick }) {
  return pictures.map((picture) => (
    <li key={picture.id} className="ImageGalleryItem">
      <img
        onClick={() => onClick(picture)}
        src={picture.webformatURL}
        alt={picture.tags}
        className="ImageGalleryItem-image"
      />
    </li>
  ));
}

ImageGalleryItem.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
