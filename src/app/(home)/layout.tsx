import Header from "@/components/header/Header";
import LocomotiveProvider from "../provider/LocomotiveProvider";
import { ScrollReadyProvider } from "../provider/ScrollReadyContainer";
import Footer from "@/components/Footer";


export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Header/>
    {children}
    <Footer/> */}

<ScrollReadyProvider>
    <LocomotiveProvider>
      <Header/>
           {children}
        <Footer/>
    </LocomotiveProvider>
</ScrollReadyProvider>
    </>
  );
}
