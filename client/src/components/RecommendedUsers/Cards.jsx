import { Button, User } from "@nextui-org/react";

const Cards = () => {

  return (
    <div className="w-full h-fit">
      <User
        name={(
          <p className="text-base font-semibold">
            Jane Doe
          </p>
        )}
        description={(
          <p className="text-sm text-darkSilver">Product Designer</p>
        )}
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
        }}
      />

      <div className="w-full mt-4 flex justify-around">
        <Button radius="sm" variant="bordered" color="primary">
          <p className="text-base px-4">Ignore</p>
        </Button>
        <Button radius="sm" color="primary">
          <p className="text-base px-4">Follow</p>
        </Button>
      </div>
    </div>
  )
}

export default Cards