import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, excerpt }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} image={coverImage} />
      </div>
      <div className="max-w-2xl">
        <div className="mb-6 text-lg">
          <p className="text-xl leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </>
  )
}
