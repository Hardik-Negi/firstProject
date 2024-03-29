import React, { useEffect, useState } from "react";
import { hello } from "../data/data2";
import Addmoney from "./Addmoney";

const Finance = ({searchQuery}) => {
// console.log("nnnnnnnnnnnnnnn", searchQuery);
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [all_list, set_all_list] = useState([]);
  const closeModal = () => setShowModal(false);
  const [modal, setModal] = useState(false);
  const close = () => setModal(false);
  const openUser = (item) => {
    setCurrentUser(item);
  };
 

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("localData"));
    if (localData.length <= 0) {
      localStorage.setItem("localData", JSON.stringify(hello));
      // localData = hello;
    }

    set_all_list(localData || []);
    // const filteredData = all_list?.filter((item) =>item.name.toLowerCase().includes(searchQuery));
    if(searchQuery.length > 0){

      set_all_list(filteredData)
    }
    return () => {
      set_all_list([]);
    };
  }, []);

  useEffect(() => {
    if (all_list.length > 0)
      localStorage.setItem("localData", JSON.stringify(all_list));
  }, [all_list]);


  return (
    <div className="m-5 ">
      <table className=" w-full text-center border-none">
        <thead className="h-12 bg-darkblue ml-10 text-white font-semibold text-sm ">
          <th className="rounded-l-3xl font-inter">Sequence</th>
          <th>Name</th>
          <th>User No.</th>
          <th>User Type</th>
          <th>Operation Status</th>
          <th>Current Balance</th>
          <th>Add Credit</th>
          <th className="rounded-r-3xl">Debit Amount</th>
        </thead>

        <tbody className=" m-6 ">
          {all_list.filter((item) =>item.name.toLowerCase().includes(searchQuery.toLowerCase())).map((item, index) => {
            
            return (
              <tr
                key={index}
                className="border-b-2 border-lightgrey font-medium    "
              >
                <td className="">{item.Rid}</td>
                <td className="p-6 text-lg ">{item.name}</td>
                <td>{item.Tid}</td>
                <td>{item.hcoach}</td>
                <td>{item.stats}</td>
                <td>{item.balance}</td>
                <td>
                  <button
                    onClick={() => {
                      setShowModal(true);
                      openUser(item);
                    }}
                    className="border px-2 py-1 rounded-[15px] bg-[#6DAE2C] text-[white] "
                  >
                    {item.Add}{" "}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      setModal(true);
                      openUser(item);
                    }}
                    className="border px-2 py-1 rounded-[15px] bg-[#D35F3A] text-[white] "
                  >
                    {" "}
                    {item.Debit}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showModal && (
        <Addmoney
          closeModal={closeModal}
          currentUser={currentUser}
          all_list={all_list}
          set_all_list={set_all_list}
          showModal={showModal}
        />
      )}
      {modal && (
        <Addmoney
          close={close}
          currentUser={currentUser}
          all_list={all_list}
          set_all_list={set_all_list}
          modal={modal}
          // setModal={setModal}
        />
      )}
    </div>
  );
};

export default Finance;
