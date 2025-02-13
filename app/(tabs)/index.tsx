import { SafeAreaView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

import { Camera, CameraRef, MapView, PointAnnotation } from '@maplibre/maplibre-react-native';
import { useRef, useState } from 'react';

export default function HomeScreen() {
    const cameraRef = useRef<CameraRef>(null);

    const LN = [-0.118092, 51.509865];
    const NY = [-73.935242, 40.73061];

    const AN = [-149.863129, 61.217381];
    const AN_positive = [329.863129, 61.217381];
    const TO = [139.839478, 35.652832];

    const [workingBounds, setWorkingBounds] = useState(true);

    const fitBounds = () => {
        if (workingBounds) {
            cameraRef.current?.fitBounds(LN, NY, [100, 100, 100, 100], 0);
            // Hack so I can call fitBounds more than once
            cameraRef.current?.setCamera({
                padding: { paddingBottom: 100, paddingLeft: 100, paddingRight: 100, paddingTop: 100 },
            });
        } else {
            cameraRef.current?.fitBounds(AN_positive, TO, [100, 100, 100, 100], 0);
            // Hack so I can call fitBounds more than once
            cameraRef.current?.setCamera({
                padding: { paddingBottom: 100, paddingLeft: 100, paddingRight: 100, paddingTop: 100 },
            });
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={fitBounds} style={styles.boundsButton}>
                <Text>Center</Text>
            </TouchableOpacity>

            <View style={styles.switchWrapper}>
                <Text>Use transatlantic bounds</Text>
                <Switch onValueChange={val => setWorkingBounds(val)} value={workingBounds} />
            </View>

            <MapView style={styles.container}>
                <Camera ref={cameraRef} minZoomLevel={0} maxZoomLevel={8} />

                <PointAnnotation id="LN" coordinate={LN}>
                    <View style={styles.point} />
                </PointAnnotation>
                <PointAnnotation id="NY" coordinate={NY}>
                    <View style={styles.point} />
                </PointAnnotation>

                <PointAnnotation id="AN" coordinate={AN}>
                    <View style={styles.point} />
                </PointAnnotation>
                <PointAnnotation id="TO" coordinate={TO}>
                    <View style={styles.point} />
                </PointAnnotation>
            </MapView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boundsButton: { position: 'absolute', top: 50, left: 50, zIndex: 999 },
    switchWrapper: { position: 'absolute', top: 75, left: 50, zIndex: 999 },
    point: {
        width: 15,
        height: 15,
        borderRadius: 15,
        backgroundColor: 'red',
    },
});
