import { EmailIcon } from '../../icons';

const InputEmail = (props) => {
  return (
    <div className="flex h-12 border border-silver dark:border-darkBorder rounded-xl" >
      <div className="h-full w-[11%] flex justify-center items-center">
        <EmailIcon className="w-6 h-6" />
      </div>

      <input
        placeholder="Your Email"
        type="email"
        name="email"
        pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
        className="w-[89%] p-2 outline-none rounded-xl dark:bg-secondary dark:text-white tracking-wider"
        {...props}
      />
    </div >


  )
}

export default InputEmail;