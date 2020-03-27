import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import styled from './styled';

import logoHero from '../../assets/logo.png';

export default function Incidents(){
    const navigation = useNavigation();

    function navigationToDetail(){
        navigation.navigate('Detail');
    }

    return (
        <View style={styled.container}>
        <View style={styled.header}>
            <Image source={logoHero}/>
            <Text style={styled.headerText}>
                Total de <Text style={styled.headerTextBold}>0 casos</Text>.
            </Text>
        </View>
            <Text style={styled.title}>Bem-vindo!</Text>
            <Text style={styled.description}>Escolha um dos casos abaixo para salver o dia.</Text>

            <FlatList 
                data={[1,2,3]}
                style={styled.incidentList}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={()=>(
                    <View style={styled.incident}>
                        <Text style={styled.incidentProperty}>ONG:</Text>
                        <Text style={styled.incidentValue}>APAD:</Text>

                        <Text style={styled.incidentProperty}>CASO:</Text>
                        <Text style={styled.incidentValue}>Cadelinha atropelada.</Text>

                        <Text style={styled.incidentProperty}>VALOR:</Text>
                        <Text style={styled.incidentValue}>R$ 15,00</Text>
                        <TouchableOpacity 
                            style={styled.detailButton}
                            onPress={navigationToDetail}
                            >
                            <Text style={styled.detailButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#e02041"/>
                        </TouchableOpacity>
                    </View>
                )}/>
        </View>
    )
}