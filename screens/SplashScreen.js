import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,SafeAreaView,
    Image
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import CountryPicker from 'rn-country-dropdown-picker';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();
    let ccode ="";
    let countryname=""; 
    function handleSelection(e) {
        console.log(e);
        ccode=e['code'];
        countryname=e['country'];
      }
    return (
        <SafeAreaView style={styles.container}>
        
      <View style={styles.header}>
          <Animatable.Image 
              animation="bounceIn"
              duraton="1500"
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="stretch"
          />
      </View>
      <Animatable.View 
          style={[styles.footer, {
              backgroundColor: colors.background
          }]}
          animation="fadeInUpBig"
      >
          <Text style={[styles.title, {
              color: colors.text
          }]}>Select your Country</Text>
          
          <View style={styles.button}>
          <View style={styles.cpicker}>
            <CountryPicker selectedItem={handleSelection} />
            </View>
          <TouchableOpacity style={styles.Topacity} onPress={()=>navigation.navigate('HomeScreen',{code:ccode,country:countryname})}>
              
              <Text style={styles.textSign}>Get Started</Text>  
                 
                  <MaterialIcons 
                      name="navigate-next"
                      color="#fff"
                      size={20}
                  />
          </TouchableOpacity>
          </View>
      </Animatable.View>
    </SafeAreaView>
    );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#3885EA'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  Topacity:{
    elevation: 8,
    backgroundColor: "#3885EA",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
     // width: height_logo,
      //height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  },
  cpicker:{
      paddingVertical:8
  }
});
