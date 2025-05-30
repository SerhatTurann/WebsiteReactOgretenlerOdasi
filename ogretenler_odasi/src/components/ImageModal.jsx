// components/ImageModal.jsx
const ImageModal = ({ imageSrc, onClose }) => {
  return (
    <div className="image-modal" onClick={onClose}>
      <img src={imageSrc} alt="Büyük Görsel" />
      <button
        className="close-button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        ✕
      </button>
    </div>
  );
};

export default ImageModal;
