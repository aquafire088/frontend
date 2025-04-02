import Image from "next/image";
import LoginPage from "./pages/login/page";
import { RegisterForm } from "@/components/ui/form/register-from";
import Hero from "@/components/Hero";
import NavBar from "@/components/navbar";
import Blog from "@/components/Blog";
import Statstique from "@/components/Statstique";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    
      <>
      {/* Homepage */} 
      <NavBar />
      {/* ResizableDemo */}
      <Hero/> 
      <Blog/> 
      <Statstique/> 
      <Footer/> 
      </>
   
  );
}