import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Zdog from 'zdog';
import Marquee from "react-fast-marquee";
import { SiCanva, SiAdobephotoshop } from "react-icons/si";
import { CgFigma } from "react-icons/cg"; 
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaBars, FaShareAlt } from 'react-icons/fa';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import './index.css';

gsap.registerPlugin(ScrollTrigger);
  
const CustomNavbar = () => {
  const illoRef = useRef(null);
  const [isSpinning, setIsSpinning] = useState(true);
  const [activeLink, setActiveLink] = useState('home');
  const [scrolling, setScrolling] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const socialLinks = [
    { icon: <FaInstagram />, url: 'https://instagram.com', color: '#E1306C', label: 'Instagram' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', color: '#0077B5', label: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com', color: '#333', label: 'GitHub' },
    { icon: <FaTwitter />, url: 'https://twitter.com', color: '#1DA1F2', label: 'Twitter' }
  ];

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
    setIsDrawerOpen(false);
  }; 

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      
        transition={{ duration: 0.5 }}
        className={`navbar fixed-top ${scrolling ? 'navbar-scrolled' : ''}`}
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand href="#" className="logo">
            <motion.b
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              OthiRaja
            </motion.b>
          </Navbar.Brand>

          {/* Desktop Navigation */}
          <div className="   d-none d-lg-flex align-items-center">
            {navLinks.map((link) => (
              <motion.div
                key={link.id}
                className="nav-link-wrapper"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Nav.Link
                  href={`#${link.id}`}
                 
                  className={`   cursor-pointer position-relative px-3 py-2 ${
                    activeLink === link.id ? 'active' : ''
                  }`}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.label}
                  {activeLink === link.id && (
                    <motion.div
                      layoutId="activeLink"
                      className="active-link-indicator"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                      }}
                    />
                  )}
                </Nav.Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <IconButton
            className="d-lg-none"
            onClick={handleDrawerToggle}
            sx={{ color: '#4b5563' }}
          >
            <FaBars />
          </IconButton>
        </Container>
      </motion.nav>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: '80%',
            maxWidth: '300px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
          }
        }}
      >
        <List sx={{ pt: 2 }}>
          {/* Navigation Links */}
          {navLinks.map((link) => (
            <ListItem
              key={link.id}
              button
              onClick={() => handleLinkClick(link.id)}
              sx={{
                backgroundColor: activeLink === link.id ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
                color: activeLink === link.id ? '#2563eb' : '#4b5563',
                '&:hover': {
                  backgroundColor: 'rgba(37, 99, 235, 0.05)',
                }
              }}
            >
              <ListItemText primary={link.label} />
            </ListItem>
          ))}

          <div className="drawer-divider" />

          {/* Social Media Links */}
          {socialLinks.map((social, index) => (
            <ListItem
              key={index}
              component="a"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: social.color,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                }
              }}
            >
              <ListItemIcon sx={{ color: social.color }}>
                {social.icon}
              </ListItemIcon>
              <ListItemText primary={social.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default CustomNavbar;