import {AnimatePresence, motion} from "motion/react";
import {useEffect, useState} from "react";
import {ABOUT_SLIDES} from "@/utils/constants.ts";

const AboutSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(()=>{
            setCurrentSlide((prev)=>(prev+1) % ABOUT_SLIDES.length)
        },5000);
        return ()=>clearInterval(timer);
    }, []);

    return (
        <section className="min-h-full bg-white flex items-center justify-center py-16">
            <div className="lg:max-w-6xl mx-auto px-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{opacity: 0, x:50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        className="flex flex-col lg:flex-row items-center justify-between w-full">
                        <div className="flex-1 flex-col space-y-3">
                            <div className="bg-yellow-500 rounded-full uppercase w-fit py-1.5 leading-tight px-3.5 text-xs text-yellow-100 font-semibold">
                                {ABOUT_SLIDES[currentSlide].badge}
                            </div>

                            <h2 className="font-bold capitalize text-primary text-2xl">{ABOUT_SLIDES[currentSlide].title}</h2>

                            <p>{ABOUT_SLIDES[currentSlide].description}</p>

                            <ul className="space-y-3">
                                {ABOUT_SLIDES[currentSlide].points && ABOUT_SLIDES[currentSlide].points.map((point,i)=>(
                                    <li key={i} className="list-disc ml-4">{point}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-1 items-center justify-center">
                            <img
                                src={ABOUT_SLIDES[currentSlide].imageSrc}
                                alt="about us — Ruhuna Career Circle"
                                className="w-[80%] h-full rounded-xl object-cover"
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
export default AboutSection
