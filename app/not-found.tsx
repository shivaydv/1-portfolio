import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center h-96 w-full flex-col gap-6'>
        <h1 className='text-lg font-bold '>Error 404 |  Page not found</h1>
        <Link href={"/"} className='btn btn-ghost'>Go To Home</Link>
    </div>
  )
}

export default NotFound