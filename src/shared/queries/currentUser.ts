import { currentUser } from "@/firebase/oauth.config"
import Cookies from "js-cookie";

const GetCurrentUserDetails = async () => {

    const user = currentUser()

    const token = Cookies.get('conventenToken');

    const res = fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
            "authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `query Users($where: UserWhere) {
                users(where: $where) {
                  name
                  email
                  image
                  bio
                  id
                  address
                  city
                  state
                  zip
                  companyName
                  companyEmail
                  gstNumber
                  status
                  user_type
                  createdAt
                }
              }`,
              variables: {
                where: {
                    email: user?.email
                  },
              },
              context: {
                fetchOptions: {
                  next: { revalidate: 10 },
                },
              }
        })
    })

    const {data} = await res.then(res => res.json())
    return data.users
}


export default GetCurrentUserDetails