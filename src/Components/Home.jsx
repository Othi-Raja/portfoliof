import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Zdog from 'zdog'; 
 
import Marquee from "react-fast-marquee";
import { SiCanva, SiAdobephotoshop } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { motion } from "framer-motion"; // Import Framer Motion

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const illoRef = useRef(null);
  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
  
    if (!illoRef.current) return;

    const TAU = Zdog.TAU;
    const dotCount = 96;
    const loopCount = 3;
    const alpha = 0.7;
    const stroke = 10;
    let t = 0;

    const illo = new Zdog.Illustration({
      element: illoRef.current,
      zoom: 8,
      dragRotate: true,
      onDragStart: function () {
        setIsSpinning(false);
      },
    });

    function getFoilPoint(i) {
      let theta = (i / dotCount) * TAU;
      let x1 = Math.cos(theta) * (1 - alpha);
      let y1 = Math.sin(theta) * (1 - alpha);
      let x2 = Math.sin(theta * (loopCount - 1)) * alpha;
      let y2 = Math.cos(theta * (loopCount - 1)) * alpha;
      let z = Math.cos(theta * loopCount);
      let x = (x1 + x2) * 20;
      let y = (y1 + y2) * 20;
      z *= 7;

      return { x, y, z };
    }

    for (let i = 0; i < dotCount; i++) {
      let point0 = getFoilPoint(i);
      let point1 = getFoilPoint(i + 1);
      let hue = Math.round(Math.cos((i / dotCount) * TAU) * 60) + 330;

      new Zdog.Shape({
        path: [point0, point1],
        addTo: illo,
        stroke,
        color: `hsl(${hue}, 80%, 50%)`,
      });
    }

    function animate() {
      if (isSpinning) {
        t += 1 / 240;
        illo.rotate.y = Zdog.easeInOut(t % 1) * TAU * 2;
      }

      illo.updateRenderGraph();
      requestAnimationFrame(animate);
    }

    animate();
 
    return () => {
      illoRef.current = null;
    };
  }, [isSpinning]);

  return (
    <>
  
      <Container className="overflow-x-hidden" id="home">
        <Row className='pb-5 sm:pt-5'>
          <Col xs={12} sm={6} md={6} lg={6} xl={6} className="cstm-col-1 d-flex flex-column justify-content-center align-items-start overflow-hidden">
            
            <motion.p 
              className="home-subtitle"
          
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Branding | Logo Designing
            </motion.p>

            <motion.p 
              className="home-main-title"
          
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi, I am OthiRaja
            </motion.p>

            <motion.p 
          
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              A passionate designer specializing in poster design, logo creation, and modern, 
              eye-catching visuals. I also offer freelance design services and teaching in the creative field.
            </motion.p>
          </Col>

          <Col xs={12} sm={6} md={6} lg={6} xl={6} className="border-none shadow-none overflow-hidden d-flex justify-content-center align-items-center overflow-y-hidden">
            <span className='blur'></span>
            <span className='blur-1'></span>
            <span className='blur-2'></span>

            <motion.canvas 
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
            
              ref={illoRef} 
              className="illo cursor-move" 
              width="500" 
              height="500"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </Col>
        </Row>
        <div id="about"></div>
      </Container>
    </>
  );
}

export default Home;
