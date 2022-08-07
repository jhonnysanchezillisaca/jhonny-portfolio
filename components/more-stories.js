import PostPreview from '../components/post-preview'

// Only works for projects, for posts will have to compute the path
export default function MoreStories({ title, stories }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {stories?.map((story) => (
          <PostPreview
            key={story.slug}
            title={story.title}
            coverImage={story.coverImage}
            date={story.date}
            path={`projects/${story.slug}`}
            excerpt={story.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
