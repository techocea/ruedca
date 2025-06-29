import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
    title: string;
    description: string;
    tags: string[];
    readTime: string;
    date: string;
    image?: string;
}

const Blogs = ({ title, description, tags, readTime, date, image }: BlogCardProps) => {
    const defaultImage = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

    return (
        <motion.article
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
        >
            <div className="aspect-video relative overflow-hidden">
                <img
                    src={image || defaultImage}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
            </div>

            <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{readTime}</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-primary transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-white text-primary text-sm rounded-full border border-primary/20"
                        >
              {tag}
            </span>
                    ))}
                </div>

                <div className="flex items-center justify-between">
                    <button className="font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </motion.article>
    );
}
export default Blogs
