import React from "react";
import ClientLogo from "./ClientLogo";
import { clientsData } from "@/data/clientsData";

const Clients = () => {
  return (
    <div
      id="clients"
      className="section relative py-8 bg-white dark:bg-gray-800"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
            Nuestros clientes
          </h2>
        </header>
      </div>
      <div className="container xl:max-w-6xl mx-auto px-4">
        <div className="flex-wrap flex-row -mx-4 justify-center">
          <div className="w-full px-4">
            <div
              id=""
              className=""
            >
              <div className="">
                <div className="flex flex-wrap grayscale">
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
