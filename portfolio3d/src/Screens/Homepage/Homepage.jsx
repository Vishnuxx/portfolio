import { Stack } from "@chakra-ui/react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Avatar from "./3dComponents/Avatar";
import { Vector3 } from "three";
import { useEffect } from "react";
import { useCamera } from "@react-three/drei";
import Menubar from "./Components/Menubar";

function Homepage() {
    return (
      <Stack
        h={"100vh"}
        margin={0}
        padding={0}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Canvas style={{ position: "absolute" }}>
          <Avatar></Avatar>
          <Camera></Camera>
          <ambientLight></ambientLight>
        </Canvas>
        <Menubar></Menubar>
        <Stack position={"absolute"} alignItems="center">
          <p style={{ fontSize: "11vw", fontWeight: 700 }}>VISHNUXX</p>
          <p style={{ fontSize: "2rem"}}>
            Aspiring developer techenthusiast
          </p>
        </Stack>
      </Stack>
    );
}

const lerps = [[0,1.9,1.05]]
const vec = new Vector3(lerps[0][0], lerps[0][1], lerps[0][2]);

function Camera() {
    const {camera} = useThree();
    useEffect(() => {
        camera.position.set(0,1.9,2)
    }, []);
    useFrame(({camera} ,delta)=>{
        camera.position.lerp(vec , delta*2);
        camera.lookAt(0,1.9,0)
    })
}

export default Homepage;

