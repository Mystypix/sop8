import { GroupListFieldPlugin } from "tinacms"

export const customListItem = {
    ...GroupListFieldPlugin,
    name: 'group-list',
    Component: (props) => {
        const field = {
          ...props.field,
          itemProps: (item) => {
            return { label: item.name || item.url, key: item.name || item.url }
          },
        }
        return <GroupListFieldPlugin.Component {...props} field={field} />
    }
}