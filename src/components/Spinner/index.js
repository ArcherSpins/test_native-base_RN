import React from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import { Spinner } from 'native-base';

class SpinnerComponent extends React.Component {

    state = {
        sellAnim: new Animated.Value(0)
    }

    componentWillMount = () => {
        Animated.sequence([
            Animated.timing(this.state.sellAnim, {
                toValue: 1,
                duration: 1000,
                easing: Easing.easeOutCubic
            }).start(() => {
                
            })
        ])
    }

    render() {
        return(
            <View>
                <Animated.View
                    style={{
                        opacity: this.state.sellAnim,
                        top: this.state.sellAnim.interpolate({
                            inputRange: [0,1],
                            outputRange: [-100,0]
                        })
                    }}
                >
                    <Spinner color='white' size={40} />
                    <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>Loading..</Text>
                </Animated.View>
            </View>
        )
    }
};


export { SpinnerComponent }

