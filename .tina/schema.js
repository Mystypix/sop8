import { defineSchema, defineConfig } from 'tinacms'

export default defineSchema({
  collections: [
    {
      label: "Home",
      name: "home",
      path: "_pages/home",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
      ],
    },
    {
      label: "About",
      name: "about",
      path: "_pages/about",
      fields: [
        {
          label: 'Popis',
          name: 'description',
          type: 'rich-text',
        }
      ]
    },
    {
      label: "Structure",
      name: "structure",
      path: "_pages/structure",
      fields: [
        {
          label: 'I. housle',
          name: 'first_violins',
          type: 'object',
          list: true,
          ui: {
            component: 'group-list',
          },
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'player',
              type: 'string',
            }
          ]
        },
        {
          label: 'II. housle',
          name: 'second_violins',
          type: 'object',
          list: true,
          ui: {
            component: 'group-list',
          },
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'player',
              type: 'string',
            }
          ]
        },
        {
          label: 'Violy',
          name: 'viols',
          type: 'object',
          list: true,
          ui: {
            component: 'group-list',
          },
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'player',
              type: 'string',
            }
          ]
        },
        {
          label: 'Violoncella',
          name: 'violoncellos',
          type: 'object',
          list: true,
          ui: {
            component: 'group-list',
          },
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'player',
              type: 'string',
            }
          ]
        },
        {
          label: 'Kontrabasy',
          name: 'basses',
          type: 'object',
          list: true,
          ui: {
            component: 'group-list',
          },
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'player',
              type: 'string',
            }
          ]
        },
        {
          label: 'Flétny',
          name: 'flutes',
          type: 'object',
          list: true,
          ui: {
            component: 'group-list',
          },
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'player',
              type: 'string',
            }
          ]
        },
        {
          label: 'Hoboje',
          name: 'oboes',
          type: 'object',
          list: true,
          ui: {
            component: 'group-list',
          },
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'player',
              type: 'string',
            }
          ]
        },
        {
          label: 'Klarinety',
          name: 'clarinets',
          type: 'object',
          list: true,
          ui: {
            component: 'group-list',
          },
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'player',
              type: 'string',
            }
          ]
        },
        {
          label: 'Fagoty',
          name: 'bassoons',
          type: 'object',
          list: true,
          ui: {
            component: 'group-list',
          },
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'player',
              type: 'string',
            }
          ]
        },
        {
          label: 'Lesní rohy',
          name: 'french_horns',
          type: 'object',
          list: true,
          ui: {
            component: 'group-list',
          },
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'player',
              type: 'string',
            }
          ]
        },
        {
          label: 'Trubky',
          name: 'trumpets',
          type: 'object',
          list: true,
          ui: {
            component: 'group-list',
          },
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'player',
              type: 'string',
            }
          ]
        },
        {
          label: 'Trombóny',
          name: 'trombones',
          type: 'object',
          list: true,
          ui: {
            component: 'group-list',
          },
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'player',
              type: 'string',
            }
          ]
        },
        {
          label: 'Tuba',
          name: 'tube',
          type: 'object',
          list: true,
          ui: {
            component: 'group-list',
          },
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'player',
              type: 'string',
            }
          ]
        },
        {
          label: 'Bicí/tympán',
          name: 'drums',
          type: 'object',
          list: true,
          ui: {
            component: 'group-list',
          },
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'player',
              type: 'string',
            }
          ]
        }
      ]
    },
    {
      label: "Conductors",
      name: "conductors",
      path: "_pages/conductors",
      fields: [
        {
          label: 'Dirigenti',
          name: 'conductors',
          type: 'object',
          list: true,
          ui: {
            component: 'group-list',
          },
          fields: [
            {
              label: 'Fotka',
              name: 'photo',
              type: 'image',
            },
            {
              label: 'Jmeno',
              name: 'name',
              type: 'string',
            },
            {
              label: 'Text',
              name: 'text',
              type: 'string',
              ui: {
                component: 'textarea'
              }
            }
          ]
        }
      ]
    },
    {
      label: 'Concerts',
      name: 'concert',
      path: 'content/concert',
      fields: [
        {
          label: 'Nazev',
          name: 'name',
          type: 'string',
        },
        {
          label: 'Datum',
          name: 'date',
          type: 'datetime',
          ui: {
            dateFormat: 'DD.MM.YYYY'
          }
        },
        {
          label: 'Cas',
          name: 'time',
          type: 'string',
        },
        {
          label: 'Adresa',
          name: 'address',
          type: 'string',
        },
        {
          label: 'Dirigent', // TODO list dirigentu? nebo muzou byt i hosti?
          name: 'conductor',
          type: 'string',
        },
        {
          label: 'Soliste',
          name: 'solists',
          type: 'string',
        },
        {
          label: 'Cena',
          name: 'price',
          type: 'string',
        },
        {
          label: 'Popis',
          name: 'description',
          type: 'rich-text',
        }
      ]
    },
    {
      label: 'Galerie',
      name: 'gallery',
      path: '_pages/gallery',
      fields: [
        {
          label: 'Sekce',
          name: 'sections',
          type: 'object',
          fields: [
            {
              label: 'Nazev',
              name: 'name',
              type: 'string',
            },
            {
              label: 'Fotky',
              name: 'items',
              type: 'object',
              list: true,
              ui: {
                component: 'group-list',
              },
              fields: [
                {
                  label: 'Fotka',
                  name: 'url',
                  type: 'image',
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Contact',
      name: 'contact',
      path: '_pages/contact',
      fields: [
        {
          label: 'Email',
          name: 'email',
          type: 'string',
        },
        {
          label: 'Vedouci orchestru',
          name: 'leadership',
          type: 'object',
          fields: [
            {
              label: 'Name',
              name: 'name',
              type: 'string',
            },
            {
              label: 'Telefon',
              name: 'phone',
              type: 'string',
            },
            {
              label: 'Email',
              name: 'email',
              type: 'string',
            }
          ]
        },
        {
          label: 'Info o zkouskach',
          name: 'practice',
          type: 'object',
          fields: [
            {
              label: 'Text',
              name: 'text',
              type: 'string',
            },
            {
              label: 'Adressa',
              name: 'address',
              type: 'string',
            }
          ]
        }
      ]
    }
  ],
})

const apiURL = process.env.VERCEL_ENV === 'development'
  ? 'http://localhost:4001/graphql'
  : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/main`

export const tinaConfig = defineConfig({
  apiURL,
  mediaStore: async () => {
  // Load media store dynamically so it only loads in edit mode
    const pack = await import("next-tinacms-cloudinary")
    return pack.TinaCloudCloudinaryMediaStore
  },
  cmsCallback: (cms) => {
    cms.flags.set('tina-admin', true)
    import('./plugins.jsx').then(({ customListItem }) => {
      cms.plugins.add(customListItem)
    })
    return cms
  }
})