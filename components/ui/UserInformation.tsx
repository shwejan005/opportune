import { currentUser } from '@clerk/nextjs/server'
import React, { use } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SignedIn } from '@clerk/nextjs'


async function UserInformation(){
    const user = await currentUser()
    const firstName = user?.firstName  
    const lastName = user?.lastName
    const imageUrl = user?.imageUrl
    return ( 
    <div>
        <Avatar>
            {user?.id?(
                <AvatarImage src={user?.imageUrl}/>
                ):(
                    <AvatarImage src="https://github.com/shadcn.png" />
                )
           }
            <AvatarFallback>
                {firstName?.charAt(0)}
                {lastName?.charAt(0)}
            </AvatarFallback>
        </Avatar>

        <SignedIn>
            <div className='text-center'>
                <p className='font-semibold'>
                    {firstName} {lastName}
                </p>
                <p>
                    @{firstName}
                    {lastName}-{user?.id?.slice(-4)}
                </p>
            </div>
        </SignedIn>
    </div>
    )
}

export default UserInformation