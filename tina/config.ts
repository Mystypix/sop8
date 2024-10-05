import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "homepage",
        label: "Úvodní stránka",
        path: "content/homepage",
        fields: [
          {
            type: "rich-text",
            name: "introText",
            label: "Úvodní text",
            required: true,
          },
        ],
      },
      {
        name: "aboutUs",
        label: "O nás",
        path: "content/about-us",
        fields: [
          {
            type: "rich-text",
            name: "aboutUsText",
            label: "Text o nás",
            required: true,
          },
        ]
      },
      {
        name: 'structure',
        label: 'Obsazení',
        path: 'content/structure',
        fields: [
          {
            label: 'I. housle',
            name: 'first_violins',
            type: 'object',
            list: true,
            ui: {
              component: 'group-list',
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.name };
              },
            },
            fields: [
              {
                label: 'Jmeno hrace',
                name: 'name',
                type: 'string',
              },
              {
                label: 'Koncertni?',
                name: 'concert',
                type: 'boolean',
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
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.name };
              },
            },
            fields: [
              {
                label: 'Jmeno hrace',
                name: 'name',
                type: 'string',
              },
              {
                label: 'Koncertni?',
                name: 'concert',
                type: 'boolean',
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
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.name };
              },
            },
            fields: [
              {
                label: 'Jméno hráče',
                name: 'name',
                type: 'string',
              },
              {
                label: 'Koncertní?',
                name: 'concert',
                type: 'boolean',
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
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.name };
              },
            },
            fields: [
              {
                label: 'Jméno hráče',
                name: 'name',
                type: 'string',
              },
              {
                label: 'Koncertní?',
                name: 'concert',
                type: 'boolean',
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
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.name };
              },
            },
            fields: [
              {
                label: 'Jméno hráče',
                name: 'name',
                type: 'string',
              },
              {
                label: 'Koncertní?',
                name: 'concert',
                type: 'boolean',
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
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.name };
              },
            },
            fields: [
              {
                label: 'Jméno hráče',
                name: 'name',
                type: 'string',
              },
              {
                label: 'Koncertní?',
                name: 'concert',
                type: 'boolean',
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
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.name };
              },
            },
            fields: [
              {
                label: 'Jméno hráče',
                name: 'name',
                type: 'string',
              },
              {
                label: 'Koncertní?',
                name: 'concert',
                type: 'boolean',
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
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.name };
              },
            },
            fields: [
              {
                label: 'Jméno hráče',
                name: 'name',
                type: 'string',
              },
              {
                label: 'Koncertní?',
                name: 'concert',
                type: 'boolean',
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
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.name };
              },
            },
            fields: [
              {
                label: 'Jméno hráče',
                name: 'name',
                type: 'string',
              },
              {
                label: 'Koncertní?',
                name: 'concert',
                type: 'boolean',
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
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.name };
              },
            },
            fields: [
              {
                label: 'Jméno hráče',
                name: 'name',
                type: 'string',
              },
              {
                label: 'Koncertní?',
                name: 'concert',
                type: 'boolean',
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
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.name };
              },
            },
            fields: [
              {
                label: 'Jméno hráče',
                name: 'name',
                type: 'string',
              },
              {
                label: 'Koncertní?',
                name: 'concert',
                type: 'boolean',
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
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.name };
              },
            },
            fields: [
              {
                label: 'Jméno hráče',
                name: 'name',
                type: 'string',
              },
              {
                label: 'Koncertní?',
                name: 'concert',
                type: 'boolean',
              }
            ]
          }
        ]
      },
      {
        label: "Dirigenti",
        name: "conductors",
        path: "content/conductors",
        fields: [
          {
            label: 'Dirigenti',
            name: 'conductors',
            type: 'object',
            list: true,
            ui: {
              component: 'group-list',
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.name };
              },
            },
            fields: [
              {
                label: 'Fotka',
                name: 'photo',
                type: 'image',
              },
              {
                label: 'Jméno',
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
        label: 'Kontakty',
        name: 'contact',
        path: 'content/contact',
        fields: [
          {
            label: 'Email',
            name: 'email',
            type: 'string',
          },
          {
            label: 'Vedoucí orchestru',
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
            label: 'Info o zkouškách',
            name: 'practice',
            type: 'object',
            fields: [
              {
                label: 'Text',
                name: 'text',
                type: 'string',
              },
              {
                label: 'Adresa',
                name: 'address',
                type: 'string',
              }
            ]
          }
        ]
      },
      {
        label: 'Koncerty',
        name: 'concerts',
        path: 'content/concerts',
        fields: [
          {
            label: 'Koncerty',
            name: 'concerts',
            type: 'object',
            list: true,
            ui: {
                component: 'group-list',
                itemProps: (item) => {
                  // Field values are accessed by item?.<Field name>
                  return { label: item?.date };
                },
            },
            fields: [
              {
                label: 'Program',
                name: 'agenda',
                type: 'object',
                list: true,
                ui: {
                  component: 'group-list',
                  itemProps: (item) => {
                    // Field values are accessed by item?.<Field name>
                    return { label: item?.composition };
                  },
                },
                fields: [
                  {
                    label: 'Skladatel',
                    name: 'composer',
                    type: 'string',
                  },
                  {
                    label: 'Skladba',
                    name: 'composition',
                    type: 'string',
                  },
                ]
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
                label: 'Čas',
                name: 'time',
                type: 'string',
              },
              {
                label: 'Adresa',
                name: 'address',
                type: 'string',
              },
              {
                label: 'Dirigent',
                name: 'conductor',
                type: 'string',
              },
              {
                label: 'Sólisté',
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
                type: 'string',
                ui: {
                  component: 'textarea'
                }
              },
              {
                label: 'Pozvánka',
                name: 'invitation',
                type: 'image',
              }
            ],
          },
        ]
      },
      {
        label: 'Galerie',
        name: 'gallery',
        path: 'content/gallery',
        fields: [
          {
            label: 'Sekce',
            name: 'sections',
            type: 'object',
            list: true,
            fields: [
              {
                label: 'Název',
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
    ],
  },
});
