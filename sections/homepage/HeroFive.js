import Link from 'next/link';

export default function HeroFive() {
    return (
        <>
            <section className="masthead -type-5">
                <div className="masthead__bg relative">
                    <img src="/img/home-5/header/bg.svg" alt="image" />
                    <div id="js-particles-1" data-particles-image="./img/part/1/1.png" className="absolute-full-center" />
                    <div id="js-particles-2" data-particles-image="./img/part/1/2.png" className="absolute-full-center" />
                    <div id="js-particles-3" data-particles-image="./img/part/1/3.png" data-particles-image-width={400} className="absolute-full-center" />
                </div>
                <div className="container">
                    <div className="row items-center y-gap-64 md:justify-center">
                        <div className="col-xl-7 col-lg-9 col-md-10">
                            <div className="masthead__content md:text-center relative z-2">
                                <div data-split="lines">
                                    <h1 className="masthead__title">
                                        Digital age<br className="md:d-none" /> adventure in <span className="text-accent">UX Design</span>
                                    </h1>
                                </div>
                                <div data-split="lines">
                                    <p className="masthead__text pt-24">
                                        Passionate about solving problems through creative<br className="sm:d-none" /> and digital products.
                                    </p>
                                </div>
                                <div className="masthead__buttons row y-gap-20 x-gap-24 md:justify-center items-center pt-40 sm:pt-24">
                                    <div className="col-auto">
                                        <Link href="/contact/contact-1" className="button -md -accent rounded-8 text-white">Get In Touch</Link>
                                    </div>
                                    <div className="col-auto">
                                        <a href="https://www.youtube.com/watch?v=ANYfx4-jyqY" className="decoration-none js-gallery" data-gallery="gallery1">
                                            <div className="button d-flex items-center">
                                                <span className="d-flex justify-center items-center bg-accent-light size-60 rounded-full mr-16">
                                                    <i className="ml-4 text-accent text-2xl icon-play" />
                                                </span>
                                                <p>Watch Video</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-auto">
                            <div className="masthead__image relative z-1">
                                <div className="js-rellax">
                                    <div className="atropos -no-shadow js-atropos">
                                        <div className="atropos-scale">
                                            <div className="atropos-rotate">
                                                <div className="atropos-inner overflow-visible d-flex justify-end">
                                                    <img src="/img/home-5/header/image.png" alt="image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};