import React from 'react';
import { Text, View } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import { CalcultorBottom } from '../components/CalcultorBottom';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
    const {
        number,
        prevNumber,
        buildNumber,
        clear,
        deletOperation,
        toogleSign,
        divideOperation,
        addOperation,
        subtractOperation,
        multiplyOperation,
        calculateRestult,
    } = useCalculator();
  return (
    <View style={styles.calculatorContainer}>
        <View style={{paddingHorizontal:30,paddingBottom:20}}>
            <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={styles.mainResult}>{number}</Text>

            <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={styles.subResult}>{(prevNumber === '0' ? '' : prevNumber)}</Text>

        </View>

        <View style={styles.row}>
            <CalcultorBottom blackText label="C" color={colors.lightGray} onPress={clear}/>
            <CalcultorBottom blackText label="+/-" color={colors.lightGray} onPress={toogleSign}/>
            <CalcultorBottom blackText label="del" color={colors.lightGray} onPress={deletOperation}/>
            <CalcultorBottom blackText label="/" color={colors.orange} onPress={divideOperation}/>
        </View>
        <View style={styles.row}>
            <CalcultorBottom label="7" color={colors.darkGray} onPress={() => {buildNumber('7');}}/>
            <CalcultorBottom label="8" color={colors.darkGray} onPress={() => {buildNumber('8');}}/>
            <CalcultorBottom label="9" color={colors.darkGray} onPress={() => {buildNumber('9');}}/>
            <CalcultorBottom label="X" color={colors.orange} onPress={multiplyOperation}/>
        </View>
        <View style={styles.row}>
            <CalcultorBottom label="4" color={colors.darkGray} onPress={() => {buildNumber('4');}}/>
            <CalcultorBottom label="5" color={colors.darkGray} onPress={() => {buildNumber('5');}}/>
            <CalcultorBottom label="6" color={colors.darkGray} onPress={() => {buildNumber('6');}}/>
            <CalcultorBottom label="-" color={colors.orange} onPress={subtractOperation}/>
        </View>
        <View style={styles.row}>
            <CalcultorBottom label="1" color={colors.darkGray} onPress={() => {buildNumber('1');}}/>
            <CalcultorBottom label="2" color={colors.darkGray} onPress={() => {buildNumber('2');}}/>
            <CalcultorBottom label="3" color={colors.darkGray} onPress={() => {buildNumber('3');}}/>
            <CalcultorBottom label="+" color={colors.orange} onPress={addOperation}/>
        </View>
        <View style={styles.row}>
            <CalcultorBottom label="0" color={colors.darkGray} doubleSize onPress={() => {buildNumber('0');}}/>
            <CalcultorBottom label="." color={colors.darkGray} onPress={() => {buildNumber('.');}}/>
            <CalcultorBottom label="=" color={colors.orange} onPress={calculateRestult}/>
        </View>
    </View>
  );
};
