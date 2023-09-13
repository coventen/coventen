
import { ModuleTicketOptions, ModuleTicketWhere } from "@/gql/graphql"
import Cookies from "js-cookie";

const getInvoiceData = async (id: string) => {



  const token = Cookies.get('conventenToken');

  const res = fetch('https://coventenapp.el.r.appspot.com/', {
      method: 'POST',
      headers: {
          "authorization": `Bearer ${token}`,
          'Content-Type': 'application/json'
      },
        body: JSON.stringify({
            query: `query Query($where: InvoiceWhere) {
                invoices(where: $where) {
                  id
                  createdAt
                  priceWithTax
                  taxRate
                  taxType
                  totalPrice
                  hasPurchase {
                    id
                    itemName
                    price
                  }
                  hasClient {
                    id
                    userIs {
                      companyName
                      companyEmail
                      address
                    }
                  }
                }
              }
            `,
            variables: {
                    where: {
                        id: id
                    }
            },

        })
    })

    const { data } = await res.then(res => res.json())


    return data?.invoices[0]

}


export default getInvoiceData