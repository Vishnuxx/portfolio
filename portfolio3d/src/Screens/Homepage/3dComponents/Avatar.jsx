import { useGLTF } from "@react-three/drei";
import avatar from '../../../3dmodels/vishnu_avatar.glb'

function Avatar() {
    const gltf = useGLTF(avatar)
    return <primitive object={gltf.scene}></primitive>;
}

export default Avatar;