import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import './About.scss';
/* import { images } from '../../constants'; */
import { urlFor, client } from '../../client';

/* 
const abouts = [
    { title: "Web Development", description: "I strive to build quality websites.", imgUrl: images.about01 },
    { title: "Programming", description: "I love to solve complex problems with code.", imgUrl: images.about02 },
    { title: "UI/UX", description: "I build beautiful, responsive, and accessible applications for all peoples.", imgUrl: images.about03 },
    { title: "Communication", description: "My professional experience has centered around good communication. I make it a priority to listen first and be receptive of feedback.", imgUrl: images.about04 },
]; */

const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';
        client.fetch(query)
            .then((data) => setAbouts(data))
    }, []);

    return (
        <>
            <h2 className="head-text"> I am a <span>lifelong learner</span><br />who loves a <span> good challenge</span></h2>

            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        <img src={urlFor(about.imgUrl)} alt={about.title} />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                        <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

/* export default About */
export default AppWrap(About, 'about');