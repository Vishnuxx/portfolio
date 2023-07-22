
import { useGLTF } from "@react-three/drei";
import portalgate from "../../../assets/models/portal.glb";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function PortalGate(props) {

     const gltf = useLoader(GLTFLoader, portalgate);
  return <primitive object={gltf.scene} {...props}></primitive>;
}

export default PortalGate;