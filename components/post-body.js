import markdownStyles from './markdown-styles.module.css'
import { PortableText } from '@portabletext/react'

export default function PostBody({ content }) {
  return (
    <div className={`max-w-6xl text-lg mx-auto mb-8 md:mb-24 ${markdownStyles.markdown}`}>
      <PortableText value={content} />
    </div>
  )
}
