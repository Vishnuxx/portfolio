import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Vector3 } from "three";

const lookVec = new Vector3(0, 0, 0);

const camposition = { x: 1, y: 1.6, z: -4 };
const camrotation = { x: 0, y: 0, z: 45 * (Math.PI / 180) };
const camlookats = { x: 0, y: 1.6, z: 0 };



function Camera({ timeline ,  position, rotation, lookats }) {

  //starting animations
  useEffect(()=>{
    timeline.add("start");
    timeline.to(
      camposition,
      {
        duration: 2,

        x: 0,
        y: 1.6,
        z: 1,
      },
      "start"
    );

    timeline.to(
      camrotation,
      {
        duration: 2,

        x: 0,
        y: 0,
        z: 0,
      },
      "start"
    );

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
  }, [])
  useFrame(({ camera }, delta) => {
    camera.position.x = camposition.x;
    camera.position.y = camposition.y;
    camera.position.z = camposition.z;

    // if (camlookats) {
    //   lookVec.set(camlookats.x, camlookats.y, camlookats.z);
    //   camera.lookAt(lookVec);
    // }

    if (camrotation) {
      camera.rotation.x = camrotation.x;
      camera.rotation.y = camrotation.y;
      camera.rotation.z = camrotation.z;
    }
  });
}

export default Camera;
