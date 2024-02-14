import { Skeleton } from "@nextui-org/react"


const ContactCardSkeleton = () => {
  return (
    <>
      <div className="w-full box-border px-1 py-2 flex gap-2 rounded-lg">
        <Skeleton
          className="w-10 h-10 rounded-full"
        ></Skeleton>

        <div className="grow flex justify-center flex-col gap-1">
          <Skeleton
            className="w-32 h-4 rounded-md"
          ></Skeleton>
          <Skeleton
            className="w-24 h-3 rounded-md"
          ></Skeleton>
        </div>
      </div>

      <div className="w-full box-border px-1 py-2 flex gap-2 rounded-lg">
        <Skeleton
          className="w-10 h-10 rounded-full"
        ></Skeleton>

        <div className="grow flex justify-center flex-col gap-1">
          <Skeleton
            className="w-32 h-4 rounded-md"
          ></Skeleton>
          <Skeleton
            className="w-24 h-3 rounded-md"
          ></Skeleton>
        </div>
      </div>
    </>
  )
}

export default ContactCardSkeleton