import { LinearGradient } from "expo-linear-gradient";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { elevation } from "../styles/styles";

export default function CategoryItem({ name, imageUrl, index, active, handlePress }) {
    //props are immutable(only-read)
    //props are properties, passed as function arguments to a component.
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.hr}></Text>
            <View style={
                [styles.container,
                styles.elevation, index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
                active ? { backgroundColor: "rgb(154,157,152)" } : { backgroundColor: "white" }
                ]}>
                <View>
                    <Image source={imageUrl} style={styles.image} />
                </View>
                <LinearGradient
                    colors={['#ada996', '#f2f2f2', '#dbdbdb', '#eaeaea']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.textWrapper}
                >
                    <Text style={styles.text}>{name}</Text>
                </LinearGradient>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 170,
        height: 170,
        borderRadius: 10,
        marginHorizontal: 15,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 20,
    },
    elevation,
    image: {
        width: 150,
        height: 150,
    },
    textWrapper: {
        padding: 4,
        position: "absolute",
        bottom: 35,
        left: 30,
        borderRadius: 4,
    },
    hr: {
        borderTopWidth: 2,
        marginTop: 10,
        borderColor:"grey"
    },
    text: {
        color: "black",
        fontWeight: "bold",
    },
})