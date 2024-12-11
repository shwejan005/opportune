import PostForm from '@/app/components/ui/PostForm'
import UserInformation from '@/app/components/ui/UserInformation'
import React from 'react'

const page = () => {
  return (
    <div className='grid grid-cols-8 mt-5 sm:px-5'>
      <section className='hidden md:inline md:col-span-2'>
        <UserInformation />
      </section>
      
      <section className='col-span-full md:col-span-6 xl:col-span-4 xl:mav-w-xl mx-auto w-full'>
        {/* PostForm */}
        <PostForm />
        {/* PostFeed */}
      </section>
      
      <section className='hidden xl:inline justify-center col-span-2'>
        {/* Widget */}
      </section>
    </div>
  )
}

export default page