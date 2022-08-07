export const homePageSchema = {
    name: 'homePage',
    type: 'document',
    title: 'Home page',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true,
        }
      },
      {
        name: 'section1Title',
        title: 'Section 1 title',
        type: 'string',
      },
      {
        name: 'section1Content',
        title: 'Section 1 content',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'projectsTitle',
        title: 'Projects title',
        type: 'string',
      },
    ]
  }