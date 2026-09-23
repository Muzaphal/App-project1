// app/_layout.tsx
import { Stack } from "expo-router";
// import "../../global.css"; // ✅ same folder, not one level up

export default function RootLayout() {
    return <Stack screenOptions={{ headerShown: false }} />;
}