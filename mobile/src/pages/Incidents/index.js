import React, { useEffect,useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import { Feather } from '@expo/vector-icons';
import styled from './styled';

import logoHero from '../../assets/logo.png';

export default function Incidents(){ 
    const navigation = useNavigation();
    const [incidents,setIncidents] = useState([]);
    const [totalCount,setTotalCount] = useState(0);
    const [page,setPage] = useState(1);
    const [loanding,setLoanding] = useState(false);

    async function loadIncidents(){
        if(loanding){
            return;
        }

        if(totalCount > 0 &&  incidents.length === totalCount){
            return;
        }

        setLoanding(true);

        const response = await api.get('incidents',{
            params: { page }
        });
        setIncidents([...incidents, ...response.data]);
        setTotalCount(response.headers['x-total-count']);
        setPage(page + 1);
        setLoanding(false);
    }

    useEffect(()=>{
        loadIncidents();
    },[]);

    function navigationToDetail(incident) {
        navigation.navigate('Detail',{incident});
    }

    return (
        <View style={styled.container}>
        <View style={styled.header}>
            <Image source={logoHero}/>
            <Text style={styled.headerText}>
                Total de <Text style={styled.headerTextBold}>{totalCount} casos</Text>.
            </Text>
        </View>
            <Text style={styled.title}>Bem-vindo!</Text>
            <Text style={styled.description}>Escolha um dos casos abaixo para salvar o dia.</Text>

            <FlatList 
                data={incidents}
                style={styled.incidentList}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item:incident })=>(
                    <View style={styled.incident}>
                        <Text style={styled.incidentProperty}>ONG:</Text>
                        <Text style={styled.incidentValue}>{incident.name}</Text>

                        <Text style={styled.incidentProperty}>CASO:</Text>
                        <Text style={styled.incidentValue}>{incident.title}</Text>

                        <Text style={styled.incidentProperty}>VALOR:</Text>
                        <Text style={styled.incidentValue}>{
                            Intl.NumberFormat(
                                'pt-BR',
                                { 
                                    style:'currency',
                                    currency:'BRL'
                                }).format(incident.value)}
                        </Text>
                        <TouchableOpacity 
                            style={styled.detailButton}
                            onPress={()=>navigationToDetail(incident)}>
                            <Text style={styled.detailButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#e02041"/>
                        </TouchableOpacity>
                    </View>
                )}/>
        </View>
    )
}