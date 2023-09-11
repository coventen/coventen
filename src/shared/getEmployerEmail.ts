
import Cookies from "js-cookie";







export const getEmployerEmail = async (userEmail: string) => {
  console.log(userEmail, 'userEmail')
    const userInfo = await GetUserInfo(userEmail)
    let fetchEmail : any

    if(userInfo.user_type === 'LAB_ASSISTANT' || userInfo.user_type === 'COVENTEN_EMPLOYEE') {
      console.log(userInfo)
     fetchEmail = userInfo?.hasEmployee[0]?.employerEmail
    }else{
        fetchEmail = userEmail
    }

    return fetchEmail

}




const GetUserInfo = async (userEmail: string) => {

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
              hasEmployee {
                employerEmail
              }
              user_type
            }
          }`,
          variables: {
            where: {
                email: userEmail
            },
          },

    })
})
const {data} = await res.then(res => res.json())
return data.users[0]
}