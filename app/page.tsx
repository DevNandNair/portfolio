import ExperienceRoadmap from "@/components/body/ExperienceRoadmap";
import SpotLight from "@/components/body/SpotLight";
import Technologies from "@/components/body/Technologies";
import Header from "@/components/layout/Header";
import Image from "next/image";




export default function Home() {
  return (
    <>
      {/* <Header gmail="nHs7A@example.com" /> */}
      <SpotLight />
      <Technologies />  
      <ExperienceRoadmap/>
    </>
  );
}
