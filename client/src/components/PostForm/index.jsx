import { useEffect, useState } from "react"
import { useProfile } from "../../hooks/useProfile"
import { Textarea, Avatar, SelectItem, Select, Button } from "@nextui-org/react"
import ButtonsGroup from "./ButtonsGroup"
import { PostContext } from "../../contexts/PostFormContext"
import PreviewImage from "../PreviewImage"
import { Close } from "../../icons"

const PostForm = () => {

  const [isActive, setIsActive] = useState(false)
  const { profile } = useProfile()

  const { postFormik } = PostContext()

  const handleRemoveImage = () => {
    postFormik?.setFieldValue('image', '')
  }

  useEffect(() => {
    const handleEscKeyPress = (e) => {
      if (e.key === 'Escape') {
        setIsActive(false)
        postFormik?.setFieldValue('content', '')
        postFormik?.setFieldValue('image', '')
      }
    }

    document.addEventListener('keydown', handleEscKeyPress);

    return () => {
      document.removeEventListener('keydown', handleEscKeyPress);
    }
  }, [])

  return (
    <form
      onSubmit={postFormik?.handleSubmit}
      className="bg-default flex flex-col gap-4  rounded-xl w-full h-fit p-3"
    >
      <div className={`h-fit flex items-center gap-2 ${isActive ? 'flex-col' : 'flex-row'}`}>
        <div className={`${isActive ? 'w-full' : 'w-14'} h-16 flex justify-between items-center gap-2`}>
          <Avatar src={profile.photoURL} />
          {
            isActive && (
              <Select
                name="privacy"
                variant="underlined"
                label="Visible for"
                defaultSelectedKeys={[postFormik?.values.privacy]}
                className="w-40 h-fit"
                color="primary"
                size="lg"
                value={postFormik?.values.privacy}
                onChange={postFormik?.handleChange}
                onBlur={postFormik?.handleBlur}
                isInvalid={postFormik?.touched.privacy && Boolean(postFormik?.errors.privacy)}
                errorMessage={postFormik?.touched.privacy && postFormik?.errors.privacy}
              >
                <SelectItem key="PUBLIC" value="PUBLIC">
                  All Public
                </SelectItem>
                <SelectItem key="FOLLOWERS" value="FOLLOWERS">
                  Only Followers
                </SelectItem>
              </Select>
            )
          }
        </div>
        <div className="w-full grow h-fit flex flex-col gap-2">
          <Textarea
            size="lg"
            name="content"
            onClick={() => setIsActive(true)}
            minRows={1}
            maxRows={5}
            placeholder="Whats happening?"
            radius="lg"
            value={postFormik?.values.content}
            onChange={postFormik?.handleChange}
          />

          <div className="relative w-full h-fit flex gap-2 flex-wrap justify-center">

            {
              postFormik?.values.image && (
                <>
                  <PreviewImage file={postFormik?.values.image} />
                  <Button
                    isIconOnly
                    size="sm"
                    radius="full"
                    className="absolute top-0 right-0"
                    onClick={handleRemoveImage}
                  >
                    <Close />
                  </Button>
                </>
              )
            }
          </div>

        </div>
      </div>

      <div onClick={() => setIsActive(true)} className="w-full flex justify-between items-center">
        <ButtonsGroup />

        <Button
          type="submit"
          size="md"
          radius="sm"
          color="primary"
          className="text-base"
        >
          Post
        </Button>
      </div>

    </form>
  )
}

export default PostForm