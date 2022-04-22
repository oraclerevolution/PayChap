import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//components
import AccueilPage from "./pages/Accueil"
import SteppersPage from "./pages/Steppers"
import LoginPage from './pages/Login'
import InscriptionPage from './pages/SignUp'
import PricingPage from './pages/Pricing'
import Checkout from './pages/Checkout'
import HistoriquesTradesPage from './pages/HistoriquesTrades'
import Home from './pages/tabs/Home'
import SignalPage from './pages/tabs/Signal'
import SettingsPage from './pages/tabs/Settings'
import ListesTraders from "./pages/tabs/ListeTraders";
import PreuvesPaiement from "./pages/PreuvesPaiement";
import Signal from "./pages/Signals"
import DetailsSignals from "./pages/DetailsSignals"
import PasswordChoose from './pages/PasswordChoose';



//creation de la navigation stack
const NavigationStack = createStackNavigator();

//reation de la navigation tabs
const NavigationTabs = createBottomTabNavigator();

const NavigatorTabScreen = () => (
  <NavigationTabs.Navigator initialRouteName={"Portefeuille"}
    screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Portefeuille') {
              iconName = focused
                ? 'ios-wallet' : 'ios-wallet-outline';
            } else if (route.name === 'Agences') {
              iconName = focused ? 'ios-map' : 'ios-map-outline';
            }else if (route.name === 'Paramètres') {
              iconName = focused ? 'ios-cog' : 'ios-cog-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#1E89E2',
          inactiveTintColor: 'gray',
        }}
  >
    <NavigationTabs.Screen name="Portefeuille" component={Home} />
    <NavigationTabs.Screen name="Agences" component={ListesTraders} />
    <NavigationTabs.Screen name="Paramètres" component={SettingsPage} />
  </NavigationTabs.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack.Navigator headerMode="none" initialRouteName={"Accueil"}>
        <NavigationStack.Screen name="Accueil" component={AccueilPage} />
        <NavigationStack.Screen name="Steppers" component={SteppersPage} />
        <NavigationStack.Screen name="Login" component={LoginPage} />
        <NavigationStack.Screen name="SignUp" component={InscriptionPage} />
        <NavigationStack.Screen name="Pricing" component={PricingPage} />
        <NavigationStack.Screen name="Checkout" component={Checkout} />
        <NavigationStack.Screen name="Preuves" component={PreuvesPaiement} />
        <NavigationStack.Screen name="Historiques" component={HistoriquesTradesPage} />
        <NavigationStack.Screen name="Password" component={PasswordChoose} />
        <NavigationStack.Screen name="Signals" component={Signal} />
        <NavigationStack.Screen name="DetailsSignals" component={DetailsSignals} />
        <NavigationStack.Screen name="Tabs" component={NavigatorTabScreen} />
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
}

