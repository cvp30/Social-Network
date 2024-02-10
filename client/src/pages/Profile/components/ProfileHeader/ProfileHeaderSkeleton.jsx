import { Skeleton } from "@nextui-org/react"


const ProfileHeaderSkeleton = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-10 shadow-md rounded-xl pb-5 bg-default">
      <div className='relative w-full aspect-[3/1] rounded-xl'>
        <Skeleton
          className='w-full h-full rounded-xl'
        ></Skeleton>

        <Skeleton
          className='absolute w-20 sm:w-28 aspect-square rounded-full left-5 -bottom-10 border-2 border-ModuleItem'
        >
        </Skeleton>
      </div>

      <div className="w-full h-fit flex sm:flex-row sm:justify-between flex-col  items-center sm:px-5 sm:gap-0 gap-2">
        <div
          className="w-full sm:w-fit h-fit flex flex-col gap-2"
        >
          <div className='w-full flex flex-col gap-1'>
            <Skeleton className="w-32 h-5 rounded-lg"></Skeleton>
            <Skeleton className="w-20 h-4 rounded-lg"></Skeleton>
          </div>
          <Skeleton className="w-28 h-5 rounded-lg"></Skeleton>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeaderSkeleton