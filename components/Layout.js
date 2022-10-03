import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const Layout = ({children}) => {


  const client = new QueryClient({
    defaultOptions: {
        
    }
  });
  return (
    <QueryClientProvider client={client}>
      <div className="content">
     
        <Navbar />

        {children}

        <Footer />

      </div>
    </QueryClientProvider>
  )
}

export default Layout