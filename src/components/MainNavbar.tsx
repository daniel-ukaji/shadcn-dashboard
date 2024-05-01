import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

// Define the functional component using TypeScript
const MainNavbar: React.FC = () => {
  return (
    <div>
        <div className="flex justify-between items-center max-w-3xl mx-auto mt-3">
        <div>
          <Link href="/">
            <h1 className="font-bold">David Admin</h1>
          </Link>
        </div>
        <div>
          <Link href="/dashboard">
            <Button className="bg-black">Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainNavbar;
