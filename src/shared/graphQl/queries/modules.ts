
import { ModuleTicketOptions, ModuleTicketWhere } from "@/gql/graphql"
import Cookies from "js-cookie";

const GetModules = async (where: any={}, options: any={}) => {



  const token = Cookies.get('conventenToken');

  const res = fetch('https://coventenapp.el.r.appspot.com/', {
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
                clientHas {
                  userIs {
                    id
                  }
                }
                forModule {
                  id
                  title
                  files
                } 
              }
            }
            `,
              variables: {
                where: where,
                options: options
              },

        })
    })

    const {data} = await res.then(res => res.json())

  

    return data?.moduleTickets
}



export default GetModules