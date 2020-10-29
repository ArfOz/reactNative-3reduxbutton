import React from "react";
import {SafeAreaView, Text} from "react-native";
import {Provider} from "react-redux";
import {createStore} from "redux";

import {Sayfa_1, Sayfa_2} from "./pages";
import {reducer, initialState} from "./context"

const store =createStore(reducer, initialState);

const Main =(props) =>{
    return(
    <Provider store ={store}>
        <SafeAreaView style={{flex:1}}>
            <Sayfa_1/>
            <Sayfa_2/>
           
           
        </SafeAreaView>
    </Provider>
    )
};

export default Main;