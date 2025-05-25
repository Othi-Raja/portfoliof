import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import b1 from "./3d_asserts/b1.png";
import b2 from "./3d_asserts/b2.png";
import b3 from "./3d_asserts/b3.png";
import b4 from "./3d_asserts/b3.png";
import Poster from '../Poster/poster.jsx';

// Badge Data
const badges = [
    { id: 1, name: "Work Badge", description: "This is a 3D badge model representing achievements in work. It signifies excellence, dedication, and professional success.", icon: b1 },
    { id: 2, name: "Excellence Badge", description: "Awarded for outstanding performance and dedication in the workplace.", icon: b2 },
    { id: 3, name: "Leadership Badge", description: "Recognizes exceptional leadership and management skills.", icon: b3 },
    { id: 4, name: "Leadership Badge", description: "Recognizes exceptional leadership and management skills.", icon: b4 },
];

export default function WorkPage() {
    const [selectedBadge, setSelectedBadge] = useState(badges[1]);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { amount: 0.2, once: false });

    return (
        <motion.div
            ref={sectionRef}
            id="projects"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="min-h-screen bg-gradient-to-br  from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto " style={{marginBottom:'70px'}}>
                <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center mt-4">Works</h1>
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-3xl  overflow-hidden"
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    {/* Badge Display Section */}
                    <motion.div
                        className="relative h-[400px] lg:h-[600px] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <img 
                            src={selectedBadge.icon} 
                            alt={selectedBadge.name}
                            className="max-w-full max-h-full object-contain"
                        />
                    </motion.div>

                    {/* Description Section */}
                    <motion.div
                        className="flex flex-col justify-center p-8 lg:p-12 pb-3 "
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <h1 className="text-4xl font-bold text-gray-900 mb-2 mt-4">{selectedBadge.name}</h1>
                        <p className="text-lg text-gray-600 leading-relaxed mb-3">{selectedBadge.description}</p>

                        {/* Badge List */}
                        <div className="mt-auto mx-4">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Badges</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {badges.map((badge) => (
                                    <motion.div
                                        key={badge.id}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`cursor-pointer p-3 rounded-xl transition-all duration-300 ${
                                            selectedBadge.id === badge.id 
                                                ? "bg-blue-50 border-2 border-blue-500 shadow-lg" 
                                                : "bg-gray-50 border-2 border-transparent hover:border-gray-300"
                                        }`}
                                        onClick={() => setSelectedBadge(badge)}
                                    >
                                        <div className="aspect-square relative">
                                            <img 
                                                src={badge.icon} 
                                                alt={badge.name} 
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <p className="text-sm font-medium text-gray-700 mt-2 text-center truncate">
                                            {badge.name}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            <Poster />
        </motion.div>
    );
}
