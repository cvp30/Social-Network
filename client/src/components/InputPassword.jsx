import { useState } from "react";
import { LockPassword, Password, UnlockPassword } from "../icons";


const InputPassword = (props) => {

  const [view, setView] = useState(false);

  const handleView = (event) => {
    event.preventDefault();
    setView(!view);
  }

  return (
    <div className="flex h-12 border border-silver dark:border-darkBorder rounded-xl" >
      <div className="h-full w-[11%] flex justify-center items-center">
        <Password className="w-6 h-6" />
      </div>

      <input
        type={`${view ? 'text' : 'password'}`}
        name="password"
        placeholder="Password"
        className="w-[78%] p-2 outline-none rounded-xl dark:bg-secondary dark:text-white"
        {...props}
      />

      <button
        className="h-full w-[11%] flex justify-center items-center"
        onClick={handleView}
      >
        {
          view ?
            <LockPassword className="w-6 h-6" />
            :
            <UnlockPassword className="w-6 h-6" />

        }

      </button>
    </div >
  )
}

export default InputPassword;