


function Ground(props) {
    return <mesh {...props} >
        <meshStandardMaterial color={props.color} ></meshStandardMaterial>
        <boxGeometry></boxGeometry>
    </mesh>
}

export default Ground;