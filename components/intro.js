import CoverImage from "./cover-image";

export default function Intro({ title, subtitle, mainImage }) {
  return (
    <section >
      <div className="grid grid-cols-1 md:grid-cols-2  items-center md:justify-between mt-16 mb-16 md:mb-12">
        <div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            {title}
          </h1>
          <h4 className="text-left text-lg mt-5">
            {subtitle}
          </h4>
        </div>
        <div className="flex flex-col md:flex-row justify-end md:ml-10 mt-8 md:mb-12 space-x-4  md:space-y-0 space-y-2">
          <button class="max-w-xs bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contacto
          </button>
          <a href="/alba-cv.pdf" target="_blank" className="text-slate-700 font-bold py-2 px-4 underline">
            Ver CV
          </a>
        </div>
      </div>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} image={mainImage} />
      </div>
    </section>
  );
}
