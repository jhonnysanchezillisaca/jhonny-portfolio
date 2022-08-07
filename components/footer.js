import Container from './container'

export default function Footer({ title }) {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-16 flex flex-col lg:flex-row items-center justify-between">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            {title}
          </h3>
          <div className="flex flex-col md:flex-row justify-end ml-10 mt-8 md:mb-12 space-x-4  md:space-y-0 space-y-2">
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
      </Container>
    </footer>
  )
}
