import Container from './container'
import Contact from './contact'

export default function Footer({ title, contact, email, resume }) {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-16 flex flex-col lg:flex-row items-center justify-between">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            {title}
          </h3>
          <Contact contact={contact} email={email} resume={resume}/>
        </div>
      </Container>
    </footer>
  )
}
