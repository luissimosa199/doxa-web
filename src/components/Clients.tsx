import React, { useState } from "react";
import ClientLogo from "./ClientLogo";
import { clientsData } from "@/data/clientsData";

const Clients = () => {
  return (
    <div
      id="clients"
      className="section relative py-8 bg-white dark:bg-gray-800"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <div className="flex-wrap flex-row -mx-4 justify-center">
          <div className="w-full px-4">
            <div
              id="post-carousel"
              className="overflow-x-scroll scrollbar"
            >
              <div className="">
                <div className="flex grayscale">
                  {clientsData &&
                    clientsData.map((e) => {
                      return (
                        <ClientLogo
                          key={e.id}
                          url={e.url}
                          image={e.image}
                          alt={e.alt}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;