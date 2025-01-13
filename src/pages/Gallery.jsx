import React, { useState } from "react";
import Bcrumbs from "../components/Bcrumbs";
import "../css/Gallery.css";
import Sectionhead from "../components/Sectionhead";
import Modal from "react-modal";
import { eventImages } from "../utils";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  function galleryData() {
    return (
      <div className="row g-5">
        {eventImages.map((group, index) => (
          <div key={index} className="gallery-item">
            <div className="gallery-item-title">
              <h4>{group.title}</h4>
            </div>
            <div className="row g-3">
              {group.images.map((image, i) => (
                <div
                  key={i}
                  className="col-6 col-md-4 col-lg-3 col-xl-2 gallery-img d-flex justify-content-center align-items-center"
                  onClick={() => openModal(image)}
                >
                  <img
                    src={image}
                    alt={`sample image ${i + 1}`}
                    className="img-fluid"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Bcrumbs breadcrumbspage="Gallery" />
      <section className="Gallery" id="Gallery">
        <Sectionhead
          sectionname="Gallery"
          sectiondescription="Our"
          sectiondescriptionbold="Gallery"
        />
        <div className="container">{galleryData()}</div>
      </section>

      <Modal
        isOpen={selectedImage !== null}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="image-modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <button className="close-button" onClick={closeModal}>
            {/* <AiOutlineClose /> */}
            <i className="bx bx-x"></i>
          </button>
          <img
            src={selectedImage}
            alt="sample image"
            className="modal-image image-fluid"
          />
        </div>
      </Modal>
    </>
  );
}
