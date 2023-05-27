import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Vector3 } from "three";


const lookVec = new Vector3(0,0,0);

function Camera({ position , lookats }) {
  useFrame(({ camera }, delta) => {
    camera.position.x = position.x;
    camera.position.y = position.y;
    camera.position.z = position.z;

    if(lookats) {
        lookVec.set(lookats.x , lookats.y , lookats.z);
        camera.lookAt(lookVec)
    }
  });
}

export default Camera;
