import Head from 'next/head'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import PostBody from '../components/post-body'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { indexQuery, homeQuery } from '../lib/queries'
import { getClient, overlayDrafts } from '../lib/sanity.server'
import Footer from '../components/footer'


export default function Index({ allProjects, home, preview }) {
  const contactInfo = { contact: home?.contactLabel, email: home?.contactEmail, resume: home?.resumeLabel }
  return (
    <>
      <Layout footerTitle={home?.footerTitle} contactInfo={contactInfo} preview={preview}>
        <Head>
          <title>{home?.title}</title>
        </Head>
          <Container>
            <Intro title={home?.title} subtitle={home?.subtitle} mainImage={home?.mainImage}
              {...contactInfo}
            />
            <div className="max-w-6xl mb-12">
              <h3 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                {home?.section1Title}
              </h3>
              <PostBody content={home?.section1Content} />
            </div>
            {allProjects.length > 0 && <MoreStories title={home?.projectsTitle ?? "Proyectos"} stories={allProjects} />}
          </Container>

      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allProjects = overlayDrafts(await getClient(preview).fetch(indexQuery))
  const home = await getClient(preview).fetch(homeQuery);
  return {
    props: { allProjects, home, preview },
  }
}
