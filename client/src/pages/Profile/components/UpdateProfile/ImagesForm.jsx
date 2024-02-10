import { useRef } from "react"
import { AddPhoto } from "../../../../icons"
import { Button } from "@nextui-org/react"
import { useImagePreview } from "../../../../hooks/useImagePreview";
import { UpdateContext } from "../../contexts/UpdateProfileContext";


const ImagesForm = () => {
  const { userFormik, handleChangeCoverPhoto, handleChangeProfilePhoto } = UpdateContext()

  const coverPhotoRef = useRef(null)
  const profilePhotoRef = useRef(null)

  // FILE TO IMAGE
  const prevCoverPhoto = useImagePreview(userFormik.values.coverPhoto)
  const prevProfilePhoto = useImagePreview(userFormik.values.photoURL)


  const ChangeCoverPhoto = () => coverPhotoRef.current.click()
  const ChangeProfilePhoto = () => profilePhotoRef.current.click()

  return (
    <>
      {/* ----------------COVER PHOTO----------------- */}
      <div
        className="w-full aspect-[3/1] rounded-xl relative bg-cover bg-center bg-no-repeat flex items-center justify-center gap-1"
        style={{
          backgroundImage: userFormik.values.coverPhoto ? `url(${prevCoverPhoto || userFormik.values.coverPhoto})` : 'none',
          backgroundColor: userFormik.values.coverPhoto ? 'transparent' : '#4b5771',
        }}
      >
        <Button
          isIconOnly
          radius="full"
          variant="solid"
          aria-label="addCoverPhoto"
          onClick={ChangeCoverPhoto}
        >
          <AddPhoto />
        </Button>
        {/* {
          typeof userFormik.values.coverPhoto === 'object' && (
            <Button
              isIconOnly
              radius="full"
              variant="solid"
              aria-label="deleteCoverPhoto"
              onClick={deletePrevCoverImage}
            >
              <Close />
            </Button>
          )
        } */}

        <input
          type="file"
          name="image"
          className='hidden'
          ref={coverPhotoRef}
          onChange={handleChangeCoverPhoto}
          accept='image/*'
        />


        {/* ----------------PROFILE PHOTO----------------- */}
        <div
          className="absolute w-28 aspect-square rounded-full left-5 -bottom-10 border-3 border-ModuleItem bg-cover bg-center bg-no-repeat flex items-center justify-center bg-[#4b5771]"
          style={{
            backgroundImage: userFormik.values.photoURL ? `url(${prevProfilePhoto || userFormik.values.photoURL})` : 'none',
            backgroundColor: userFormik.values.photoURL ? 'transparent' : '#4b5771',
          }}
        >
          <Button
            isIconOnly
            radius="full"
            variant="solid"
            aria-label="addPhotoProfile"
            onClick={ChangeProfilePhoto}
          >
            <AddPhoto />
          </Button>
          {/* {
            typeof userFormik.values.photoURL === 'object' && (
              <Button
                isIconOnly
                radius="full"
                variant="solid"
                aria-label="deletePhotoProfile"
                onClick={deletePrevProfileImage}
              >
                <Close />
              </Button>
            )
          } */}

          <input
            type="file"
            name="image"
            className='hidden'
            ref={profilePhotoRef}
            onChange={handleChangeProfilePhoto}
            accept='image/*'
          />
        </div>
      </div>
    </>
  )
}

export default ImagesForm