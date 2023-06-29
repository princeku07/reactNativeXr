import { useState ,useRef} from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { COLORS, icons, images, SIZES, Sizes } from "../constants";
import { Stack, useRouter } from "expo-router";
import {Canvas,useFrame} from "@react-three/fiber"
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import { event } from "react-native-reanimated";

function Box(props){
    const [active,setActive] = useState(false);
    const mesh = useRef();
    useFrame((state,delta)=> {
        if(active){
            mesh.current.rotation.y += delta   
            mesh.current.rotation.x += delta
        }

    })
    return (
        <mesh {...props} ref={mesh} scale={active ? 1.5:1} onClick={(event) => setActive(!active)}>
            <boxGeometry />
            <meshStandardMaterial color={active?'green':'gray'}/>
        </mesh>
    );
}

const Home = () => {
  return (

    
     

    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
        <Canvas>
         {/* <ambientLight intensity={0.5} /> */}
         <pointLight position={[10,10,10]} />
        <Box/>
        <Box position={[0,2,0]}/>
        <Box position={[0,-2,0]}/>
      </Canvas>
     
    </SafeAreaView>
  );
};

export default Home;
