import React from 'react';
import { View, Text, Button,Image, StyleSheet, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import CountryFlag from "react-native-country-flag";
import Cards from './Cards';

const HomeScreen = ({route,navigation}) => {
    const {code, country } = route.params;
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    console.log(country);
    console.log(code);
  
    
    return (
      <View style={{flex:1}} >
       <View style={{flex:1,flexDirection:'row',padding:10}}>
            <View style={{flex:2,marginTop:10}} >
                <Text style={{fontSize:20}} >Check the taste of {country}  </Text>
            </View>
            <View  style={{flex:1,marginTop:10}}>
                <CountryFlag  style={{marginLeft:20}} isoCode={code} size={25} />
            </View>
       </View>
       <View style={{flex:1}} >
            <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
            <View style={styles.btnSearch}>
                <Button title="Search"/>
            </View>
       </View>
       {/*Results */}
       <View style={{flex:6}}>
        <Cards/>
       </View>
       
    </View>
    );
};

export default HomeScreen;

const styles=StyleSheet.create({
    titleview:{
    
                },
    titleText:{


                },
    flag:{

        },
    btnSearch:{
    alignItems:'flex-end',
    
        }
});