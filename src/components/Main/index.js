import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'


const Main = () => {
    const [time, setTime] = useState(0)
    const [start, setStart] = useState(false)
    const [timeRank, setTimeRank] = useState(0)
    
    useEffect(() => {
        let interval = null;

        if(start) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 100)
            }, 100)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [start])

    const saveAndReset = () => {
        setTimeRank(time)
        setTime(0)
    }
    
    return(
        <View>
            <Text>{time / 1000}s</Text>
            <Button onPress={() => setStart(true)} title='Vai!' />
            <Button onPress={() => setStart(false)} title='Pausar' />
            <Button onPress={() => setTime(0)} title='Zerar' />
            <Button onPress={() => saveAndReset()} title='Salvar e Zerar' />
            
            <Text>Último Tempo: {timeRank / 1000}s</Text>


        </View>
    )
}

export default Main;