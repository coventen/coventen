
import { ModuleTicketOptions, ModuleTicketWhere } from "@/gql/graphql"
import Cookies from "js-cookie";

const GetModules = async (where: any={}, options: ModuleTicketOptions={}) => {

  console.log(where, 'where')

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

    console.log(data, 'ddota tdkjdsfkdsjfldjsfkjsdlkfjdskl')

    return data?.moduleTickets
}



export default GetModules