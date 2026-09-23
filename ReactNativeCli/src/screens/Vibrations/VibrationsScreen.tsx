import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Vibration } from "react-native";
import Button from "../../components/Button/Button";

const VibrationsScreen = () => {
  
  function handleVibration() {
    Vibration.vibrate(1000);

    // Custom Vibration
    // Vibration.vibrate([0, 700, 200, 300]);
  };
  
  return (
    <SafeAreaView>
      <Text>VibrationsScreen</Text>
      <Button title="Vibrate" onPress={handleVibration} />
    </SafeAreaView>
  );
};

export default VibrationsScreen;