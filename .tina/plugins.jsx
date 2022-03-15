import { GroupListFieldPlugin } from "tinacms"

export const customListItem = {
    ...GroupListFieldPlugin,
    name: 'group-list',
    Component: (props) => {
        const field = {
          ...props.field,
          itemProps: (item) => {
            return { label: item.player, key: item.player }
          },
        }
        return <GroupListFieldPlugin.Component {...props} field={field} />
    }
}