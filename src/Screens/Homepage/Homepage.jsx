import { Stack } from "@chakra-ui/react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Avatar from "./3dComponents/Avatar";
import { Vector3 } from "three";
import { useEffect } from "react";
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

function Homepage() {
  return (
    <Stack
      h={"100vh"}
      margin={0}
      padding={0}
      justifyContent={"center"}
      alignItems={"center"}
      background={
        "linear-gradient(0deg, rgba(47,38,70,1) 0%, rgba(25,19,55,1) 100%)"
      }
      color={"white"}
    >
      <Canvas1></Canvas1>
    </Stack>
  );
}


export default Homepage;
