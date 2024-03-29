import React, { useState } from "react";

const Addmoney = ({
  closeModal,
  close,   
  currentUser,
  all_list,
  set_all_list,
  modal,
}) => {
  
  const [newBalanceInput, setNewBalanceInput] = useState("");
  const handleInputChange = (event) => {
    setNewBalanceInput(event.target.value);
  };

  // Function to update balance
  const updateBalance = () => {
    const newBalance = parseInt(newBalanceInput); //convert string into number
    if (!isNaN(newBalance)) {
      
      let x;
      if (modal) {
        x = currentUser.balance - newBalance;
        
      } else {
        x = currentUser.balance + newBalance;
      }
     
      // update JSON
      set_all_list(
        all_list.map((ele) => {
          return currentUser.Rid === ele.Rid
            ? { ...ele, balance: x }
            : { ...ele };
        })
      );

      setNewBalanceInput(""); // Clear input field after updating balance
      if(modal){
        close();
      }
      else{
        closeModal();
      }
    }
    

  };

  return (
    <div
      className="flex justify-center items-center h-screen fixed top-0 left-0 w-[100%]  "
      style={{ backgroundColor: "" }}
    >
      <div className=" h-[95%] w-[40%] border rounded-[50px] p-[1.5%] px-[2%] border-[#C1C1C1] bg-white">
        <div className=" flex justify-between px-2 py-1 mb-1 ">
          <div className="flex gap-4 justify-center items-center ">
            {/* <img className="flex items-center justify-center  " src="src\assets\vector12.png " alt="" /> */}
            <span className="whitespace-nowrap font-bold text-[20px] text-blue">
              {modal ? "Ewallet" : "Add Money"}
            </span>
          </div>
          <div>
            <button
              onClick={ closeModal }
              class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                class="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <p className="bg-blue text-white font-semibold rounded-[50px] p-2 pl-4  ">
          {" "}
          {modal ? "Debit Money" : "Credit Money"}
        </p>
        <form className=" pb-8 pt-6 border-b-[2px] border-blue  border-dashed ">
          <div className="flex ">
            <label className="font-semibold  my-2 w-[200px]" htmlFor="city">
              User No. :{" "}
            </label>
            <input
              disabled={true}
              className="  w-full px-4 py-[6px] font-medium bg-white border border-solid border-[#C1C1C1] rounded-2xl mb-6 outline-none"
              type="text"
              name="city"
              id="city"
              //   value={values.city}
              placeholder={currentUser.Tid}
            />
          </div>
          <div className="flex ">
            <label className="font-semibold  my-2 w-[200px]" htmlFor="city">
              User Name :{" "}
            </label>
            <input
              disabled={true}
              className="  w-full px-4  py-[6px] font-medium bg-white border border-solid border-[#C1C1C1] rounded-2xl mb-6 outline-none "
              type="text"
              name="city"
              id="city"
              placeholder={currentUser.name}
            />
          </div>
          <div className="flex ">
            <label className="font-semibold  my-2 w-[200px]" htmlFor="city">
              User Type :{" "}
            </label>
            <input
              disabled={true}
              className="  w-full px-4  py-[6px] font-medium bg-white border border-solid  border-[#C1C1C1] rounded-2xl mb-6 outline-none"
              type="text"
              name="city"
              id="city"
              placeholder={currentUser.hcoach}
            />
          </div>
          <div className="flex ">
            <label className="font-semibold  my-2 w-[200px]" htmlFor="city">
              Current Balance :{" "}
            </label>
            <input
              disabled={true}
              className="  w-full px-4  py-[4px] font-medium text-2xl text-blue border border-solid border-[#EFF6FF] bg-[#EFF6FF] rounded-2xl mb-6 outline-none "
              type="text"
              name="city"
              id="city"
              placeholder={currentUser.balance}
            />
          </div>
        </form>

        <div className="border border-blue mt-8 h-[22%] bg-blue rounded-3xl ">
          <div className="flex flex-col m-2 items-center ">
            <label
              className="font-bold text-[18px] my-2 text-white pb-2"
              htmlFor="city"
            >
              {modal
                ? "(+) Enter a Debit Account : "
                : "(+) Enter an Amount to Ewallet : "}
            </label>
            <input
              className="  w-[90%] px-4  py-2 font-medium border-2 border-[#00B91E] rounded-2xl mb-6 outline-[#00B91E] "
              type="number"
              name="num"
              id="num"
              value={newBalanceInput}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex justify-end my-4 ">
          <button
            onClick={updateBalance}
            className="border p-3 rounded-2xl text-white bg-blue font-semibold w-[30%]"
          >
            {modal ? "Debit Now" : "Add Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addmoney;
