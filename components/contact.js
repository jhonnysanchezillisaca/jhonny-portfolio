export default function Contact({ contact, resume, email }) {
    return (
        <div className="flex flex-col md:flex-row justify-end md:ml-10 mt-8 md:mb-12">
            <a href="/jhonny-cv.pdf" target="_blank" className="w-36 justify-center text-slate-700 hover:bg-slate-200 font-bold py-2 px-4 underline inline-flex items-center rounded mr-2 mb-2 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {resume ?? "Veure CV"}
            </a>
            <a href={`mailto:${email ?? "developer@jhonnysanchez.dev"}`} className="w-36 justify-center bg-slate-300 hover:bg-slate-400 text-slate-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {contact ?? "Contacte"}
            </a>
        </div>
    );
}