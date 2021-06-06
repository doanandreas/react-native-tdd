import React, { FC, useState } from "react";
import { Button, Text, View } from "react-native";

const Counter: FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text>Counter: {counter}</Text>
      <Button
        title="Increment"
        onPress={() => setCounter(counter + 1)}
        testID="incrementButton"
      />
      <Button
        title="Decrement"
        onPress={() => setCounter(counter - 1)}
        testID="decrementButton"
      />
    </View>
  );
};

export default Counter;
