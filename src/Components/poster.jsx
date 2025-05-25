import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Marquee from 'react-fast-marquee';

// Sample data - replace with your actual data
const posters = [
    {
        id: 1,
        title: "Creative Design",
        description: "A stunning example of modern design principles and creative thinking.",
        image: "https://source.unsplash.com/random/800x600?design"
    },
    {
        id: 2,
        title: "Digital Art",
        description: "Exploring the boundaries of digital creativity and artistic expression.",
        image: "https://source.unsplash.com/random/800x600?art"
    },
    {
        id: 3,
        title: "Photography",
        description: "Capturing moments that tell stories through the lens.",
        image: "https://source.unsplash.com/random/800x600?photography"
    },
    {
        id: 4,
        title: "UI/UX Design",
        description: "Creating intuitive and beautiful user experiences.",
        image: "https://source.unsplash.com/random/800x600?ui"
    },
    {
        id: 5,
        title: "Brand Identity",
        description: "Building memorable and impactful brand experiences.",
        image: "https://source.unsplash.com/random/800x600?brand"
    },
    {
        id: 6,
        title: "Web Development",
        description: "Crafting modern and responsive web applications.",
        image: "https://source.unsplash.com/random/800x600?web"
    },
    {
        id: 7,
        title: "Mobile Design",
        description: "Designing for the mobile-first generation.",
        image: "https://source.unsplash.com/random/800x600?mobile"
    },
    {
        id: 8,
        title: "Motion Graphics",
        description: "Bringing designs to life through animation.",
        image: "https://source.unsplash.com/random/800x600?motion"
    }
];

export default function Poster() {
    const [selectedPoster, setSelectedPoster] = useState(null);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Work</h1>
                
                {/* Main Content Area */}
                <div className="relative">
                    {/* Horizontal Scrolling Cards with Marquee */}
                    <div className="pb-6">
                        <Marquee
                            gradient={false}
                            speed={40}
                            pauseOnHover={true}
                            direction="left"
                        >
                            <div className="flex space-x-6 px-4">
                                {posters.map((poster) => (
                                    <motion.div
                                        key={poster.id}
                                        className="w-72 flex-shrink-0 cursor-pointer group"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedPoster(poster)}
                                    >
                                        <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
                                            <div className="relative">
                                                <img
                                                    src={poster.image}
                                                    alt={poster.title}
                                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                                />
                                                {/* Overlay with blur effect */}
                                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 backdrop-blur-sm flex items-center justify-center">
                                                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                                                        <h3 className="text-xl font-bold mb-2">{poster.title}</h3>
                                                        <p className="text-sm text-gray-200">{poster.description}</p>
                                                        <motion.button
                                                            className="mt-4 px-4 py-2 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            View Details
                                                        </motion.button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold text-gray-900">{poster.title}</h3>
                                            </div>
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
                                    {/* Left Side - Selected Card */}
                                    <motion.div 
                                        className="w-1/2 h-full bg-gray-50 p-8 flex items-center justify-center group"
                                        initial={{ scale: 0.8 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <div className="max-w-full w-full h-full relative">
                                            <motion.div
                                                className="w-full h-full rounded-xl shadow-2xl overflow-hidden"
                                                initial={{ y: 20 }}
                                                animate={{ y: 0 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                <img
                                                    src={selectedPoster.image}
                                                    alt={selectedPoster.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                {/* Overlay with blur effect */}
                                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 backdrop-blur-sm flex items-center justify-center">
                                                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center p-8 max-w-lg">
                                                        <h3 className="text-4xl font-bold mb-4">{selectedPoster.title}</h3>
                                                        <p className="text-lg text-gray-200 mb-6">{selectedPoster.description}</p>
                                                        <motion.button
                                                            className="px-6 py-3 bg-white text-black rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            Explore More
                                                        </motion.button>
                                                    </div>
                                                </div>
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
                                                className="text-xl text-gray-600 leading-relaxed mb-8"
                                                initial={{ y: 20 }}
                                                animate={{ y: 0 }}
                                                transition={{ delay: 0.6 }}
                                            >
                                                {selectedPoster.description}
                                            </motion.p>
                                            <motion.button
                                                onClick={() => setSelectedPoster(null)}
                                                className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-lg"
                                                initial={{ y: 20 }}
                                                animate={{ y: 0 }}
                                                transition={{ delay: 0.7 }}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Back to Gallery
                                            </motion.button>
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