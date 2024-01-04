"use client";

import { useGqlClient } from "@/hooks/UseGqlClient";
import { useManualQuery } from "graphql-hooks";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import Loading from "../loading";
import Pagination from "@/components/Pagination";
import { AiFillStar } from "react-icons/ai";
import Modal from "./Modal";

const GET_PRODUCTS = `
query LearnItems($where: LearnItemWhere, $options: LearnItemOptions) {
    learnItems(where: $where, options: $options) {
      id
      title
      description
      url
      imageUrl
      mode
      rating
      courseFor
      seats
      price
      credit
      startDate
      endDate
    }
  }
  `;

// components
const Main = ({ searchOption, searchTerm }: any) => {
  // states
  const [products, setProducts] = React.useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentEvent, setCurrentEvent] = React.useState<any>(null);

  // pagination states
  const [pageLimit, setPageLimit] = React.useState(12);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [totalProduct, setTotalProduct] = React.useState(0);

  // hooks
  const client = useGqlClient();
  const searchParams = useSearchParams();

  // quires
  const [getProductsFn, dataState] = useManualQuery(GET_PRODUCTS, { client });

  useEffect(() => {
    let where;

    if (searchOption === "accredited") {
      where = {
        accredited_CONTAINS: searchTerm,
      };
    } else if (searchOption === "duration") {
      where = {
        duration_CONTAINS: searchTerm,
      };
    } else if (searchOption === "certification") {
      where = {
        certification_CONTAINS: searchTerm,
      };
    } else {
      where = {};
    }

    getProducts(where);
  }, [searchTerm, searchOption]);

  useEffect(() => {
    getProducts();
    getItemsCount();
  }, [currentPage]);

  const getProducts = async (where: any = {}) => {
    const { data } = await getProductsFn({
      variables: {
        where: where,
        options: {
          limit: pageLimit,
          offset: (currentPage - 1) * pageLimit,
          sort: [
            {
              createdAt: "DESC",
            },
          ],
        },
      },
    });

    if (data?.learnItems) {
      setProducts(data?.learnItems);
    }
  };

  const getItemsCount = async () => {
    const { data } = await getProductsFn();
    if (data?.learnItems?.length > 0) {
      setTotalProduct(data?.learnItems?.length);
      setTotalPages(Math.ceil(data?.learnItems?.length / pageLimit));
    }
  };

  useEffect(() => {}, [products?.length]);

  if (dataState.loading) return <Loading />;

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products?.length &&
              products?.map((item: any) => (
                <div
                  key={item?.id}
                  style={{
                    backgroundImage: `url(${item?.imageUrl})`,
                  }}
                  className="learn_card overflow-y-auto  scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
                >
                  <div className="learn_info bg-white">
                    <h1 className="learn_card_title uppercase p-3 ">
                      {item?.title}
                    </h1>
                    <div className="learn_card_description p-3 bg-white">
                      <p className="mt-2 text-[13px] mb-5 text-justify text-dimText dark:text-gray-300">
                        {item?.description || "N/A"}
                      </p>
                      <div className="bg-white">
                        <div className="flex items-center justify-between">
                          <p className="font-semibold text-xs mb-3">
                            Who can apply:
                          </p>
                          <p className="font-semibold text-dimText text-xs mb-3">
                            {item?.courseFor || "Everyone"}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="font-semibold text-xs mb-3 ">Rating:</p>
                          <p className="font-semibold text-dimText text-xs mb-3 flex items-center justify-center space-x-2">
                            {item?.rating || 4.5}
                            <span className="text-primary">
                              <AiFillStar />
                            </span>
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="font-semibold text-xs mb-3">Price:</p>
                          <p className="font-semibold text-dimText text-xs mb-3">
                            {item?.price}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="font-semibold text-xs mb-3">Seats:</p>
                          <p className="font-semibold text-dimText text-xs mb-3">
                            {item?.seats}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="font-semibold text-xs mb-3">Credit:</p>
                          <p className="font-semibold text-dimText text-xs mb-3">
                            {item?.credit}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="font-semibold text-xs mb-3">Mode:</p>
                          <p className="font-semibold text-dimText text-xs mb-3">
                            {item?.mode}
                          </p>
                        </div>
                        <div className="flex items-center justify-between ">
                          <p className="font-semibold text-xs mb-3">
                            Date of apply:
                          </p>
                          <p className="font-semibold text-dimText text-xs mb-3">
                            {item?.startDate.slice(0, 10)} -{" "}
                            {item?.endDate.slice(0, 10)}
                          </p>
                        </div>

                        <div className=" bg-white  flex space-x-3">
                          <div>
                            <Link href={item?.url} target="_blank">
                              <button
                                className="relative group inline-block flex-shrink-0  py-2 px-5 text-sm font-semibold text-orange-50 gradient-bg  overflow-hidden"
                                type="submit"
                              >
                                <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                                <div className="relative flex items-center justify-center">
                                  <span className="">Learn More</span>
                                </div>
                              </button>
                            </Link>
                          </div>

                          <button
                            onClick={() => {
                              setIsModalOpen(true);
                              setCurrentEvent(item?.title);
                            }}
                            className="relative group inline-block flex-shrink-0   py-1.5 px-5 text-sm font-semibold text-primary hover:text-white bg-transparent border border-primary  overflow-hidden"
                            type="submit"
                          >
                            <div className="absolute top-0 right-full w-full h-full gradient-bg transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                            <div className="relative flex items-center justify-center">
                              <span className="">Interested</span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <div className="w-full mt-12 flex items-center justify-center">
        {totalProduct > pageLimit && (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        )}
      </div>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        learn={currentEvent}
      />
    </>
  );
};

export default Main;
