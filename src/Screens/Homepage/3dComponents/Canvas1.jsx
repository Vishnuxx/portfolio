import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Ground from "./Ground";
import Avatar from "./Avatar";
import Camera from "./Camera";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Canvas1(props) {
  const camposition = { x: 0, y: 1.6, z: 0 };
  const camlookats = { x: 0, y: 1.6, z: 0 };

  useEffect(() => {
    // if (true) {
    //   const tl = gsap.timeline({
    //       // scrollTrigger: {
    //       //   trigger: props.scrollref,
    //       //   start: "top center",
    //       //   end: "bottom center",
    //       //   scrub: true,
    //       //   markers: true,
    //       // },
    //   } , 0);
    //   tl.to(camposition, {
    //     duration: 1,

    //     x: 0,
    //     y: 1.6,
    //     z: 2,
    //   });
    //   tl.to(camposition, {
    //     duration: 1,

    //     x: 1,
    //     y: 1.6,
    //     z: 3,
    //   });
    //   tl.to(camposition, {
    //     duration: 2,
    //     x: 1,
    //     y: 1.6,
    //     z: 0.2,
    //   });

    //   tl.to(camlookats, {
    //     duration: 2,
    //     x: 0,
    //     y: 1.6,
    //     z: 0,
    //   } , 0);
    // }

    
  }, [props.scrollref]);

  return (
    <Canvas {...props}>
      {/* <Camera position={camposition} lookats={camlookats}></Camera> */}
      <ambientLight></ambientLight>
      <Stars></Stars>
      <OrbitControls></OrbitControls>
      <Avatar></Avatar>
      <Ground
        rotation={[0, (90 * Math.PI) / 180, 0]}
        scale={[1000, 0.1, 1000]}
      ></Ground>
     
    </Canvas>
  );
}

export default Canvas1;
