import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import { Feather } from '@expo/vector-icons';
import logoHero from '../../assets/logo.png';

import styled from './styled';

export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();

    

    const incident = route.params.incident;
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title} com o valor de ${Intl.NumberFormat('pt-BR',{ style:'currency',currency:'BRL'}).format(incident.value)}"`;

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients:[incident.email],
            body:message
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=++55${incident.whatsapp}&text=${message}`);
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
                <Text style={styled.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styled.incidentProperty}>CASO:</Text>
                <Text style={styled.incidentValue}>{incident.title}</Text>

                <Text style={styled.incidentProperty}>Detalhe:</Text>
                <Text style={styled.incidentValue}>{incident.description}</Text>

                <Text style={styled.incidentProperty}>VALOR:</Text>
                <Text style={styled.incidentValue}>{
                    Intl.NumberFormat(
                        'pt-BR',
                        { 
                            style:'currency',
                            currency:'BRL'
                        }).format(incident.value)}
                </Text>
            </View>

            <View style={styled.contactBox}>
                <Text style={styled.heroTitle}>Salve o dia!</Text>
                <Text style={styled.heroTitle}>Sejá o herói desse caso.</Text>

                <Text style={styled.heroDescription}>Entre em contato:</Text>

                <View style={styled.actions}>
                    <TouchableOpacity 
                        style={styled.action}
                        onPress={sendWhatsapp}>
                        <Text style={styled.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styled.action}
                        onPress={sendMail}>
                        <Text style={styled.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}