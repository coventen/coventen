
import Cookies from "js-cookie";

const getNotifications = async (variables: any) => {


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
                  id
                  title
                  description
                  createdAt
                  notificationFor
                  image
                  isViewed
                }
              }`,
              variables: variables,
        }),
        next: {revalidate: 10}
    })

    const {data} = await res.then(res => res.json())
    return data?.notifications
}


export default getNotifications