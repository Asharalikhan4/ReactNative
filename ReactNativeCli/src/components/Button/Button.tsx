import { Text, StyleSheet, Animated, Pressable } from 'react-native';

interface ButtonTypes {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const Button = ({ title, onPress, disabled = false }: ButtonTypes) => {
  const scaleValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 4,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[styles.wrapper, { transform: [{ scale: scaleValue }]}]}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed,
          disabled && styles.disabled
        ]}
      >
        <Text style={[styles.text, disabled && styles.disabledText]}>
          {title}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    borderRadius: 12,
    overflow: "hidden"
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: "center",
    alignContent: "center"
  },
  pressed: {
    opacity: 0.9,
  },
  disabled: {
    backgroundColor: "#3a3a3c"
  },
  text: {
    color: "#fffff",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5
  },
  disabledText: {
    color: "#8e8e93"
  }
});

export default Button;
