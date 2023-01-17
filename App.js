

// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   TouchableOpacity} from 'react-native';


// import CustomBalloon from './CustomBalloon';

import React from 'react';
import { View } from 'react-native-animatable';
import { Button } from 'react-native-paper';
import Animated, { useSharedValue, useAnimatedProps, withSpring } from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);


const App=() => {

// const [count, setCount] = useState(1);
// const [pressed, setPressed] = useState(false);

// const incrementHandler = ()=>{
//   console.log({count});
// setPressed(!pressed);
//     setCount(prev=>prev+1);
// }

// const resetHandler = () =>{
// setCount(1);
// }

const radius = useSharedValue(50);
  const strokeWidth = 5;

  const animatedProps = useAnimatedProps(() => ({
    // cx: `${radius.value + strokeWidth}`,
    // cy: `${radius.value + strokeWidth}`,
    cx: 250,
    cy: 250,
    r: `${radius.value}`
  }));


return (
        // <View style={styles.container}>

        // <TouchableOpacity
        // style={styles.button}
        // onPress={incrementHandler}>
        //   <Text style={styles.buttonText}>PUMP</Text>
        // </TouchableOpacity>

        // <TouchableOpacity
        // style={styles.button}
        // onPress={resetHandler}>
        //   <Text style={styles.buttonText}>RESET</Text>
        // </TouchableOpacity>

        // <Text>You clicked {count} times!!</Text>
        // <CustomBalloon pumpPercentage = {count*10}/>
        // </View>
      <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <View>
        <Svg width={500} height={500} style={{backgroundColor: 'pink'}}>
          <AnimatedCircle animatedProps={animatedProps} stroke="red" strokeWidth={strokeWidth} fill='red'/>
        </Svg>
      </View>
      <Button
        mode="contained"
        onPress={() => {
          radius.value = withSpring(10);

          if(radius.value === 10){
            radius.value = withSpring(20);
          }

          if(radius.value === 20){
            radius.value = withSpring(30);
          }

          if(radius.value === 30){
            radius.value = withSpring(40);
          }
          if(radius.value === 40){
            radius.value = withSpring(50);
          }
          if(radius.value === 50){
            radius.value = withSpring(60);
          }
        }}
      >
        Press
      </Button>
    </View>

  );
};


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'green',
//     alignItems: 'center',
//     justifyContent: 'center',
//     textAlign: 'center'
//   },
//  button:{
//   backgroundColor: 'black',
//   borderRadius: 10,
//   height: 50,
//   width: 100,
//   margin: 10,
//   padding: 10, 
//   border: 10
//  },
//  buttonText: {
//   color: "white",
//  }
// });

export default App;
