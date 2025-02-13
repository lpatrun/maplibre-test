import * as FileSystem from 'expo-file-system';
import { Image, SafeAreaView, StyleSheet } from 'react-native';

import { mapStyle } from '@/constants/mapStyle';
import { Camera, MapView } from '@maplibre/maplibre-react-native';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Image width={200} height={150} source={{ uri: `${FileSystem.bundleDirectory}sprite.png` }} />
            <MapView style={styles.container} mapStyle={mapStyle}>
                <Camera minZoomLevel={0} maxZoomLevel={8} />
            </MapView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
