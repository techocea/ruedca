import EventsGallery from "@/components/shared/EventsGallery.tsx";
import { motion } from "motion/react";


const Gallery = () => {
    return (
        <section className="py-16 bg-light-neutral">
            <div className="lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                    className="text-center mb-16"
                >
                    <h2 className="capitalize text-primary text-2xl font-bold mb-4">
                        Recent Events Gallery
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore highlights from our latest career development events and workshops
                    </p>
                </motion.div>

                <EventsGallery/>
            </div>

        </section>
    );
};
export default Gallery
