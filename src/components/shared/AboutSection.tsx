import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";      // ← same API, better DX
import { ABOUT_SLIDES } from "@/utils/constants";

const SLIDE_INTERVAL = 5000;

const AboutSection = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const id = setInterval(
            () => setCurrent(prev => (prev + 1) % ABOUT_SLIDES.length),
            SLIDE_INTERVAL
        );
        return () => clearInterval(id);
    }, []);

    const slide = ABOUT_SLIDES[current];

    return (
        <section className="bg-white py-16">
            <div className="mx-auto flex lg:max-w-6xl flex-col gap-10 px-4 lg:flex-row lg:items-center">
                {/* ───────────── Text block ───────────── */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}                        /* re‑mount on index change */
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex flex-1 flex-col space-y-6"
                    >
            <span className="w-fit rounded-full bg-yellow-500 px-3.5 py-1.5 text-xs font-semibold uppercase leading-tight text-yellow-50">
              {slide.badge}
            </span>

                        <h2 className="text-2xl font-bold capitalize text-primary md:text-3xl">
                            {slide.title}
                        </h2>

                        <p className="max-w-prose text-sm leading-relaxed text-gray-700 md:text-base">
                            {slide.description}
                        </p>

                        {slide.points?.length && (
                            <ul className="ml-4 list-disc space-y-2 text-gray-700">
                                {slide.points.map((pt, i) => (
                                    <li key={i}>{pt}</li>
                                ))}
                            </ul>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* ───────────── Image block ───────────── */}
                <div className="flex flex-1 items-center justify-center">
                    <motion.img
                        key={slide.imageSrc}
                        src={slide.imageSrc}
                        alt={slide.imageSrc ?? "About — Ruhuna Career Circle"}
                        className="h-full w-full max-w-sm rounded-xl object-cover lg:max-w-none"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
