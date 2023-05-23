import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";

function Camera({ position }) {
  useFrame(({ camera }, delta) => {
    camera.position.x = position.x;
    camera.position.y = position.y;
    camera.position.z = position.z;
  });
}

export default Camera;
