import { AnimatePresence, motion } from 'motion/react';
import {useEffect, useState} from 'react'
import {ChevronLeft, ChevronRight} from "lucide-react";
import {HERO_SLIDES} from "@/utils/constants.ts";

const HeroBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(()=>{
            setCurrentSlide((prev)=>(prev + 1) % HERO_SLIDES.length)
        },5000);
        return ()=>clearInterval(timer);
    }, [HERO_SLIDES.length]);

    const nextSlide = ()=>{
        setCurrentSlide((prev)=>(prev + 1) % HERO_SLIDES.length)
    };

    const prevSlide = ()=>{
        setCurrentSlide((prev)=>(prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.8}}
                    className="absolute inset-0"
                >
                    <img src={HERO_SLIDES[currentSlide].image}
                         alt={HERO_SLIDES[currentSlide].title}
                         className="w-full h-full object-cover"/>
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-black/50"/>

            <div className="relative lg:max-w-6xl mx-auto z-10 px-4 sm:px-6 lg:px-8 text-center text-white">
                <AnimatePresence mode="wait">
                    <motion.div key={currentSlide}
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: -30}}
                                transition={{duration: 0.6}}
                                className="lg:max-w-2xl"
                    >

                        <motion.h1 className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed"
                                   initial={{opacity: 0, y: 30}}
                                   animate={{opacity: 1, y: 0}}
                                   transition={{duration: 0.8, delay: 0.4}}
                        >
                            {HERO_SLIDES[currentSlide].title}
                        </motion.h1>

                        <motion.p className="text-4xl font-bold mb-6"
                                  initial={{opacity: 0, y: 50}}
                                  animate={{opacity: 1, y: 0}}
                                  transition={{duration: 0.8, delay: 0.2}}
                        >
                            {HERO_SLIDES[currentSlide].subtitle}
                        </motion.p>

                        <motion.div initial={{opacity: 0, y: 30}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.8, delay: 0.6}}>
                            <button className="btn btn-primary uppercase">explore now <ChevronRight/></button>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
            >
                <ChevronLeft className="w-6 h-6 text-white"/>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
            >
                <ChevronRight className="w-6 h-6 text-white"/>
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
                {HERO_SLIDES.map((_, index:number) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-10 h-1 rounded-full transition-all duration-300 ${
                            index === currentSlide ? 'bg-primary' : 'bg-white/50'
                        }`}
                    />
                ))}
            </div>

        </section>
    );
}
export default HeroBanner
