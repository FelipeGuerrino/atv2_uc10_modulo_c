import React from "react";
import { Text, View } from 'react-native';

const Footer = (timesRank, timesRecord) => {
    return(
        <>
            <View>
                <Text>
                    N Registro: 
                </Text>
                <Text>
                    {timesRank}
                </Text>
                <Text>
                    Tempo 
                </Text>
                <Text>
                    {timesRecord}
                </Text>
            </View>
        </>
    )
}
