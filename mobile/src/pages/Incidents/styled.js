import { StyleSheet } from 'react-native';
import  Constants  from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:24,
        paddingVertical: Constants.statusBarHeight + 20,
    },
    header:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerText:{
        fontSize: 15,
        color:'#737380',
    },
    headerTextBold:{
        fontWeight: 'bold'
    },
    title:{
        fontSize:30,
        marginBottom:16,
        marginTop:48,
        fontWeight:'bold',
        color:'#13131a'

    },
    description:{
        fontSize: 16,
        lineHeight:24,
        color:'#737380'
    },
    incidentList:{
        marginTop:32
    },
    incident:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#ffffff',
        marginBottom:16
    },
    incidentProperty:{
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold'
    },
    incidentValue:{
        marginTop:8,
        fontSize:15,
        color:'#737370',
        marginBottom:24
    },
    detailButton:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    detailButtonText:{
        color:'#e02041',
        fontSize:15,
        fontWeight: 'bold'
    }
});