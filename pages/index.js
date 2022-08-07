import Head from 'next/head'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import PostBody from '../components/post-body'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { indexQuery, homeQuery } from '../lib/queries'
import { getClient, overlayDrafts } from '../lib/sanity.server'

export default function Index({ allProjects, home, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{home?.title}</title>
        </Head>
        <Container>
          <Intro title={home?.title} subtitle={home?.subtitle} mainImage={home?.mainImage}
/>
          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
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
