import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { NextUIProvider } from '@nextui-org/react'


const httpLink = createHttpLink({
  uri: 'http://localhost:3000/',
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const sessionToken = localStorage.getItem('Session');

  return {
    headers: {
      ...headers,
      authorization: sessionToken ? sessionToken : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>

  </NextUIProvider>
)
