import Title from "@/components/title";

export default function Home() {
  return (
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
            <Title text="Your Ultimate Creative Companion!" />
            <h1 className="text-white mb-4 text-3xl font-extrabold sm:text-6xl xl:leading-20">
              Elevate Your Content with Our AI-Powered Writing Tool
            </h1>
            <p className="max-w-[500px] mx-auto mb-7 font-medium md:text-lg">
              Highly customizable Tailwind CSS template for AI - Tool, Startup, Software, App and Product Sites. Comes
              with everything you need - pages, features, sections, components and more that you can easily customize.
            </p>
            <a className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-200 hover:opacity-70 cursor-pointer">
              Start Your Free Trial
            </a>
          </div>
        </div>
        
        <div className="mt-17">
          <img className="mx-auto" src="images/hero-img.svg" alt="hero banner" />
        </div>
      </section>

      {/* features */}
      <section className="overflow-hidden pt-17.5 lg:pt-22.5 xl:pt-27.5 scroll-mt-17">
        <div className="max-w-[1222px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="text-center">
            <Title text="Some of Main Features" />
            <h2 className="text-white mb-4.5 text-4xl font-extrabold sm:text-5xl xl:leading-20">

              Key Features of Our Tool

            </h2>
            <p className="max-w-[714px] mx-auto mb-5 font-medium">
              Our AI writing tool is designed to empower you with exceptional
              writing capabilities, making the writing process more efficient,
              accurate, and enjoyable.
            </p>
          </div>
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

            </div>
            <div className="features-row-border w-full h-[1px]"></div>
            <div className="flex flex-wrap justify-center">
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <div className="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                  <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
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
                  <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
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
                  <span className="group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 rotate-180"></span>
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

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
