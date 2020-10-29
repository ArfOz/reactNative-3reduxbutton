import React from "react";
import { SafeAreaView,Text } from "react-native";
import {useSelector} from "react-redux";


const Sayfa_2 =() => {
    const almak = useSelector(arif=> arif.renk)
    return(
        <SafeAreaView style={{flex:1}}>
            <Text style={{backgroundColor:`${almak}`, flex:1}}></Text>
        </SafeAreaView>

    )
};

export {Sayfa_2};