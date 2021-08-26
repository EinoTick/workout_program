import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
}

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {delay: 0.1, duration: 1.6}
  },
  exit: {
    x: "-100vh",
    transition: {ease: 'easeInOut'}
  }
};

const Home = () => {
  return (
      <>
        <motion.div className="home container"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
        >
          <motion.h2>
            Luo oma kustomoitu treeniohjelma
          </motion.h2>
          <motion.div className="hero-text">
            Helppo käyttää ja täysin ilmainen! Mikäli oman treeniohjelman luominen kuitenkin hirvittää,
            voit valita myös valmiiksi tehdyn treeniohjelman vasemmanpuoleisesta valikosta.
          </motion.div>
          <Link to="/split">
            <motion.button
                variants={buttonVariants}
                whileHover="hover"
            >
              LUO TREENIOHJELMA
            </motion.button>
          </Link>
        </motion.div>
      </>
  )
}

export default Home;
