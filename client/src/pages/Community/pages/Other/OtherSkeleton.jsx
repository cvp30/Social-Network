import { Skeleton } from "@nextui-org/react"


const OtherSkeleton = () => {

  return (
    <div className="w-[250px] h-40 rounded-xl flex flex-col bg-default p-2">
      <div
        className="w-full h-20 flex items-center gap-3"
      >
        <Skeleton
          className="rounded-full h-16 aspect-square"
        ></Skeleton>

        <div
          className="grow h-full flex flex-col"
        >
          <div
            className="w-full h-fit"
          >
            <Skeleton
              className="h-5 w-32 rounded-md"
            ></Skeleton>
            <Skeleton
              className="h-3 w-20 mt-2 rounded-md"
            ></Skeleton>
          </div>

          <div
            className="w-full grow flex justify-start items-center gap-3"
          >
            <Skeleton
              className="w-28 h-8 rounded-md"
            ></Skeleton>
          </div>
        </div>
      </div>
      <div
        className="w-full grow flex justify-around items-center"
      >
        <Skeleton
          className="h-10 w-20 rounded-md"
        ></Skeleton>
        <Skeleton
          className="h-10 w-20 rounded-md"
        ></Skeleton>
      </div>
    </div>
  )
}

export default OtherSkeleton