import { Stack, Text } from "@chakra-ui/react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Avatar from "./3dComponents/Avatar";
import { Vector3 } from "three";
import { Suspense, useEffect, useMemo, useRef } from "react";
import {
  OrbitControls,
  ScreenSpace,
  ScrollControls,
  Sky,
  Sparkles,
  Stars,
  useCamera,
} from "@react-three/drei";
import Canvas1 from "./3dComponents/Canvas1";
import { gsap } from "gsap";



function Homepage() {
  const scrollref = useRef()
  
   
  return (
    <Stack
      h={"100vh"}
      margin={0}
      padding={0}
      // justifyContent={"center"}
      // alignItems={"center"}
      background={
        "linear-gradient(0deg, rgba(47,38,70,1) 0%, rgba(25,19,55,1) 100%)"
      }
      color={"white"}
      overflowY={'scroll'}
    >
      {/* <Suspense fallback={<span>loading...</span>}>

        <Canvas1 scrollref={scrollref}></Canvas1>
      </Suspense> */}

      <Stack bg={'red'} w={'1020vw'} h={'120vw'} ref={scrollref}>
        <Text >Text</Text>
      </Stack>
    </Stack>
  );
}


export default Homepage;
