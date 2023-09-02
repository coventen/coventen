import { currentUser } from "@/firebase/oauth.config"
import { NotificationOptions, NotificationWhere } from "@/gql/graphql";
import Cookies from "js-cookie";

const getNotifications = async (where:NotificationWhere, options:any ) => {

  const token = Cookies.get('conventenToken');

  const res = fetch('https://coventenapp.el.r.appspot.com/', {
      method: 'POST',
      headers: {
          "authorization": `Bearer ${token}`,
          'Content-Type': 'application/json'
      },
        body: JSON.stringify({
            query: `query Notifications($where: NotificationWhere, $options: NotificationOptions) {
                notifications(where: $where, options: $options) {
                  title
                  description
                  createdAt
                }
              }`,
              variables: {
                where:where,
                options:options
              },
        })
    })

    const {data} = await res.then(res => res.json())
    return data?.users[0]
}


export default getNotifications