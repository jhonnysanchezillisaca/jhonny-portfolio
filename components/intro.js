import CoverImage from "./cover-image";
import Contact from "./contact";

export default function Intro({ title, subtitle, mainImage, contact, resume, email }) {
  return (
    <section >
      <div className="grid grid-cols-1 md:grid-cols-2  items-center md:justify-between mt-16 mb-16 md:mb-12">
        <div>
          <h1 className="text-3xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
            {title}
          </h1>
          <h4 className="text-left text-xl mt-5">
            {subtitle}
          </h4>
        </div>
        <Contact contact={contact} email={email} resume={resume}/>
      </div>
      {/* <div className="mb-8 md:mb-16">
        <CoverImage title={title} image={mainImage} />
      </div> */}
    </section>
  );
}
