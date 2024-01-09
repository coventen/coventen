"use client";

import Loading from "@/app/loading";
import { useGqlClient } from "@/hooks/UseGqlClient";
import { useQuery } from "graphql-hooks";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import Modal from "../Modal";
import Link from "next/link";
import Content from "../Content";

const GET_EVENT = `
query Events($where: EventWhere, $options: EventOptions) {
    events(where: $where, options: $options) {
      id
      name
      slug
      description
      location
      image
      endAt
      startAt
      registrationUrl
    }
  }`;

// component

const EventDetails = () => {
  // states
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // hooks
  const client = useGqlClient();
  const params = useParams();

  // query
  const {
    data: eventData,
    error,
    loading,
  } = useQuery(GET_EVENT, {
    client,
    variables: {
      where: {
        slug: params.slug,
      },
    },
  });

  if (loading) return <Loading />;

  return (
    <div className="max-w-screen-lg mx-auto pb-20">
      <main className="mt-10">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <img
            src={eventData?.events[0]?.image || "/assets/no_image.png"}
            className="max-h-[450px] w-full "
          />
        </div>
        <div className="px-4 lg:px-0 mt-10">
          <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
            {eventData?.events[0]?.name}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4 text-justify">
            <Content content={JSON.parse(eventData?.events[0]?.description)} />
          </div>

          <div className="w-full lg:w-1/4 m-auto mt-2 max-w-screen-sm">
            <div className="col-span-1 lg:col-span-2 p-4">
              <div className="border-b border-gray-300 pb-1 mt-7 flex space-x-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="relative group inline-block flex-shrink-0  py-2.5 px-5 text-sm font-semibold text-orange-50 bg-primary  overflow-hidden"
                  type="submit"
                >
                  <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                  <div className="relative flex items-center justify-center">
                    <span className="">Interested</span>
                  </div>
                </button>
                <Link href={eventData?.events[0]?.registrationUrl || "#"}>
                  <button
                    className="relative group inline-block flex-shrink-0   py-2.5 px-5 text-sm font-semibold text-primary hover:text-white bg-transparent border border-primary  overflow-hidden"
                    type="submit"
                  >
                    <div className="absolute top-0 right-full w-full h-full bg-primary transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <div className="relative flex items-center justify-center">
                      <span className="">Register</span>
                    </div>
                  </button>
                </Link>
              </div>
              <div className="border-b border-gray-300 pb-1 mt-7">
                <p className="text-primary font-semibold">Start:</p>
                <p className="text-dimText">
                  {eventData?.events[0]?.startAt?.slice(0, 10) ||
                    "Comming Soon"}
                </p>
              </div>
              <div className="border-b border-gray-300 pb-1">
                <p className="text-primary font-semibold">End:</p>
                <p className="text-dimText">
                  {eventData?.events[0]?.endAt?.slice(0, 10) || "Comming Soon"}
                </p>
              </div>
              <div className="border-b border-gray-300 pb-1">
                <p className="text-primary font-semibold">Location:</p>
                <p className="text-dimText">
                  {eventData?.events[0]?.location || "Not Available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        event={eventData?.events[0]?.name}
      />
    </div>
  );
};

export default EventDetails;
