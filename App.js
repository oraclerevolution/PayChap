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
import ScreenOTP from './pages/ScreenOTP';
import FormsData from './pages/FormsData';
import Factures from './pages/Factures';
import PaiementCanal from './pages/PaiementCanal';
import ChooseTransfer from './pages/ChooseTransfer';
import TransferNational from './pages/TransfertNational/TransferNational';
import PageTransfert from './pages/TransfertNational/PageTransfert';
import ServiceRechargement from './pages/Rechargement/ServiceRechargement';
import PageRecharge from './pages/Rechargement/PageRecharge';
import PasswordConfirm from './pages/PasswordConfirm';
import FileUploadSignUp from './pages/FileUploadSignUp';
import TransfertINter from './pages/TransfertNational/TransfertINter';
import AjouterNumero from './pages/TransfertNational/AjouterNumero';
import TransferInternational from './pages/TransfertNational/TransferInternational';
import PageAutreTransfert from './pages/TransfertNational/PageAutreTransfert';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PasswordChooseLogin from './pages/PasswordChooseLogin'

export default function App() {

  const [token, setToken ]= React.useState(-1)
  const [p_identifiant, setIdentifiant] = React.useState('vide')
    React.useEffect(()=> {
        async function loadId() {
          const recupToken = await AsyncStorage.getItem('userToken');
          setToken(recupToken || "vide");
        }
        loadId();

        async function loadIdentifiant(){
          const p_identifiant = await AsyncStorage.getItem('userId')
          setIdentifiant(p_identifiant)
          console.log(p_identifiant)
        }
    },[])

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
            } else if (route.name === 'Agents à proximité') {
              iconName = focused ? 'ios-location' : 'ios-location-outline';
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
    <NavigationTabs.Screen name="Agents à proximité" component={ListesTraders} />
    <NavigationTabs.Screen name="Paramètres" component={SettingsPage} />
  </NavigationTabs.Navigator>
)

  const NavigationNewUser = () => (
      <NavigationStack.Navigator headerMode="none" initialRouteName={"Accueil"}>
        <NavigationStack.Screen name="Accueil" component={AccueilPage} />
        <NavigationStack.Screen name="Steppers" component={SteppersPage} />
        <NavigationStack.Screen name="Login" component={LoginPage} />
        <NavigationStack.Screen name="ScreenOTP" component={ScreenOTP} />
        <NavigationStack.Screen name="PasswordConfirm" component={PasswordConfirm} />
        <NavigationStack.Screen name="Forms" component={FormsData} />
        <NavigationStack.Screen name="Facture" component={Factures} />
        <NavigationStack.Screen name="PaiementCanal" component={PaiementCanal} />
        <NavigationStack.Screen name="ChooseTransfer" component={ChooseTransfer} />
        <NavigationStack.Screen name="TransfertNational" component={TransferNational} />
        <NavigationStack.Screen name="TransfertNatMontant" component={PageTransfert} />
        <NavigationStack.Screen name="ServiceRechargement" component={ServiceRechargement} />
        <NavigationStack.Screen name="PageRecharge" component={PageRecharge} />
        <NavigationStack.Screen name="Pricing" component={PricingPage} />
        <NavigationStack.Screen name="Checkout" component={Checkout} />
        <NavigationStack.Screen name="Preuves" component={PreuvesPaiement} />
        <NavigationStack.Screen name="Historiques" component={HistoriquesTradesPage} />
        <NavigationStack.Screen name="Password" component={PasswordChoose} />
        <NavigationStack.Screen name="Signals" component={Signal} />
        <NavigationStack.Screen name="DetailsSignals" component={DetailsSignals} />
        <NavigationStack.Screen name="Tabs" component={NavigatorTabScreen} />
        <NavigationStack.Screen name="FileUploadInscription" component={FileUploadSignUp} />
        <NavigationStack.Screen name="TransfertInter" component={TransfertINter} />
        <NavigationStack.Screen name="AjouterNumero" component={AjouterNumero} />
        <NavigationStack.Screen name="Repertoire" component={TransferInternational} />
        <NavigationStack.Screen name="PageAutresTransfert" component={PageAutreTransfert} />
      </NavigationStack.Navigator>
  )

  const NavigationOldUser = () => (
    <NavigationStack.Navigator headerMode="none" initialRouteName={"Password"}>
        <NavigationStack.Screen name="Accueil" component={AccueilPage} />
        <NavigationStack.Screen name="Steppers" component={SteppersPage} />
        <NavigationStack.Screen name="Login" component={LoginPage} />
        <NavigationStack.Screen name="ScreenOTP" component={ScreenOTP} />
        <NavigationStack.Screen name="PasswordConfirm" component={PasswordConfirm} />
        <NavigationStack.Screen name="Forms" component={FormsData} />
        <NavigationStack.Screen name="Facture" component={Factures} />
        <NavigationStack.Screen name="PaiementCanal" component={PaiementCanal} />
        <NavigationStack.Screen name="ChooseTransfer" component={ChooseTransfer} />
        <NavigationStack.Screen name="TransfertNational" component={TransferNational} />
        <NavigationStack.Screen name="TransfertNatMontant" component={PageTransfert} />
        <NavigationStack.Screen name="ServiceRechargement" component={ServiceRechargement} />
        <NavigationStack.Screen name="PageRecharge" component={PageRecharge} />
        <NavigationStack.Screen name="Pricing" component={PricingPage} />
        <NavigationStack.Screen name="Checkout" component={Checkout} />
        <NavigationStack.Screen name="Preuves" component={PreuvesPaiement} />
        <NavigationStack.Screen name="Historiques" component={HistoriquesTradesPage} />
        <NavigationStack.Screen name="Password" component={PasswordChooseLogin} />
        <NavigationStack.Screen name="Signals" component={Signal} />
        <NavigationStack.Screen name="DetailsSignals" component={DetailsSignals} />
        <NavigationStack.Screen name="Tabs" component={NavigatorTabScreen} />
        <NavigationStack.Screen name="FileUploadInscription" component={FileUploadSignUp} />
        <NavigationStack.Screen name="TransfertInter" component={TransfertINter} />
        <NavigationStack.Screen name="AjouterNumero" component={AjouterNumero} />
        <NavigationStack.Screen name="Repertoire" component={TransferInternational} />
        <NavigationStack.Screen name="PageAutresTransfert" component={PageAutreTransfert} />
      </NavigationStack.Navigator>
  )

  if(token == "old"){
    return(
      <NavigationContainer>
        <NavigationOldUser />
      </NavigationContainer>
    )
  }else{
    return(
      <NavigationContainer>
        <NavigationNewUser />
      </NavigationContainer>
    )
  }
  
}

