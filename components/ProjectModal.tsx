import React from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import Image from 'next/image';
import img from "/public/about.svg"
import home from "/public/b-home.png";
import contact from "/public/b-contact.png";
import nav from "/public/b-nav.jpg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    paddingTop: '2rem',
    borderRadius: '2rem',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(0, 0, 0, 0.8)',
  }
}

// Modal.setAppElement('#App');

const ProjectModal: React.FC<IProjectModal> = ({ isOpen, onRequestClose }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      overlayClassName="overlay"
    >
        <div className="carousel-container h-[35rem] w-[18rem] bg-slate-300 relative overflow-hidden rounded-3xl z-30">
          {/* <span className="absolute bg-red-700 w-10 h-10 -top-2 z-20 ">X</span> */}
          <Slider {...settings} className='h-full bg-black overflow-hidden select-none cursor-grabbing'>
            <div className='h-[120%] select-none'>
              <Image 
                height={undefined} 
                width={undefined} 
                src={home} alt="Image 1" />
            </div>
            <div className='h-[120%]'>
            <Image
                height={undefined} 
                width={undefined} 
                src={nav} alt="Image 1" />
            </div>
            <div className='h-[120%]'>
            <Image
                height={undefined} 
                width={undefined} 
                src={contact} alt="Image 1" />
            </div>
          </Slider>
        </div>
    </Modal>
  );
};

export default ProjectModal;
