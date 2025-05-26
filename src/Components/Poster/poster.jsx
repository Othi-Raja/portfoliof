import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import image1 from '../../asserts/Poster/1.jpg';
import image2 from '../../asserts/Poster/2.jpg';
import image3 from '../../asserts/Poster/3.png';
import image4 from '../../asserts/Poster/4.jpg';
import image5 from '../../asserts/Poster/5.jpg';
import image6 from '../../asserts/Poster/6.jpg';
import image7 from '../../asserts/Poster/7.jpg';
import image8 from '../../asserts/Poster/8.jpg';
import './poster.css'

// Sample data - replace with your actual data
const posters = [
    {
        id: 1,
        title: "Creative Design",
        description: "Et aliqua tempor tempor consectetur tempor dolore magna. Magna consectetur lorem magna adipiscing lorem lorem consectetur amet dolore ut. Dolore eiusmod dolor elit labore incididunt do dolor eiusmod incididunt magna dolor. Dolore sit dolore ut tempor. Et sit aliqua dolor incididunt dolor labore. Sed ut sed lorem do ipsum. Elit ut sit dolore consectetur eiusmod dolore et sed sed sit. ",
        image: image1
    },
    {
        id: 2,
        title: "Digital Art",
        description: "Et aliqua tempor tempor consectetur tempor dolore magna. Magna consectetur lorem magna adipiscing lorem lorem consectetur amet dolore ut. Dolore eiusmod dolor elit labore incididunt do dolor eiusmod incididunt magna dolor. Dolore sit dolore ut tempor. Et sit aliqua dolor incididunt dolor labore. Sed ut sed lorem do ipsum. Elit ut sit dolore consectetur eiusmod dolore et sed sed sit. ",
        image: image2
    },
    {
        id: 3,
        title: "Photography",
        description: " Et aliqua tempor tempor consectetur tempor dolore magna. Magna consectetur lorem magna adipiscing lorem lorem consectetur amet dolore ut. Dolore eiusmod dolor elit labore incididunt do dolor eiusmod incididunt magna dolor. Dolore sit dolore ut tempor. Et sit aliqua dolor incididunt dolor labore. Sed ut sed lorem do ipsum. Elit ut sit dolore consectetur eiusmod dolore et sed sed sit. ",
        image: image3
    },
    {
        id: 4,
        title: "UI/UX Design",
        description: " Et aliqua tempor tempor consectetur tempor dolore magna. Magna consectetur lorem magna adipiscing lorem lorem consectetur amet dolore ut. Dolore eiusmod dolor elit labore incididunt do dolor eiusmod incididunt magna dolor. Dolore sit dolore ut tempor. Et sit aliqua dolor incididunt dolor labore. Sed ut sed lorem do ipsum. Elit ut sit dolore consectetur eiusmod dolore et sed sed sit. ",
        image: image4
    },
    {
        id: 5,
        title: "Brand Identity",
        description: " Et aliqua tempor tempor consectetur tempor dolore magna. Magna consectetur lorem magna adipiscing lorem lorem consectetur amet dolore ut. Dolore eiusmod dolor elit labore incididunt do dolor eiusmod incididunt magna dolor. Dolore sit dolore ut tempor. Et sit aliqua dolor incididunt dolor labore. Sed ut sed lorem do ipsum. Elit ut sit dolore consectetur eiusmod dolore et sed sed sit. ",
        image: image5
    },
    {
        id: 6,
        title: "Web Development",
        description: " Et aliqua tempor tempor consectetur tempor dolore magna. Magna consectetur lorem magna adipiscing lorem lorem consectetur amet dolore ut. Dolore eiusmod dolor elit labore incididunt do dolor eiusmod incididunt magna dolor. Dolore sit dolore ut tempor. Et sit aliqua dolor incididunt dolor labore. Sed ut sed lorem do ipsum. Elit ut sit dolore consectetur eiusmod dolore et sed sed sit. ",
        image: image6
    },
    {
        id: 7,
        title: "Mobile Design",
        description: " Et aliqua tempor tempor consectetur tempor dolore magna. Magna consectetur lorem magna adipiscing lorem lorem consectetur amet dolore ut. Dolore eiusmod dolor elit labore incididunt do dolor eiusmod incididunt magna dolor. Dolore sit dolore ut tempor. Et sit aliqua dolor incididunt dolor labore. Sed ut sed lorem do ipsum. Elit ut sit dolore consectetur eiusmod dolore et sed sed sit. ",
        image: image7
    },
    {
        id: 8,
        title: "Motion Graphics",
        description: "Et aliqua tempor tempor consectetur tempor dolore magna. Magna consectetur lorem magna adipiscing lorem lorem consectetur amet dolore ut. Dolore eiusmod dolor elit labore incididunt do dolor eiusmod incididunt magna dolor. Dolore sit dolore ut tempor. Et sit aliqua dolor incididunt dolor labore. Sed ut sed lorem do ipsum. Elit ut sit dolore consectetur eiusmod dolore et sed sed sit. ",
        image: image8
    }
];

export default function Poster() {
 
    const [selectedPoster, setSelectedPoster] = useState(posters[0]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollSpeed = 1;
    let frame;

    const scroll = () => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollSpeed;
      }
      frame = requestAnimationFrame(scroll);
    };

    frame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frame);
  }, []);

    return (
        <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Work</h1> */}
                
                {/* Main Content Area */}
                <div className="relative">
                    {/* Horizontal Scrolling Cards with Marquee */}
                    <div className="pb-6">
                        <Marquee
                            
                            speed={40} 

                            pauseOnHover={true}
                            direction="left"
                        >
                            <div className="flex space-x-6 px-4">
                                {posters.map((poster) => (
                                    <motion.div
                                    key={poster.id}
                                    
                                    className="w-72 m-4  flex-shrink-0 cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedPoster(poster)}
                                >
                                    <div className="rounded overflow-hidden relative group h-100 flex items-center justify-center bg-gray-50">
                                        <img draggable={false}
                                            src={poster.image}
                                            alt={poster.title}
                                            className="max-h-full max-w-full object-contain rounded"
                                        />
                                    </div>
                                </motion.div>
                                ))}
                            </div>
                        </Marquee>
                    </div>

                    {/* Expanded View with Slide Animation */}
                    <AnimatePresence>
                        {selectedPoster && (
                            <motion.div
                                initial={{ opacity: 0, x: "100%" }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed inset-0 bg-white z-50"
                                
                            >
                                
                                <div className="h-full flex">
                                    <motion.button
                                        onClick={() => setSelectedPoster(null)}
                                        className="absolute top-24 left-4 z-50 p-3  text-white rounded-circle hover:bg-gray-200 transition-colors"
                                        initial={{ y: 20 }}
                                        animate={{ y: 0 }}
                                        transition={{ delay: 0.7 }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                        </svg>
                                    </motion.button>
                                    {/* Left Side - Selected Card */}
                                    <motion.div 
                                        className="w-1/2 h-full bg-gray-50 p-8 flex items-center justify-center"
                                        initial={{ scale: 0.8 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <div className="max-w-md w-full  ">
                                            <motion.div
                                                className="bg-white  overflow-hidden"
                                                initial={{ y: 20 }}
                                                animate={{ y: 0 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                <img draggable={false}
                                                    src={selectedPoster.image}
                                                    alt={selectedPoster.title}
                                                    className="w-full object-contain"
                                                    style={{height:'500px'}}
                                                />
                                                {/* <div className="p-6">
                                                    <h3 className="text-2xl font-bold text-gray-900">{selectedPoster.title}</h3>
                                                </div> */}
                                            </motion.div>
                                        </div>
                                    </motion.div>

                                    {/* Right Side - Details */}
                                    <motion.div 
                                        className="w-1/2 h-full bg-white p-8 flex items-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <div className="max-w-lg">
                                            <motion.h2 
                                                className="text-4xl font-bold text-gray-900 mb-6"
                                                initial={{ y: 20 }}
                                                animate={{ y: 0 }}
                                                transition={{ delay: 0.5 }}
                                            >
                                                {selectedPoster.title}
                                            </motion.h2>
                                            <motion.p 
                                                className="text-xl small text-pretty text-gray-600 leading-relaxed mb-8"
                                                initial={{ y: 20 }}
                                                animate={{ y: 0 }}
                                                transition={{ delay: 0.6 }}
                                            >
                                                {selectedPoster.description}
                                            </motion.p>
                                     {/* Thumbnail Gallery */}
                                     <div className="">
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto p-4 scrollbar-hide">
        {posters.map((poster) => (
          <motion.div
            key={poster.id}
            className={`flex-shrink-0 w-24 h-24 cursor-pointer rounded-lg overflow-hidden ${
              selectedPoster.id === poster.id ? '-translate-y-2' : ''
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedPoster(poster)}
          >
            <div className="w-full h-full bg-gray-50">
              <img
                draggable={false}
                src={poster.image}
                alt={poster.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
                                        </div>
                                       
                                    </motion.div>
                                  
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}