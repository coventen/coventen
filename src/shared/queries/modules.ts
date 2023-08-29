import { currentUser } from "@/firebase/oauth.config"
import { ModuleTicketOptions, ModuleTicketWhere } from "@/gql/graphql"
import Cookies from "js-cookie";

const GetModules = async (where: any={}, options: ModuleTicketOptions={}) => {

  console.log(where, 'where')

  const token = Cookies.get('conventenToken');

  const res = fetch('http://localhost:4000/', {
      method: 'POST',
      headers: {
          "authorization": `Bearer ${token}`,
          'Content-Type': 'application/json'
      },
        body: JSON.stringify({
            query: `query ModuleTickets($where: ModuleTicketWhere, $options: ModuleTicketOptions) {
              moduleTickets(where: $where, options: $options) {
                id
                ticket
                status
                forModule {
                  id
                  title
                } 
              }
            }
            `,
              variables: {
                where: where,
                options: options
              },
              context: {
                fetchOptions: {
                  next: { revalidate: 10 },
                },
              }
        })
    })

    const {data} = await res.then(res => res.json())

    console.log(data, 'ddota tdkjdsfkdsjfldjsfkjsdlkfjdskl')

    return data.moduleTickets
}



export default GetModules