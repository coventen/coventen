import { currentUser } from "@/firebase/oauth.config"

const getUserPermission = async (email: string) => {

    const res = fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            query: `query Users($where: UserWhere) {
                users(where: $where){
                  user_type
                  permissions
                }
              }`,
              variables: {
                where: {
                    email: email
                  },
              },
        })
    })

    const {data} = await res.then(res => res.json())
    return data?.users[0]
}


export default getUserPermission