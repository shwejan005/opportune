import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Briefcase, HomeIcon, MessageSquare, SearchIcon, UsersIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center p-2 max-w-6xl mx-auto">
      <Image
        className="rounded-lg"
        src="/images/logo.png"
        width={80}
        height={80}
        alt="logo"
      />

      <div className="flex-1 mx-2">
        <form className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md max-w-96">
          <SearchIcon className="h-5 w-5 text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent flex-1 outline-none"
          />
        </form>
      </div>

      <div className="flex items-center space-x-4 px-6">
        <Link href="/" className="icon flex flex-col items-center">
          <HomeIcon className="h-6 w-6" />
          <p className="text-sm">Home</p>
        </Link>

        <Link href="/network" className="icon hidden md:flex flex-col items-center">
          <UsersIcon className="h-6 w-6" />
          <p className="text-sm">Network</p>
        </Link>

        <Link href="/jobs" className="icon hidden md:flex flex-col items-center">
          <Briefcase className="h-6 w-6" />
          <p className="text-sm">Jobs</p>
        </Link>

        <Link href="/messaging" className="icon flex flex-col items-center">
          <MessageSquare className="h-6 w-6" />
          <p className="text-sm">Messaging</p>
        </Link>
        <SignedIn>
          <Button asChild>
            <UserButton />
          </Button>
        </SignedIn>
        <SignedOut>
          <Button asChild>
            <SignInButton />
          </Button>
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
