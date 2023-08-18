

const GetLeads = async (where:any = {}, options: any = {})=> {

    const res = fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            query: `query Query($where: LeadsWhere, $options: LeadsOptions) {
              leads(where: $where, options: $options) {
                id
                email
                createdAt
                condition
                gstNumber
                industry
                phone
                status
              }
            }`,
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
    return data.leads



}

export default GetLeads