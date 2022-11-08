import Alert from '../components/alert'
import Meta from '../components/meta'
import Footer from './footer'

export default function Layout({ preview, children, footerTitle, contactInfo }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main className="max-w-6xl mx-auto">{children}</main>
        <Footer title={`${footerTitle ?? "Jhonny Sánchez - Software Engineer"}`} {...contactInfo} />
      </div>
    </>
  )
}
