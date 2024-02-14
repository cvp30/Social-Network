import { Button, User } from '@nextui-org/react';
import PropTypes from 'prop-types';


const ChatCard = ({ photoURL, username, lastMessage, time }) => {
  return (
    <Button
      className='w-full h-fit flex hover:bg-secondary items-center justify-between p-1 px-2'>
      <User
        classNames={{
          base: 'p-1',
          name: 'text-base',
          description: 'text-sm text-darkSilver',
        }}
        name={username}
        description={lastMessage}
        avatarProps={{
          src: `${photoURL}`
        }}
      />

      <div className='w-fit h-full flex items-center'>
        <p className='text-sm text-darkSilver'>{time}</p>
      </div>
    </Button>
  )
}

ChatCard.propTypes = {
  photoURL: PropTypes.string,
  username: PropTypes.string,
  lastMessage: PropTypes.string,
  time: PropTypes.string,
}

export default ChatCard