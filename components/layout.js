import Alert from '../components/alert'
import Meta from '../components/meta'
import Footer from './footer'

export default function Layout({ preview, children, footerTitle, contactInfo }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
        <Footer title={`${footerTitle ?? "Alba Cirera - Sociòloga"}`} {...contactInfo} />
      </div>
    </>
  )
}
