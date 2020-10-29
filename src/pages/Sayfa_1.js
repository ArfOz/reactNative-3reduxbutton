import React from "react";
import { SafeAreaView, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch} from "react-redux";


const Sayfa_1 = () =>{

    const gonderme = useDispatch();
    return(
        <SafeAreaView style={{flex:1}}>

            <TouchableOpacity onPress={() => 
        gonderme({type:"pink", payload:{ color:"pink" }})} style={{backgroundColor:"pink", flex:1}}></TouchableOpacity>
       
            <TouchableOpacity onPress={() => 
        gonderme({type:"red",
            payload:{color:"red"       
        }})} style={{backgroundColor:"red", flex:1}}></TouchableOpacity>
        
            <TouchableOpacity onPress={() => 
            gonderme({type:"yellow",
            payload:{color:"yellow"}
            })} style={{backgroundColor:"yellow", flex:1}}></TouchableOpacity>
       
         <TouchableOpacity onPress={() => 
            gonderme({type:"black",
            payload:{color:"black"}
            })} style={{backgroundColor:"black", flex:1}}></TouchableOpacity>
            
        </SafeAreaView>
    )
};


export {Sayfa_1};
