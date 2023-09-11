import { useGqlClient } from '@/hooks/UseGqlClient';
import { useQuery } from 'graphql-hooks';
import React from 'react';
import AccordionItem from './AccordionItem';


const GET_LEARN = `
query LearnItems {
    learnItems {
      id
      title
      description
      url
    }
  }
`


const Main = () => {

    //HOOKS 
    const client = useGqlClient()

    //query
    const { data, error, loading } = useQuery(GET_LEARN, { client })





    return (
        <>
            <div className="-mx-4  grid grid-cols-1 lg:grid-cols-2">


                {
                    data?.learnItems?.length && data.learnItems.map((item: any) =>
                        <div key={item.id} className="w-full px-4 ">
                            <AccordionItem

                                header={item?.title}
                                text={item?.description}
                                url={item?.url}
                            />
                        </div>)
                }




            </div>
        </>
    );
};

export default Main;