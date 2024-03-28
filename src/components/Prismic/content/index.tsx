import { PrismicRichText } from '@prismicio/react'

import { Heading, Paragraph, Strong, Preformatted } from '../'

const ContentPrismic = ({ data }: { data: [] }) => {
  return (
    <div className="px-4 article-content">
      <PrismicRichText field={data} components={{
        heading2: ({ children }) => <Heading>{children}</Heading>,
        paragraph: ({ children }) => <Paragraph>{children}</Paragraph>,
        strong: ({ children }) => <Strong>{children}</Strong>,
        preformatted: ({ text }) => <Preformatted code={text ?? ''} />,
        oListItem: ({ text }) => <li className="">{text}</li>,
      }} />
    </div>
  )
}

export default ContentPrismic
