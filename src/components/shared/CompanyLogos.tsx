const CompanyLogos = () => {
    return (
        <section className="min-h-full py-16">
            <div className="lg:max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
                <h2 className="font-bold capitalize text-primary text-2xl mb-8">Top Employers of Ruhuna Alumni</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mt-12 lg:mt-0 lg:gap-10 place-items-center">
                    {[
                        "/images/Logo-1.png",
                        "/images/Logo-2.png",
                        "/images/Logo-3.png",
                    ].map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt="Employer logo"
                            className="h-12 lg:h-20 w-auto object-contain"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default CompanyLogos
