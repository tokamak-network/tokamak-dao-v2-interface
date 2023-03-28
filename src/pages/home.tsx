import { useWindowDimensions } from "@/hooks/useWindowDimensions";

// import DesktopHome from "./components/home/DesktopHome";
// import MobileHome from "./components/home/MobileHome";


function Home() {
  const [width] = useWindowDimensions();
  const mobile = width < 1040;

  return (
    <>
      {/* {mobile? <MobileHome/>:  */}
      {/* <DesktopHome/> */}
    {/* } */}
    </>
   
  );
}

export default Home;
