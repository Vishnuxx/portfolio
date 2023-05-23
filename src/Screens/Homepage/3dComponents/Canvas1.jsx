import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Canvas1(props) {
  return (
    <Canvas {...props}>
      <ambientLight></ambientLight>
      <Stars></Stars>
      <OrbitControls></OrbitControls>
    </Canvas>
  );
}

export default Canvas1;
