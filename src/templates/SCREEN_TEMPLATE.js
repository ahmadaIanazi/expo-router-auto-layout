const SCREEN_TEMPLATE = `
import { Text, View } from 'react-native';

export default function {VIEW_NAME_GO_HERE}() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems:'center'}}>
      <Text>{VIEW_NAME_GO_HERE}</Text>
    </View>
  );
}

`

module.exports = { SCREEN_TEMPLATE };