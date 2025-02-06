import { SafeAreaView, StyleSheet } from 'react-native';

import { mapStyle } from '@/constants/mapStyle';
import { Camera, MapView } from '@maplibre/maplibre-react-native';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <MapView style={styles.container} mapStyle={JSON.stringify(mapStyle)}>
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
