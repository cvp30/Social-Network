import { useRef, useState } from "react"
import { useProfile } from "../../hooks/useProfile"
import { Feeling, Video } from "../../icons"

const PostForm = () => {

  const [isActive, setIsActive] = useState(false)
  // const [text, setText] = useState('')
  // const textareaRef = useRef();
  const { profile } = useProfile()

  // const adjustTextareaHeight = () => {
  //   const textarea = textareaRef.current;
  //   textarea.style.height = ''; // Restablece la altura a automático
  //   textarea.style.height = textarea.scrollHeight + 'px';
  // }
  // const handleTextChange = (event) => {
  //   setText(event.target.value);
  //   adjustTextareaHeight();
  // };


  const buttonCSS = "rounded-md flex justify-center items-center gap-2 box-border p-3 font-semibold hover:bg-white dark:hover:bg-darkButton dark:text-white w-36"

  return (
    <div className="bg-lightWhite flex flex-col gap-4 dark:bg-principal rounded-xl w-full h-fit p-4">
      <div className={`h-fit flex gap-2 ${isActive ? 'flex-col' : 'flex-row'}`}>
        <div className={`${isActive ? 'w-full' : 'w-12'} h-12 flex justify-between gap-2`}>
          <img
            className="h-full aspect-square rounded-full"
            src={profile.photoURL}
            alt="imgProfile"
          />

          {
            isActive && (
              <div className="flex items-center gap-2 font-semibold">
                <p>Visible for:</p>
                <select
                  className="outline-none bg-transparent cursor-pointer text-blue"
                  name="visibility"
                  id="visibility"
                >
                  <option value="friends">friends</option>
                  <option value="public">Public</option>
                  <option value="me">Only me</option>
                </select>
              </div>
            )
          }
        </div>

        <div className="grow h-12">
          <textarea
            onClick={() => setIsActive(!isActive)}
            className="h-full w-full p-2 bg-white dark:bg-secondary rounded-xl outline-none  resize-none"
            placeholder="Whats happening?"
            name="description"
          // ref={textareaRef}
          // value={text}
          // onChange={handleTextChange}
          />
        </div>
      </div>

      <div className="w-full flex justify-between">
        {/* <div className="grow flex justify-center gap-2"> */}
        <button className={buttonCSS}>
          <Video />
          <p>Photo/Video</p>
        </button>

        {/* <button className={buttonCSS}>
            <Photo />
            <p>Live Video</p>
          </button> */}

        <button className={buttonCSS}>
          <Feeling />
          <p>Feeling</p>
        </button>
        {/* </div> */}

        <button
          className="bg-blue w-28 rounded-lg text-white font-semibold"
          type="submit"
        >
          Post
        </button>
      </div>

    </div>
  )
}

export default PostForm