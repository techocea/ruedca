import {motion} from "motion/react";
import Blogs from "@/components/shared/Blogs.tsx";
import {BLOG_POSTS} from "@/utils/constants.ts";

const BlogSection = () => {
    return (
        <section className="min-h-screen bg-white py-16">
            <div className="lg:max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                    className="text-center mb-16"
                >
                    <h2 className="capitalize text-primary text-2xl font-bold mb-4">
                        Latest Career Insights
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stay updated with the latest career advice, industry trends, and professional development tips
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((blog) => (
                        <Blogs key={blog.title}
                               tags={blog.tags}
                               description={blog.description}
                               title={blog.title}
                               date={blog.date}
                               readTime={blog.readTime}
                               image={blog.image}/>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default BlogSection
