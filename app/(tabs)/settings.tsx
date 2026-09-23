// app/(tabs)/settings.tsx
import { Text, View } from "react-native";

export default function Settings() {   // ← must have `export default`
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text className="text-xl font-bold text-primary">Settings</Text>
        </View>
    );
}