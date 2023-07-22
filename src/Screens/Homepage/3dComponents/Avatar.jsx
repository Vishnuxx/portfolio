import { useGLTF } from "@react-three/drei";
import avatar from '../../../assets/models/vishnu_avatar.glb'
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Avatar(props) {
    const gltf = useLoader(GLTFLoader , avatar)
    return <primitive object={gltf.scene} {...props}></primitive>;
}

export default Avatar;