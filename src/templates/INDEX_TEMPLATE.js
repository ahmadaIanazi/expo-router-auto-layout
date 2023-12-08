const INDEX_TEMPLATE = `
import { Text, View } from 'react-native';

export default function index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems:'center'}}>
      <Text>INDEX</Text>
    </View>
  );
}

`

module.exports = { INDEX_TEMPLATE };