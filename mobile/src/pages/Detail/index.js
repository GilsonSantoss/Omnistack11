import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import logoHero from '../../assets/logo.png';

import styled from './styled';

export default function Detail(){
    const navigation = useNavigation();

    function navigateBack(){
        navigation.goBack();
    }

    return (
        <View style={styled.container}>
            <View style={styled.header}>
                <Image source={logoHero}/>
                <TouchableOpacity 
                    onPress={navigateBack}>
                    <Feather name="arrow-left" color="#e02041" size={28}/>
                </TouchableOpacity>
            </View>

            <View style={styled.incident}>
                <Text style={[styled.incidentProperty,{marginTop:0}]}>ONG:</Text>
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

            <View style={styled.contactBox}>
                <Text style={styled.heroTitle}>Salve o dia!</Text>
                <Text style={styled.heroTitle}>Sejá o herói desse caso.</Text>

                <Text style={styled.heroDescription}>Entre em contato:</Text>

                <View style={styled.actions}>
                    <TouchableOpacity 
                        style={styled.action}
                        onPress={navigationToDetail}>
                        <Text style={styled.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styled.action}
                        onPress={navigationToDetail}>
                        <Text style={styled.actionsText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}