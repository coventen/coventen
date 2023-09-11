
import { NotificationOptions, NotificationWhere } from "@/gql/graphql";
import Cookies from "js-cookie";

const getNotifications = async (variables: any) => {


  const token = Cookies.get('conventenToken');

  const res = fetch('http://localhost:4000/', {
      method: 'POST',
      headers: {
          "authorization": `Bearer ${token}`,
          'Content-Type': 'application/json'
      },
        body: JSON.stringify({
            query: `query Notifications($where: NotificationWhere, $options: NotificationOptions) {
                notifications(where: $where, options: $options) {
                  id
                  title
                  description
                  createdAt
                }
              }`,
              variables: variables,
        }),
        next: { revalidate: 300 } 
    })

    const {data} = await res.then(res => res.json())
    return data?.notifications[0]
}


export default getNotifications