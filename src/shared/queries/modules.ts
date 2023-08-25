import { currentUser } from "@/firebase/oauth.config"
import { ModuleTicketOptions, ModuleTicketWhere } from "@/gql/graphql"

const GetModules = async (where: any={}, options: ModuleTicketOptions={}) => {

  console.log(where, 'where')

    const res = fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
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