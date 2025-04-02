import Image from "next/image";
import LoginPage from "./pages/login/page";
import { RegisterForm } from "@/components/ui/form/register-from";
import Hero from "@/components/Hero";
import NavBar from "@/components/navbar";
import { ResizableDemo } from "@/components/test";

export default function Home() {
  return (
    
      <>
      {/* Homepage */} 
      <NavBar />
      {/* ResizableDemo */}
      <Hero/>
      </>
   
  );
}