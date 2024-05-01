import Image from "next/image";
import { Inter } from "next/font/google";
import MainNavbar from "@/components/MainNavbar";
import HeroText from "@/components/HeroText";
import CardComponent from "@/components/CardComponent";
import { auth } from '@clerk/nextjs/server';
import { currentUser } from '@clerk/nextjs/server';


const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = async () => {
  const { userId } : { userId: string | null } = auth();
  const user = await currentUser();

console.log(user)
  return (
    <div>
      <MainNavbar />
      <HeroText />
      <div className="mb-8 mt-12 border-t border-gray-200 max-w-3xl mx-auto" />
      <div className="max-w-2xl mx-auto">
        <h1 className="font-semibold text-2xl">Events</h1>
      </div>
      <CardComponent />
    </div>
  );
}

export default Home;
