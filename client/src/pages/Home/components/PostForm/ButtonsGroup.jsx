import { Button } from "@nextui-org/react"
import { Feeling, Video } from "../../../../icons";
import PhotoButton from './Buttons/PhotoButton';
import { PostContext } from "../../../../contexts/PostFormContext";


const ButtonsGroup = () => {

  const { isIcon } = PostContext()

  return (
    <>
      <PhotoButton isIcon={isIcon} />

      <Button
        size="lg"
        radius="sm"
        startContent={<Video />}
        isIconOnly={isIcon}
        className="flex text-base"
      >
        {isIcon ? '' : 'Video'}
      </Button>

      <Button
        size="lg"
        radius="sm"
        startContent={<Feeling />}
        isIconOnly={isIcon}
        className="flex text-base"
      >
        {isIcon ? '' : 'Feeling'}
      </Button>
    </>
  )
}

export default ButtonsGroup