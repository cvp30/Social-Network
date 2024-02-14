import PropTypes from 'prop-types'
import { createContext, useContext, useState } from 'react'

const ChatTabListContext = createContext()

export const ChatTabListContextProvider = ({ children }) => {

  const maxTabsOfList = 2
  const [tabList, setTabList] = useState([])

  const addChatToList = (data) => {
    const currList = [...tabList]

    if (currList.length === 0) setTabList([data])

    else if (!currList.some(user => user.id === data.id)) {
      currList.push(data)
      if (tabList.length > maxTabsOfList) currList.shift()

      setTabList(currList)
    }
  }

  const removeChatToList = (id) => {
    setTabList(currList => currList.filter(user => user.id !== id))
  }

  return (
    <ChatTabListContext.Provider value={{
      tabList,
      addChatToList,
      removeChatToList
    }}>
      {children}
    </ChatTabListContext.Provider>
  )
}

ChatTabListContextProvider.propTypes = {
  children: PropTypes.element,
}

export const ChatTabContext = () => {
  return useContext(ChatTabListContext)
}