 import { Text, View } from "react-native";
 import '../global.css';
 import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/login">sign me up</Link>
      <Link href="/Image_classifier">Camera</Link>
      <Text className="text-3xl text-red-700">Edit my app/index.tsx to edit this screen.</Text>
    </View>
  );
}
