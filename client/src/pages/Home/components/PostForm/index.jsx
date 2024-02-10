import { Textarea, SelectItem, Select, Button, User } from "@nextui-org/react"
import ButtonsGroup from "./ButtonsGroup"
import { useUser } from "../../../../hooks/useUser"
import { PostContext } from "../../../../contexts/PostFormContext"
import ImagePreview from "../../../../components/ImagePreview"
import AvatarUser from "../../../../assets/avatar.jpg"

const PostForm = () => {

  const { profile } = useUser()

  const { postFormik } = PostContext()

  // const handleRemoveImage = () => {
  //   postFormik?.setFieldValue('image', [])
  // }

  return (
    <form
      onSubmit={postFormik?.handleSubmit}
      className="bg-default flex flex-col gap-4  rounded-xl w-full h-fit p-3"
    >
      <div className={`h-fit flex items-center gap-2 flex-col`}>
        <div className="w-full h-16 flex justify-between items-center gap-2">
          <User
            name={profile?.username}
            description={profile?.slug}
            avatarProps={{
              src: AvatarUser
            }}
            classNames={{
              name: "text-base",
              description: "text-sm"
            }}
          />
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
        </div>
        <div className="w-full grow h-fit flex flex-col gap-2">
          <Textarea
            size="lg"
            name="content"
            minRows={1}
            maxRows={5}
            placeholder="Whats happening?"
            radius="lg"
            value={postFormik?.values.content}
            onChange={postFormik?.handleChange}
          />

          <div className="relative w-full h-fit flex gap-2 flex-wrap justify-center">

            {
              postFormik?.values.image.length > 0 && (
                <>
                  <div className="w-full h-fit grid grid-cols-2 gap-2">
                    {
                      postFormik?.values.image.map((image, i) => {
                        return (
                          <ImagePreview
                            key={i}
                            file={image}
                          />
                        )
                      })
                    }
                  </div>
                  {/* <Button
                    isIconOnly
                    size="sm"
                    radius="full"
                    className="absolute top-0 right-0"
                    onClick={handleRemoveImage}
                  >
                    <Close />
                  </Button> */}
                </>
              )
            }
          </div>

        </div>
      </div>

      <div
        className="w-full flex justify-between items-center"
      >
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