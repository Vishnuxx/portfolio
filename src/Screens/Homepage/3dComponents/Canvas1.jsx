import {
  Cloud,
  Effects,
  OrbitControls,
  PerformanceMonitor,
  Sparkles,
  Stars,
} from "@react-three/drei";
import { SSAOPass } from "three-stdlib";
import { Canvas, extend, useThree } from "@react-three/fiber";
import Ground from "./Ground";
import Avatar from "./Avatar";
import Camera from "./Camera";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, useEffect, useState } from "react";
import PortalGate from "./PortalGate";

gsap.registerPlugin(ScrollTrigger);


function Canvas1(props) {
 
  const timeline = gsap.timeline(
    {
      scrollTrigger: {
        trigger: props.scrollref.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
    },
    0
  );

  

 

  return (
    <Canvas {...props}>
    
      <Camera
       timeline={timeline}
      ></Camera>
      <ambientLight intensity={0.5}></ambientLight>
      <Stars></Stars>
      <OrbitControls></OrbitControls>
      <fog attach="fog" color="black" near={1} far={50} />
      <></>
      <Sparkles
        size={10}
        frustumCulled
        scale={[50, 50, 50]}
        count={300}
      ></Sparkles>
      <Avatar></Avatar>
      <pointLight position={[-2, 3, 0]} color={"gold"}></pointLight>
      <pointLight position={[2, 3, 0]} color={"red"}></pointLight>
      <PortalGate
        position={[0, -1, -5]}
        rotation={[0, 90 * (Math.PI / 180), 0]}
        scale={[0.7, 0.7, 0.7]}
      ></PortalGate>
      <Ground
        color={"pink"}
        rotation={[0, (90 * Math.PI) / 180, 0]}
        scale={[1000, 0.1, 1000]}
      ></Ground>
    </Canvas>
  );
}

function Effect() {
  const { scene, camera } = useThree();
  return (
    <Effects
      multisamping={8}
      renderIndex={1}
      disableGamma={false}
      disableRenderPass={false}
      disableRender={false}
    >
      <sSAOPass
        args={[scene, camera, 100, 100]}
        kernelRadius={1.2}
        kernelSize={0}
      />
    </Effects>
  );
}

export default Canvas1;
