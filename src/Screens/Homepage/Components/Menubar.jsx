import { Link, Stack } from "@chakra-ui/react";


function Menubar() {
    return (
      <Stack position={"absolute"} top={0} flexDirection={"row"}>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Projects</Link>
        <Link>Clients</Link>
      </Stack>
    );
}

export default Menubar;