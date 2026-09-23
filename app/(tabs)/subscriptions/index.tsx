import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Subscriptions() {
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text className="text-xl font-bold text-primary">Subscriptions</Text>
            <Link href="/subscriptions/sportify" className="mt-4 text-accent">
                Spotify
            </Link>
        </View>
    );
}