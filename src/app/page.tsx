import Testimonials from "@/components/feesback";
import LogoCarousel from "@/components/logoCarousel";
import AnimatedSection from "@/components/showAnimation";
import Stars from "@/components/stars";
import Title from "@/components/title";
import { GoArrowRight } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";

export default function Home() {
  return (
    <div>
      <main>
        {/* hero section */}
        <section className="relative overflow-hidden z-10 pt-35 md:pt-40 xl:pt-45">

          <div className="max-w-7xl mx-auto">
            <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden -mx-28">
              <div className="absolute -z-1 -top-[128%] sm:-top-[107%] xl:-top-[73%] left-1/2 -translate-x-1/2 -u-z-10 hero-circle-gradient w-full h-[1282px] rounded-full max-w-[1282px]"></div>
              <div className="absolute -z-1 -top-[112%] sm:-top-[93%] xl:-top-[62%] left-1/2 -translate-x-1/2 -u-z-10 hero-circle-gradient w-full h-[1046px] rounded-full max-w-[1046px]"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10">
                <img src="/images/blur-02.webp" className="max-w-none" />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10">
                <img src="/images/blur-01.webp" className="max-w-none" />
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0 relative z-1">
            <div className="text-center">
              <AnimatedSection>
                <Title text="Your Ultimate Creative Companion!" />
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <h1 className="text-white mb-4 text-3xl font-extrabold sm:text-6xl xl:leading-20">
                  Elevate Your Content with Our AI-Powered Writing Tool
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={1}>
                <p className="max-w-[500px] mx-auto mb-7 font-medium md:text-lg">
                  Highly customizable Tailwind CSS template for AI - Tool, Startup, Software, App and Product Sites. Comes
                  with everything you need - pages, features, sections, components and more that you can easily customize.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={1.5}>
                <a className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-200 hover:opacity-70 cursor-pointer">
                  Start Your Free Trial
                </a>
              </AnimatedSection>

            </div>
          </div>

          <AnimatedSection>
            <div className="mt-17">
              <img className="mx-auto" src="images/hero-img.webp" alt="hero banner" />
            </div>
          </AnimatedSection>

        </section>

        {/* features */}
        <section className="overflow-hidden pt-17.5 lg:pt-22.5 xl:pt-27.5 scroll-mt-17">
          <div className="max-w-[1222px] mx-auto px-4 sm:px-8 xl:px-0">
            <div className="text-center">

              <AnimatedSection>
                <Title text="Some of Main Features" />
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h2 className="text-white mb-4.5 text-4xl font-extrabold sm:text-5xl xl:leading-20">

                  Key Features of Our Tool

                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <p className="max-w-[714px] mx-auto mb-5 font-medium">
                  Our AI writing tool is designed to empower you with exceptional
                  writing capabilities, making the writing process more efficient,
                  accurate, and enjoyable.
                </p>
              </AnimatedSection>

            </div>

            <AnimatedSection delay={0.6}>
              <div className="relative">
                <div className="features-row-border rotate-90 w-1/2 h-[1px] absolute top-1/2 left-1/2 -translate-y-1/2 lg:-translate-x-1/3 lg:left-1/4 hidden lg:block"></div>
                <div className="features-row-border rotate-90 w-1/2 h-[1px] absolute top-1/2 right-1/2 -translate-y-1/2 lg:right-[8.3%] hidden lg:block"></div>

                <div className="flex flex-wrap justify-center">
                  <div className="w-full sm:w-1/2 lg:w-1/3">
                    <div className="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                      <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                      <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                        <img src="/images/icon-01.svg" alt="icon" />
                      </span>
                      <h4 className="font-semibold text-lg text-white mb-4">
                        Intelligent Writing Assistance
                      </h4>
                      <p>
                        Our AI writing tool analyzes your content, suggests
                        improvements,
                      </p>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 lg:w-1/3">
                    <div className="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                      <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                      <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                        <img src="/images/icon-02.svg" alt="icon" />
                      </span>
                      <h4 className="font-semibold text-lg text-white mb-4">

                        Grammar and Spell Check

                      </h4>
                      <p>

                        Say goodbye to embarrassing typos and grammar mistakes

                      </p>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 lg:w-1/3">
                    <div className="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                      <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1"></span>
                      <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                        <img src="/images/icon-03.svg" alt="icon" />
                      </span>
                      <h4 className="font-semibold text-lg text-white mb-4">

                        Plagiarism Detection

                      </h4>
                      <p>

                        Originality is key, and our AI writing tool helps you
                        maintain it

                      </p>
                    </div>
                  </div>

                </div>
                <div className="features-row-border w-full h-[1px]"></div>
                <div className="flex flex-wrap justify-center">
                  <div className="w-full sm:w-1/2 lg:w-1/3">
                    <div className="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                      <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
                      <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                        <img src="/images/icon-04.svg" alt="icon" />
                      </span>
                      <h4 className="font-semibold text-lg text-white mb-4">
                        Voice to Text Conversion
                      </h4>
                      <p>
                        Transform your spoken words into written text easily & effortlessly
                      </p>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 lg:w-1/3">
                    <div className="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                      <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
                      <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                        <img src="/images/icon-05.svg" alt="icon" />
                      </span>
                      <h4 className="font-semibold text-lg text-white mb-4">
                        Style and Tone Adaptation
                      </h4>
                      <p>
                        Whether you need a professional, or positive tone it has everyone
                      </p>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 lg:w-1/3">
                    <div className="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                      <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
                      <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
                        <img src="/images/icon-06.svg" alt="icon" />
                      </span>
                      <h4 className="font-semibold text-lg text-white mb-4">
                        Content Generation
                      </h4>
                      <p>
                        Need inspiration or assistance with generating content?
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </AnimatedSection>

          </div>
        </section>

        {/* features 2 */}
        <section className="pt-12.5">
          {/* <MouseHalo /> */}
          {/* <div
          id="cursor-halo"
          className="pointer-events-none fixed z-50 hidden w-24 h-24 rounded-full bg-[rgb(134,70,244)] transition-transform duration-200 ease-out"
        ></div> */}
          {/* <div
          id="cursor-halo"
          style={{
            position: 'fixed',
            width: '50px',
            height: '50px',
            borderRadius: '100%',
            backgroundColor: 'red',
            top: '100px',
            left: '100px',
            zIndex: 9999,
            pointerEvents: 'none'
          }}
        ></div> */}
          {/* <div id="cursor-halo" 
          className="fixed w-80 h-80 rounded-full bg-[rgb(134,70,244)]/10 blur-3xl -top-20 -left-20 z-[40] pointer-events-none transition-transform duration-300 ease-out"></div>*/}
          <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
            <div className="grid sm:grid-cols-12 gap-7.5">

              <div className="sm:col-span-12 mouseHalo z-50">
                <AnimatedSection>
                  <div className="relative rounded-3xl features-box-border">
                    <div className="relative overflow-hidden rounded-3xl p-10 xl:p-15 box-hover">
                      <div className="absolute right-60 top-0">
                        <div className="w-[300px] h-[300px] bg-[rgb(134,70,244)] opacity-10 rounded-full blur-3xl absolute" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center z-0 -bottom-130">
                        <div className="w-[900px] h-[900px] bg-[rgb(134,70,244)] opacity-10 rounded-full blur-3xl absolute" />
                        <div className="w-[600px] h-[600px] bg-[rgb(134,70,244)] opacity-10 rounded-full blur-3xl absolute" />
                        <div className="w-[300px] h-[300px] bg-[rgb(134,70,244)] opacity-20 rounded-full blur-3xl absolute" />
                        <div className="w-[200px] h-[200px] bg-[rgb(134,70,244)] opacity-20 rounded-full blur-3xl absolute" />
                      </div>
                      <div className="flex items-center justify-between relative z-20">
                        <div className="max-w-[477px] w-full">
                          <AnimatedSection delay={0.3}>
                            <Title text="AI-Powered Writing Tool" />
                          </AnimatedSection>

                          <AnimatedSection delay={0.5}>
                            <h3 className="text-white mb-4.5 font-bold text-heading-4">
                              Intelligent Writing Assistance
                            </h3>
                          </AnimatedSection>

                          <AnimatedSection delay={0.7}>
                            <p className="mb-10">

                              Our AI writing tool is designed to empower you with
                              exceptional writing capabilities, making the writing
                              process...

                            </p>
                          </AnimatedSection>

                          <AnimatedSection delay={0.9}>
                            <a className="features-button-gradient relative inline-flex items-center gap-1.5 rounded-full py-3 px-6 text-white text-sm ease-in duration-300 cursor-pointer hover:[&_svg]:translate-x-1">
                              Learn more
                              <GoArrowRight size={20} className='mt-0.5 transition-all duration-300' />
                            </a>
                          </AnimatedSection>

                        </div>
                        <AnimatedSection delay={0.5}>
                          <div className="max-w-[428px] w-full hidden sm:block">
                            <img src="/images/big-icon.webp" />
                          </div>
                        </AnimatedSection>

                      </div>
                    </div>
                  </div>
                </AnimatedSection>

              </div>

              <div className="sm:col-span-7 mouseHalo">
                <AnimatedSection delay={0.3}>
                  <div className="relative rounded-3xl features-box-border">
                    <div className="relative overflow-hidden rounded-3xl px-11 pt-12.5 pb-14 box-hover box-hover-small">
                      <div className="relative z-20">
                        <AnimatedSection delay={0.5}>
                          <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-13.5 mx-auto">
                            <img src="/images/icon-05.svg" alt="icon" />
                          </span>
                        </AnimatedSection>

                        <AnimatedSection delay={0.7}>
                          <h3 className="text-white mb-4.5 font-semibold text-heading-6">
                            Empowering Writing Excellence
                          </h3>
                        </AnimatedSection>

                        <AnimatedSection delay={1}>
                          <p>
                            Our AI writing tool is designed to empower you with
                            exceptional writing capabilities, making the writing
                            process...
                          </p>
                        </AnimatedSection>

                      </div>
                      <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                        <div className="absolute left-0 bottom-0">
                          <img src="/images/blur-06.webp" alt="" />
                        </div>
                        <div className="absolute right-0 top-0">
                          <img src="/images/blur-07.webp" alt="" />
                        </div>
                        <div className="absolute right-[16%] top-[16%]">
                          <img src="/images/shape-04.svg" alt="" />
                        </div>
                        <div className="absolute left-0 bottom-0">
                          <img src="/images/blur-08.webp" alt="" />
                        </div>
                        <div className="absolute left-0 bottom-0">
                          <img src="/images/blur-09.webp" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              <div className="sm:col-span-5 mouseHalo">
                <AnimatedSection delay={0.8}>
                  <div className="relative rounded-3xl features-box-border">
                    <div className="relative overflow-hidden rounded-3xl px-11 pt-12.5 pb-14 box-hover box-hover-small">
                      <div className="relative z-20">
                        <AnimatedSection delay={1.1}>
                          <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-13.5 mx-auto">
                            <img src="/images/icon-07.svg" alt="icon" />
                          </span>
                        </AnimatedSection>

                        <AnimatedSection delay={1.4}>
                          <h3 className="text-white mb-4.5 font-semibold text-heading-6">

                            Grammar and Spell Check

                          </h3>
                        </AnimatedSection>

                        <AnimatedSection delay={1.7}>
                          <p>

                            Our AI writing tool is designed to empower you with
                            exceptional writing capabilities.

                          </p>
                        </AnimatedSection>

                      </div>
                      <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                        <div className="absolute right-[14%] top-[17%]">
                          <img src="/images/shape-05.svg" alt="" />
                        </div>
                        <div className="absolute left-0 bottom-0">
                          <img src="/images/blur-10.webp" alt="" />
                        </div>
                        <div className="absolute top-0 right-0">
                          <img src="/images/blur-11.webp" alt="" />
                        </div>
                        <div className="absolute top-0 right-0">
                          <img src="/images/blur-12.webp" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

              </div>


            </div>
          </div>
        </section>

        {/* pricing */}

        {/* <section className="relative z-20 overflow-hidden pt-22.5 lg:pt-27.5 xl:pt-32.5">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="relative top-18">
            <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden -my-55">
              <div className="absolute left-1/2 -translate-x-1/2 top-0">
                <img src="/images/blur-13.webp" alt="" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-0">
                <img src="/images/blur-14.webp" alt="" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-0">
                <img src="/images/blur-15.webp" alt="" />
              </div>
            </div>
            

          </div>
        </div>
      </section> */}

        <section className="relative z-20 overflow-visible pt-32 pb-15">
          <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
            <div className="relative">
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden max-h-[400px] -my-79">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[740px]">
                  <img src="/images/blur-13.webp" alt="" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[740px]">
                  <img src="/images/blur-14.webp" alt="" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[740px]">
                  <img src="/images/blur-15.webp" alt="" />
                </div>
              </div>
              {/* ستاره‌ها و سیاره */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] lg:w-[730px] h-[300px] lg:h-[350px] z-0">
                <div className="relative w-full h-full overflow-hidden">

                  <Stars />

                  <div className="absolute bottom-0 lg:-bottom-20 left-0 w-full h-[300px] lg:h-[350px] bg-black rounded-t-full z-10" />
                </div>
              </div>

              {/* محتوا */}
              <AnimatedSection>
                <div className="relative z-10 text-center mt-[150px] pb-5">
                  <Title text="Get access" />
                  <h2 className="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
                    Our Pricing Plan
                  </h2>
                  <p className="max-w-[670px] mx-auto font-medium">

                    Our AI writing tool is designed to empower you with exceptional
                    writing capabilities, making the writing process more efficient,
                    accurate, and enjoyable.

                  </p>
                </div>
              </AnimatedSection>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5 mt-8">
              <AnimatedSection>
                <div className="rounded-3xl bg-dark relative z-20 overflow-hidden pt-12.5 pb-10 px-8 xl:px-10 pricing-item-border">
                  <span className="absolute right-9 top-9">
                    <img src="/images/pricing-icon-01.svg" alt="iocn" />
                  </span>
                  <h3 className="font-semibold text-xl text-heading-6 text-white mb-5.5">
                    Starter
                  </h3>
                  <div className="flex items-center gap-3.5">
                    <h2 className="font-bold hero-subtitle-text text-5xl">
                      $10
                    </h2>
                    <p className="font-medium">
                      /month <br />
                      (billed annually)
                    </p>
                  </div>
                  <div className="my-10 w-full h-[1px] pricing-gradient-divider"></div>
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-5">
                      <img src="/images/pricing-icon-04.svg" alt="icon" />
                      <span>Subscription with levels</span>
                    </li>
                    <li className="flex items-center gap-5">
                      <img src="/images/pricing-icon-04.svg" alt="icon" />
                      <span>Advanced features included</span>
                    </li>
                    <li className="flex items-center gap-5">
                      <img src="/images/pricing-icon-04.svg" alt="icon" />
                      <span>Shared workspaces & tools</span>
                    </li>
                    <li className="flex items-center gap-5">
                      <img src="/images/pricing-icon-04.svg" alt="icon" />
                      <span>Premium versions functionality</span>
                    </li>
                    <li className="flex items-center gap-5">
                      <img src="/images/pricing-icon-04.svg" alt="icon" />
                      <span>Customizing the outputs</span>
                    </li>
                    <li className="flex items-center gap-5">
                      <img src="/images/pricing-icon-04.svg" alt="icon" />
                      <span>Priority customer support</span>
                    </li>
                  </ul>
                  <a className="features-button-gradient mt-11 w-full relative inline-flex items-center justify-center gap-1.5 rounded-lg py-3 px-6 text-white ease-in duration-300 cursor-pointer hover:[&_svg]:translate-x-1">
                    Get the plan
                    <GoArrowRight size={20} className='mt-0.5 transition-all duration-300' />
                  </a>
                  <p className="mt-4 text-sm text-center">
                    No extra hidden charge
                  </p>
                  <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                    <div className="absolute left-0 bottom-0 -z-1">
                      <img src="/images/blur-16.webp" alt="background" />
                    </div>
                    <div className="absolute left-0 top-0 -z-1">
                      <img src="/images/blur-17.webp" alt="background" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="rounded-3xl bg-dark relative z-20 overflow-hidden pt-12.5 pb-10 px-8 xl:px-10 pricing-item-border">
                  <span className="absolute right-9 top-9">
                    <img src="/images/pricing-icon-02.svg" alt="iocn" />
                  </span>
                  <h3 className="font-semibold text-heading-6 text-xl text-white mb-5.5">
                    Medium
                  </h3>
                  <div className="flex items-center gap-3.5">
                    <h2 className="font-bold hero-subtitle-text text-4xl">
                      $59
                    </h2>
                    <p className="font-medium">
                      /month <br />
                      (billed annually)
                    </p>
                  </div>
                  <div className="my-10 w-full h-[1px] pricing-gradient-divider"></div>
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-5">
                      <img src="/images/pricing-icon-04.svg" alt="icon" />
                      <span>Subscription with levels</span>
                    </li>
                    <li className="flex items-center gap-5">
                      <img src="/images/pricing-icon-04.svg" alt="icon" />
                      <span>Advanced features included</span>
                    </li>
                    <li className="flex items-center gap-5">
                      <img src="/images/pricing-icon-04.svg" alt="icon" />
                      <span>Shared workspaces & tools</span>
                    </li>
                    <li className="flex items-center gap-5">
                      <img src="/images/pricing-icon-04.svg" alt="icon" />
                      <span>Premium versions functionality</span>
                    </li>
                    <li className="flex items-center gap-5">
                      <img src="/images/pricing-icon-04.svg" alt="icon" />
                      <span>Customizing the outputs</span>
                    </li>
                    <li className="flex items-center gap-5">
                      <img src="/images/pricing-icon-04.svg" alt="icon" />
                      <span>Priority customer support</span>
                    </li>
                  </ul>
                  <a className="features-button-gradient mt-11 w-full relative inline-flex items-center justify-center gap-1.5 rounded-lg py-3 px-6 text-white ease-in duration-300 cursor-pointer hover:[&_svg]:translate-x-1">
                    Get the plan
                    <GoArrowRight size={20} className='mt-0.5 transition-all duration-300' />
                  </a>
                  <p className="mt-4 text-sm text-center">
                    No extra hidden charge
                  </p>
                  <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                    <div className="absolute left-0 bottom-0 -z-1">
                      <img src="/images/blur-16.webp" alt="background" />
                    </div>
                    <div className="absolute left-0 top-0 -z-1">
                      <img src="/images/blur-17.webp" alt="background" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <div className="rounded-3xl bg-dark relative z-20 overflow-hidden pt-12.5 pb-10 px-8 xl:px-10 pricing-item-border">
                  <span className="absolute right-9 top-9">
                    <img src="/images/pricing-icon-03.svg" alt="iocn" />
                  </span>
                  <h3 className="font-semibold text-heading-6 text-xl text-white mb-5.5">
                    Business
                  </h3>
                  <div className="flex items-center gap-3.5">
                    <h2 className="font-bold hero-subtitle-text text-4xl">
                      $289
                    </h2>
                    <p className="font-medium">
                      /month <br />
                      (billed annually)
                    </p>
                  </div>
                  <div className="my-10 w-full h-[1px] pricing-gradient-divider"></div>
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-5">
                      <img src="/images/pricing-icon-04.svg" alt="icon" />
                      <span>Subscription with levels</span>
                    </li>
                    <li className="flex items-center gap-5">
                      <img src="/images/pricing-icon-04.svg" alt="icon" />
                      <span>Advanced features included</span>
                    </li>
                    <li className="flex items-center gap-5">
                      <img src="/images/pricing-icon-04.svg" alt="icon" />
                      <span>Shared workspaces & tools</span>
                    </li>
                    <li className="flex items-center gap-5">
                      <img src="/images/pricing-icon-04.svg" alt="icon" />
                      <span>Premium versions functionality</span>
                    </li>
                    <li className="flex items-center gap-5">
                      <img src="/images/pricing-icon-04.svg" alt="icon" />
                      <span>Customizing the outputs</span>
                    </li>
                    <li className="flex items-center gap-5">
                      <img src="/images/pricing-icon-04.svg" alt="icon" />
                      <span>Priority customer support</span>
                    </li>
                  </ul>
                  <a className="features-button-gradient mt-11 w-full relative inline-flex items-center justify-center gap-1.5 rounded-lg py-3 px-6 text-white ease-in duration-300 cursor-pointer hover:[&_svg]:translate-x-1">
                    Get the plan
                    <GoArrowRight size={20} className='mt-0.5 transition-all duration-300' />
                  </a>
                  <p className="mt-4 text-sm text-center">
                    No extra hidden charge
                  </p>
                  <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                    <div className="absolute left-0 bottom-0 -z-1">
                      <img src="/images/blur-16.webp" alt="background" />
                    </div>
                    <div className="absolute left-0 top-0 -z-1">
                      <img src="/images/blur-17.webp" alt="background" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* feedback */}
        <section className="relative z-20 overflow-hidden pt-10 lg:pt-15 xl:pt-20 2xl:pt-45 pb-15">
          <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
            {/* title */}
            <div className="mb-15 text-center">
              <AnimatedSection>
                <Title text="Wall of love" />
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h2 className="text-white mb-4.5 text-2xl font-extrabold sm:text-5xl xl:text-heading-2">
                  What Our User Says
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <p className="max-w-[714px] mx-auto font-medium">
                  Our AI writing tool is designed to empower you with exceptional
                  writing capabilities, making the writing process more efficient,
                  accurate, and enjoyable.
                </p>
              </AnimatedSection>

            </div>
            <Testimonials />
            <LogoCarousel />
          </div>
        </section>

        {/* star for whole page */}
        {/* <section className="">
          <Stars />
      </section> */}

        {/* support */}
        <section>
          <div className="max-w-[1104px] mx-auto px-4 sm:px-8 xl:px-0">
            <div className="relative z-999 overflow-hidden rounded-[30px] bg-[rgb(3,0,20)] pt-25 px-4 sm:px-20 lg:px-27.5">
              <div className="max-w-[482px] w-full h-60 flex justify-center overflow-hidden absolute -z-1 -top-2 left-1/2 -translate-x-1/2">
                <Stars />
              </div>
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -z-1">
                  <img src="/images/blur-19.webp" alt="background" className="max-w-none" />
                </span>
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -z-1">
                  <img src="/images/blur-20.webp" alt="background" className="max-w-none" />
                </span>
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -z-1">
                  <img src="/images/blur-21.webp" alt="background" className="max-w-none" />
                </span>
              </div>
              {/* title */}
              <div className="mb-16 text-center relative z-999">
                <AnimatedSection >
                  <Title text="Need Any Help?" />
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <h2 className="text-white mb-4.5 text-2xl font-extrabold sm:text-5xl xl:text-heading-2">
                    Contact With Us
                  </h2>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                  <p className="max-w-[714px] mx-auto font-medium">
                    Our AI writing tool is designed to empower you with exceptional
                    writing capabilities, making the writing process more efficient,
                    accurate, and enjoyable.
                  </p>
                </AnimatedSection>

              </div>
              {/* form */}
              <div className="form-box-gradient relative overflow-hidden rounded-[25px] bg-dark p-6 sm:p-8 xl:p-15">
                <form className="relative z-10">
                  <div className="-mx-4 xl:-mx-10 flex flex-wrap">
                    <div className="w-full px-4 xl:px-5 md:w-1/2">
                      <div className="mb-9.5">
                        <AnimatedSection delay={0.6}>
                          <label className="text-white mb-2.5 block font-medium">Name</label>
                        </AnimatedSection>

                        <AnimatedSection delay={0.7}>
                          <input type="text" className="rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-violet-700 w-full py-3 px-6 outline-none" placeholder="Enter your Name" />
                        </AnimatedSection>
                      </div>
                    </div>
                    <div className="w-full px-4 xl:px-5 md:w-1/2">
                      <div className="mb-9.5">
                        <AnimatedSection delay={0.8}>
                          <label className="text-white mb-2.5 block font-medium">Email</label>
                        </AnimatedSection>
                        <AnimatedSection delay={0.9}>
                          <input type="text" className="rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-violet-700 w-full py-3 px-6 outline-none" placeholder="Enter your Email" />
                        </AnimatedSection>

                      </div>
                    </div>
                    <div className="w-full px-4 xl:px-5">
                      <div className="mb-10">
                        <AnimatedSection delay={1.1}>
                          <label className="text-white mb-2.5 block font-medium">Message</label>
                        </AnimatedSection>

                        <AnimatedSection delay={1.2}>
                          <textarea className="rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-violet-700 w-full py-5 px-6 outline-none" placeholder="Type your message"></textarea>
                        </AnimatedSection>

                      </div>
                    </div>
                    <div className="w-full px-4 xl:px-5">
                      <div className="text-center">
                        <AnimatedSection delay={1.3}>
                          <a className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-200 hover:opacity-70 cursor-pointer">
                            Send Message
                          </a>
                        </AnimatedSection>

                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* blog */}
        <section className="py-20 lg:py-25">
          <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
            {/* title */}
            <div className="mb-16 text-center">
              <AnimatedSection>
                <Title text="Read Our Latest Blogs" />
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h2 className="text-white mb-4.5 text-2xl font-extrabold sm:text-5xl xl:text-heading-2">
                  Latest Blogs & News
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <p className="max-w-[714px] mx-auto font-medium">
                  Our AI writing tool is designed to empower you with exceptional
                  writing capabilities, making the writing process more efficient,
                  accurate, and enjoyable.
                </p>
              </AnimatedSection>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
              <AnimatedSection delay={0.6}>
                <div className="group">
                  <div className="mb-6 overflow-hidden rounded-xl">
                    <img src="/images/blog-01.png" className="ease-linear w-full duration-500 scale-100 group-hover:scale-125" />
                  </div>
                  <div className="flex flex-wrap gap-2.5 items-center mb-4.5">
                    <span className="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300">
                      Design
                    </span>
                    <span className="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300">
                      Engineering
                    </span>
                  </div>
                  <h4>
                    <a className="text-white cursor-pointer font-semibold text-xl ease-in duration-300 hover:opacity-80">
                      Revolution in Content Creation and Communication
                    </a>
                  </h4>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisc elit sed do
                    eiusmod tempor incididunt ut labore et dolore magna oliumosd
                    aliqua...
                  </p>
                  <div className="flex items-center gap-4.5 flex-wrap mt-6">
                    <div className="flex items-center gap-2 flex-nowrap cursor-pointer ease-in duration-200 hover:text-white">
                      <GoPerson />
                      <span className="text-sm">Alex Demo</span>
                    </div>
                    <div className="flex items-center gap-2 flex-nowrap cursor-pointer ease-in duration-200 hover:text-white">
                      <LuCalendarDays />
                      <span className="text-sm">25 Mar, 2025</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.8}>
                <div className="group">
                  <div className="mb-6 overflow-hidden rounded-xl">
                    <img src="/images/blog-02.png" className="ease-linear w-full duration-500 scale-100 group-hover:scale-125" />
                  </div>
                  <div className="flex flex-wrap gap-2.5 items-center mb-4.5">
                    <span className="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300">

                      Development

                    </span>
                    <span className="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300">

                      Security

                    </span>
                  </div>
                  <h4>
                    <a className="text-white cursor-pointer font-semibold text-xl ease-in duration-300 hover:opacity-80">

                      How AI Writing Tools Empower Writers to Speed up there Writing

                    </a>
                  </h4>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisc elit sed do
                    eiusmod tempor incididunt ut labore et dolore magna oliumosd
                    aliqua...
                  </p>
                  <div className="flex items-center gap-4.5 flex-wrap mt-6">
                    <div className="flex items-center gap-2 flex-nowrap cursor-pointer ease-in duration-200 hover:text-white">
                      <GoPerson />
                      <span className="text-sm">Hendary Jonson</span>
                    </div>
                    <div className="flex items-center gap-2 flex-nowrap cursor-pointer ease-in duration-200 hover:text-white">
                      <LuCalendarDays />
                      <span className="text-sm">12 Feb, 2025</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={1}>
                <div className="group">
                  <div className="mb-6 overflow-hidden rounded-xl">
                    <img src="/images/blog-03.png" className="ease-linear w-full duration-500 scale-100 group-hover:scale-125" />
                  </div>
                  <div className="flex flex-wrap gap-2.5 items-center mb-4.5">
                    <span className="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300">
                      Products
                    </span>
                    <span className="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300">

                      Blog and articles

                    </span>
                  </div>
                  <h4>
                    <a className="text-white cursor-pointer font-semibold text-xl ease-in duration-300 hover:opacity-80">
                      Revolution in Content Creation and Communication
                    </a>
                  </h4>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisc elit sed do
                    eiusmod tempor incididunt ut labore et dolore magna oliumosd
                    aliqua...
                  </p>
                  <div className="flex items-center gap-4.5 flex-wrap mt-6">
                    <div className="flex items-center gap-2 flex-nowrap cursor-pointer ease-in duration-200 hover:text-white">
                      <GoPerson />
                      <span className="text-sm">Piter Mecraow</span>
                    </div>
                    <div className="flex items-center gap-2 flex-nowrap cursor-pointer ease-in duration-200 hover:text-white">
                      <LuCalendarDays />
                      <span className="text-sm">10 Jan, 2025</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
            <div className="cta-box-gradient bg-dark rounded-[30px] relative overflow-hidden px-4 py-20 lg:py-25 z-999">
              <div className="absolute bottom-0 left-0 -z-1">
                <img src="/images/grid.webp" />
              </div>
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute left-1/2 bottom-0 -translate-x-1/2 -z-1">
                  <img src="/images/blur-22.webp" className="max-w-none" />
                </span>
                <span className="absolute left-1/2 bottom-0 -translate-x-1/2 -z-1">
                  <img src="/images/blur-23.webp" className="max-w-none" />
                </span>
                <span className="absolute left-1/2 bottom-0 -translate-x-1/2 -z-1">
                  <img src="/images/blur-24.webp" className="max-w-none" />
                </span>
              </div>
              <div className="max-w-[482px] w-full h-60 flex justify-center overflow-hidden absolute -z-1 -bottom-30 left-1/2 -translate-x-1/2">
                <Stars />
              </div>
              <div className="text-center">
                <AnimatedSection>
                  <Title text="Try our tool for Free" />
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <h2 className="text-white mb-4.5 text-2xl font-extrabold sm:text-5xl xl:text-heading-2">
                    What are you waiting for?
                  </h2>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                  <p className="max-w-[714px] mx-auto font-medium mb-9">
                    Our AI writing tool is designed to empower you with exceptional
                    writing capabilities, making the writing process more efficient,
                    accurate, and enjoyable.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                  <a className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-200 hover:opacity-70 cursor-pointer">
                    Get Started for Free
                  </a>
                </AnimatedSection>

              </div>
            </div>
          </div>
        </section>

        {/* news & updates */}
        <section className="pt-17.5 sm:pt-22.5 xl:pt-27.5 pb-11">
          <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
            <div className="flex flex-wrap items-center justify-between gap-10">
              <div className="max-w-[352px] w-full">
                <AnimatedSection>
                  <h3 className="font-semibold text-heading-5 text-2xl lg:text-3xl text-white mb-2">
                    News & Update
                  </h3>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <p>
                    Keep up to date with everything about our tool
                  </p>
                </AnimatedSection>

              </div>
              <div className="max-w-[534px] w-full">
                <form>
                  <div className="flex items-center gap-4">
                    <div className="max-w-[395px] w-full">
                      <AnimatedSection delay={0.3}>
                        <input type="text" className="rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-violet-700 w-full py-3 px-6 outline-none" placeholder="Enter your Email" />
                      </AnimatedSection>

                    </div>
                    <AnimatedSection delay={0.5}>
                      <a className="features-button-gradient relative inline-flex items-center gap-1.5 rounded-lg py-3.5 px-7 text-white text-sm ease-in transition duration-300 cursor-pointer">
                        Subscribe
                      </a>
                    </AnimatedSection>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="relative z-10 pb-17.5 lg:pb-22.5 xl:pb-27.5">
        <div className="absolute bottom-0 left-0 w-full flex flex-col gap-3 -z-1 opacity-50">
          <div className="w-full h-[1.24px] footer-bg-gradient"></div>
          <div className="w-full h-[2.47px] footer-bg-gradient"></div>
          <div className="w-full h-[3.71px] footer-bg-gradient"></div>
          <div className="w-full h-[4.99px] footer-bg-gradient"></div>
          <div className="w-full h-[6.19px] footer-bg-gradient"></div>
          <div className="w-full h-[7.42px] footer-bg-gradient"></div>
          <div className="w-full h-[8.66px] footer-bg-gradient"></div>
          <div className="w-full h-[9.90px] footer-bg-gradient"></div>
          <div className="w-full h-[13px] footer-bg-gradient"></div>
        </div>
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 relative pt-17.5">
          <div className="w-full h-[1px] footer-divider-gradient absolute top-0 left-0"></div>
          <div className="flex flex-wrap justify-between">
            <div className="mb-10 max-w-[571px] w-full">
              <AnimatedSection >
                <a className="mb-8
              6.5 inline-block">
                  <img src="/images/logo.svg" alt="logo" />
                </a>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="mb-8 xl:w-4/5">
                  AI writing tool is designed to empower you with exceptional writing
                  capabilities.
                </p>
              </AnimatedSection>

              <div className="flex items-center gap-5">
                <AnimatedSection delay={0.3}>
                  <a className="hover:text-white ease-in duration-200 cursor-pointer">
                    <MdOutlineFacebook size={28} />
                  </a>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                  <a className="hover:text-white ease-in duration-200 cursor-pointer">
                    <FaXTwitter size={28} />
                  </a>
                </AnimatedSection>

                <AnimatedSection delay={0.5}>
                  <a className="hover:text-white ease-in duration-200 cursor-pointer">
                    <IoLogoGithub size={28} />
                  </a>
                </AnimatedSection>

              </div>
              <AnimatedSection delay={0.7}>
                <p className="font-medium mt-5.5">
                  AI Tool, LLC. All rights reserved.
                </p>
              </AnimatedSection>

            </div>
            <div className="max-w-[571px] w-full">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-10">
                <div>
                  <h5 className="font-medium mt-5.5 text-white text-lg mb-2">Products</h5>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <AnimatedSection delay={0.8}>
                        <a className="font-medium ease-in duration-200 hover:text-white cursor-pointer">Features</a>
                      </AnimatedSection>
                    </li>

                    <li>
                      <AnimatedSection delay={0.9}>
                        <a className="font-medium ease-in duration-200 hover:text-white cursor-pointer">Integrations</a>
                      </AnimatedSection>

                    </li>

                    <li>
                      <AnimatedSection delay={1}>
                        <a className="font-medium ease-in duration-200 hover:text-white cursor-pointer">Pricing</a>
                      </AnimatedSection>

                    </li>

                    <li>
                      <AnimatedSection delay={1.1}>
                        <a className="font-medium ease-in duration-200 hover:text-white cursor-pointer">Changelog</a>
                      </AnimatedSection>

                    </li>

                    <li>
                      <AnimatedSection delay={1.2}>
                        <a className="font-medium ease-in duration-200 hover:text-white cursor-pointer">Roadmap</a>
                      </AnimatedSection>

                    </li>

                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mt-5.5 text-white text-lg mb-2">Company</h5>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <AnimatedSection delay={1.3}>
                        <a className="font-medium ease-in duration-200 hover:text-white cursor-pointer">Privacy Policy</a>
                      </AnimatedSection>

                    </li>
                    <li>
                      <AnimatedSection delay={1.4}>
                        <a className="font-medium ease-in duration-200 hover:text-white cursor-pointer">Refund Policy</a>
                      </AnimatedSection>

                    </li>
                    <li>
                      <AnimatedSection delay={1.5}>
                        <a className="font-medium ease-in duration-200 hover:text-white cursor-pointer">Support</a>
                      </AnimatedSection>

                    </li>
                    <li>
                      <AnimatedSection delay={1.6}>
                        <a className="font-medium ease-in duration-200 hover:text-white cursor-pointer">Community</a>
                      </AnimatedSection>

                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mt-5.5 text-white text-lg mb-2">Support</h5>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <AnimatedSection delay={1.7}>
                        <a className="font-medium ease-in duration-200 hover:text-white cursor-pointer">Features</a>
                      </AnimatedSection>

                    </li>
                    <li>
                      <AnimatedSection delay={1.8}>
                        <a className="font-medium ease-in duration-200 hover:text-white cursor-pointer">Integrations</a>
                      </AnimatedSection>

                    </li>
                    <li>
                      <AnimatedSection delay={1.9}>
                        <a className="font-medium ease-in duration-200 hover:text-white cursor-pointer">Pricing</a>
                      </AnimatedSection>

                    </li>
                    <li>
                      <AnimatedSection delay={2}>
                        <a className="font-medium ease-in duration-200 hover:text-white cursor-pointer">Changelog</a>
                      </AnimatedSection>

                    </li>
                    <li>
                      <AnimatedSection delay={2.1}>
                        <a className="font-medium ease-in duration-200 hover:text-white cursor-pointer">Roadmap</a>
                      </AnimatedSection>

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>

  );
}

// <div className="max-w-[830px] w-full h-[830px] rounded-full bg-dark absolute left-1/2 -translate-x-1/2 top-0 pricing-circle"></div>