import { createStackNavigator } from '@react-navigation/stack';
import { PRIMARY_COLOR } from '../../commons/constantsColor';
import { FormScreen } from '../FormScreen';
import { InitScrren } from '../InitScreen';

const Stack = createStackNavigator();

export const StackNavigator=()=> {
  return (
    <Stack.Navigator screenOptions={{
        cardStyle:{
            backgroundColor: PRIMARY_COLOR
        }
    }}>
      <Stack.Screen name="InitScrren"  options={{headerShown:false,}} component={InitScrren} />
      <Stack.Screen name="FormScreen" options={{headerShown:false,}} component={FormScreen} />
      
    </Stack.Navigator>
  );
}