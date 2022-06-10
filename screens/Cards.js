import { View,Image, Text,Dimensions,FlatList,TouchableOpacity } from 'react-native';
import React,{Component} from 'react';
import {Card} from 'react-native-paper';
import Realm from "realm";
import Icon from 'react-native-vector-icons/AntDesign';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';


const app = new Realm.App({id: "recipeapp-szora"}); // Set Realm app ID here.
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Cards extends Component  {
constructor(props){
    super(props);
    this.state={
        FoodList:[
           { ID:'1',RollNo:'1001',Title:'Fried Rice',Ingredients:'Chicken',PreparationTime:'20min'},
           { ID:'2',RollNo:'1002',Title:'Spicy Chcicken',Ingredients:'Chicken',PreparationTime:'18min'},
           { ID:'3',RollNo:'1003',Title:'Chopsuey Rice',Ingredients:'Chicken',PreparationTime:'25min'},
           { ID:'4',RollNo:'1004',Title:'Seafood platter',Ingredients:'Chicken',PreparationTime:'20min'},
           { ID:'5',RollNo:'1005',Title:'Butter Cake',Ingredients:'Chicken',PreparationTime:'20min'},
           { ID:'6',RollNo:'1006',Title:'Chocolate Eclair',Ingredients:'Chicken',PreparationTime:'20min'},
           { ID:'7',RollNo:'1007',Title:'Cheese Omlete',Ingredients:'Chicken',PreparationTime:'20min'},
           { ID:'8',RollNo:'1008',Title:'Biriyani',Ingredients:'Chicken',PreparationTime:'20min'},
           { ID:'9',RollNo:'1009',Title:'Seafood Salad',Ingredients:'Chicken',PreparationTime:'20min'}
        ]
    };
}

getStudentData=(item)=>{
    var RollNo=item.RollNo;
    var Title=item.Title;
    alert(RollNo)
   
}

render(){
    return (
        <View style={{backgroundColor:'white'}}>
          <FlatList 
          data={this.state.FoodList}
          renderItem={({item})=>
          
            <TouchableOpacity style={{margin:5,borderRadius:10,borderWidth:1}} onPress={this.getStudentData.bind(this,item)}>
               <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginLeft:0,marginRight:0}}>
                   <View style={{flex: 1}}>
                    <Image  style={{ flex: 1,width:windowWidth*0.9,height:windowHeight*0.2,}}source={require('./food.jpeg')}/>
                    <Text style={{position:'absolute', fontSize: 20,color:'white',backgroundColor:'rgba(0, 0, 0, 0.65)',marginLeft:windowWidth*0.5,marginTop:100}}>{item.Title}</Text>                    
                </View>
                <View style={{flex:1,flexDirection:'row',marginLeft:25,alignItems:'center'}}>
                    <View style={{flex:1}}>
                        <Icon name="clockcircleo" size={30} color="#900" />
                        <Text>{item.PreparationTime}</Text>
                    </View>
                    <View style={{flex:1}}>
                        <MIcon name="table-of-contents" size={30} color="#900" />
                        <Text>{item.Ingredients}</Text>
                    </View>
                    <View style={{flex:1}}>
                        <MatIcon name="category" size={30} color="#900" />
                        <Text>category</Text>
                    </View>
                </View>
                
                </View>
            </TouchableOpacity> 
        }
          keyExtractor={item=>item.ID}
          />
        </View>
      )
}
  
}