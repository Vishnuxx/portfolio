import { Stack } from "@chakra-ui/react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Avatar from "./3dComponents/Avatar";
import { Vector3 } from "three";
import { useEffect } from "react";
import {
  OrbitControls,
  ScreenSpace,
  ScrollControls,
  Sparkles,
  useCamera,
} from "@react-three/drei";
import Menubar from "./Components/Menubar";

function Homepage() {
  return (
    <Stack
      h={"100vh"}
      margin={0}
      padding={0}
      justifyContent={"center"}
      alignItems={"center"}
      background={"black"}
      color={"white"}
    >
      <ThreeD></ThreeD>
      <Menubar></Menubar>
      {/* <Stack position={"absolute"} alignItems="center">
          <p style={{ fontSize: "11vw", fontWeight: 700 }}>VISHNUXX</p>
          <p style={{ fontSize: "2rem"}}>
            Aspiring developer techenthusiast
          </p>
        </Stack> */}
    </Stack>
  );
}

function ThreeD() {
  return (
    <Canvas style={{ position: "absolute" }}>
      <Camera></Camera>
      <ambientLight intensity={0.8}></ambientLight>
      <pointLight position={[0,2,0]}></pointLight>
      <Avatar></Avatar>
      <Effects></Effects>
      <ScrollControls></ScrollControls>
      <Ground></Ground>
      <OrbitControls />
      <Landmarks></Landmarks>
    </Canvas>
  );
}

function Box(props) {
  return (
    <mesh {...props}>
      <boxGeometry></boxGeometry>
      <meshStandardMaterial color={"green"}></meshStandardMaterial>
    </mesh>
  );
}

function Landmarks() {
  return (
    <>
      <Box position={[4, 0, 5]}></Box>

      <Box position={[3, 0, 10]}></Box>
      <Box position={[-3, 0, 20]}></Box>
      <Box position={[-5, 0, 30]}></Box>
      {/* <Box position={[5, 0, 10]}></Box>
      <Box position={[5, 0, 10]}></Box>

      <Box position={[5, 0, 10]}></Box> */}
    </>
  );
}

function Effects() {
  return (
    <>
      <Sparkles scale={[30, 30, 30]} size={10} position={[0, 3, 0]}></Sparkles>
    </>
  );
}

function Ground() {
  return (
    <mesh scale={[1000, 0.1, 1000]}>
      <boxGeometry></boxGeometry>
      <meshStandardMaterial></meshStandardMaterial>
    </mesh>
  );
}

const lerps = [[0, 1.9, 1.05]];
const vec = new Vector3(lerps[0][0], lerps[0][1], lerps[0][2]);

function Camera() {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 1.9, 2);
  }, []);
  useFrame(({ camera }, delta) => {
    // camera.position.lerp(vec, delta * 2);
    // camera.rotation.rotateTowards(vec);
    // camera.lookAt(0, 1.9, 0);
  });
}

export default Homepage;
