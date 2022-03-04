
import { defineSchema } from "@tinacms/cli";

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
      label: "Structure",
      name: "structure",
      path: "_pages/structure",
      fields: [
        {
          label: 'I. housle',
          name: 'first_violins',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'players',
              type: 'string',
              list: true,
            }
          ]
        },
        {
          label: 'II. housle',
          name: 'second_violins',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'players',
              type: 'string',
              list: true,
            }
          ]
        },
        {
          label: 'Violy',
          name: 'viols',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'players',
              type: 'string',
              list: true,
            }
          ]
        },
        {
          label: 'Violoncella',
          name: 'violoncellos',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'players',
              type: 'string',
              list: true,
            }
          ]
        },
        {
          label: 'Kontrabasy',
          name: 'basses',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'players',
              type: 'string',
              list: true,
            }
          ]
        },
        {
          label: 'Flétny',
          name: 'flutes',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'players',
              type: 'string',
              list: true,
            }
          ]
        },
        {
          label: 'Hoboje',
          name: 'oboes',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'players',
              type: 'string',
              list: true,
            }
          ]
        },
        {
          label: 'Klarinety',
          name: 'clarinets',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'players',
              type: 'string',
              list: true,
            }
          ]
        },
        {
          label: 'Fagoty',
          name: 'bassoons',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'players',
              type: 'string',
              list: true,
            }
          ]
        },
        {
          label: 'Lesní rohy',
          name: 'french_horns',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'players',
              type: 'string',
              list: true,
            }
          ]
        },
        {
          label: 'Trubky',
          name: 'trumpets',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'players',
              type: 'string',
              list: true,
            }
          ]
        },
        {
          label: 'Trombóny',
          name: 'trombones',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'players',
              type: 'string',
              list: true,
            }
          ]
        },
        {
          label: 'Tuba',
          name: 'tube',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'players',
              type: 'string',
              list: true,
            }
          ]
        },
        {
          label: 'Bicí/tympán',
          name: 'drums',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'Jmeno hrace',
              name: 'players',
              type: 'string',
              list: true,
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
      name: 'concerts',
      path: '_pages/concerts',
      fields: [
        {
          label: 'Seznam koncertu',
          name: 'concerts',
          type: 'object',
          list: true,
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
        }
      ]
    }
  ],
})

export config = defineConfig({
  apiURL: `https://content.tinajs.io/content/${myClientId}/github/${myBranch}`,
})