import { motion } from "motion/react"
import {GALLERY_IMAGES} from "@/utils/constants.ts";
import {useState} from "react";
import {X, ZoomIn} from "lucide-react";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    }
};

const EventsGallery = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    return (
        <section>


            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 space-y-2"
            >
                {GALLERY_IMAGES.map((image, index) => (
                    <motion.div
                        key={image.id}
                        variants={{item}}
                        whileHover={{scale: 1.02}}
                        className="break-inside-avoid cursor-pointer group"
                        onClick={() => setSelectedImage(index)}
                    >
                        <div className={`${image.aspect} rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 relative`}>
                            <img
                                src={image.image}
                                alt={image.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <ZoomIn className="w-8 h-8 text-white"/>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                                <span className="inline-block mt-2 px-3 py-1 bg-career-green/80 text-white text-sm rounded-full">
                    {image.category}
                  </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {selectedImage !== null && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.div
                        initial={{scale: 0.8, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        exit={{scale: 0.8, opacity: 0}}
                        className="relative max-w-4xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
                        >
                            <X className="w-8 h-8"/>
                        </button>
                        <div className="aspect-[4/3] rounded-lg overflow-hidden">
                            <img
                                src={GALLERY_IMAGES[selectedImage].image}
                                alt={GALLERY_IMAGES[selectedImage].title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                                <div className="p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">{GALLERY_IMAGES[selectedImage].title}</h3>
                                    <span className="px-4 py-2 bg-career-green rounded-full">
                    {GALLERY_IMAGES[selectedImage].category}
                  </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
export default EventsGallery
