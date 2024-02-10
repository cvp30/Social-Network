import { Skeleton } from "@nextui-org/react"


const ProfileInfoSkeleton = () => {
  return (
    <div
      className="w-full md:w-72 xl:w-60 h-fit p-4 bg-default rounded-xl flex flex-col gap-8"
    >
      <Skeleton
        className="h-6 w-full mx-1 rounded-md"
      ></Skeleton>

      <div className="w-full h-fit flex flex-col gap-5">
        <Skeleton
          className="h-4 w-36 mx-1 rounded-md"
        ></Skeleton>
        <Skeleton
          className="h-4 w-28 mx-1 rounded-md"
        ></Skeleton>
        <Skeleton
          className="h-4 w-32 mx-1 rounded-md"
        ></Skeleton>
        <Skeleton
          className="h-4 w-28 mx-1 rounded-md"
        ></Skeleton>
      </div>


    </div>
  )
}

export default ProfileInfoSkeleton