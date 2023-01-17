import React, {useEffect, useRef} from "react";
import { View, Animated, Easing, ImageBackground } from "react-native";
import Svg, {Circle} from 'react-native-svg';


const CustomBalloon = ({pumpPercentage}) =>{
    const size = 128;
    const strokeWidth = 2;
    const center = size/2;

    const pumpAnimation = useRef(new Animated.Value(0)).current;

    const AnimatedCircle = Animated.createAnimatedComponent(Circle);

    useEffect(()=>{
        Animated.timing(pumpAnimation,{
            toValue: pumpPercentage,
            duration: 10000, 
            easing: Easing.bounce,
            useNativeDriver: true
        }).start();
    }, [pumpAnimation])
    return (
        <Animated.View style={{opacity: pumpAnimation}}>
        <Svg width={size} height={size} style={{backgroundColor:'pink'}}>
            <AnimatedCircle cx={center} cy={center} r={pumpPercentage} stroke="green" stroke-width={strokeWidth} fill="red" style={{opacity: pumpAnimation}}/>
        </Svg>
        </Animated.View>
    );
};

export default CustomBalloon;