import { GroupListFieldPlugin } from "tinacms"

export const customListItem = {
    ...GroupListFieldPlugin,
    name: 'group-list',
    Component: (props) => {
        const field = {
          ...props.field,
          itemProps: (item) => {
            return { label: item.name, key: item.name }
          },
        }
        return <GroupListFieldPlugin.Component {...props} field={field} />
    }
}