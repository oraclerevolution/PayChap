import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { FONTS, SIZES, COLORS } from '../../constants/theme'
import { Header, Icon } from 'react-native-elements';

const ServiceRechargement = ({navigation}) => {
    const services = [
        {
            id: 1,
            title: "Orange Money",
            page: "PageRecharge",
            image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///8AAAD/ZgD/YQD/XADe3t5YWFj/oHn/0sD/+PX/lGyoqKh6eno6Ojr/WgDu7u7/8+/19fX/lXQ5OTn/VQBwcHD/ekb/j2uvr68vLy//dED/f1VjY2NcXFzJycn/6+SSkpL/bzHq6uq9vb0SEhJHR0f/aCn/ZhklJSXU1NT/2Mz/pof/bjv/cEL/hVj/sJf/wrL/zb3/rJKLi4v/eFf/4tj/v6j/qZadnZ3/noD/byz/eU//ZSD/7ef/iWB0dHS5VLuSAAAEnElEQVR4nO2c6VbbMBBGHdtJWR0CBkKBsBeSUCgBUmiBvv9b1QEOOLFWz1hWON/9bevoohmN5EgEAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGxbr7kClDIa7l+c/r67v6+5IRQy2kjjMiOL45aDuzlTBMAk/iNJfdXeHn+2cYEZ6XXeHuFmPw2nSm7q7xEtBMAzPv9Ssul0UDOMRR8v9h71WGfZve/JGD8ZLu3d3S2Pz+XA9KQpmg0j367Ua5dnoiht9Xo+TaDIdJvG2oaMgRF8zkVwWVwh+E1odQaM3cfQ55ydGc75EMIzHRME9omCjcdouNHqdWs/528IQnfyBftMEqSM4YXW20Zt0ppf6OV82gmTDHoNgo3E43ejaU6GbyVpZwTCiFf0dFsPG8VSjo2J3o0dlN0Rl4uOPs0AR7PMINh7yjS4WhzDrp6pwS3PQZPjV3DIZtvKNDmazUDcSihDNeKEIBpRKOEW+YoxFI6KYL9SCxHLIlIbTifgtEnQ0Wpf1QRmiYaxOYB0dNsOm1nBJ0gfxUu3jtS3iwnujdkN1iEbfqTsL+oKGaKgRPCL6BcFyzYbqHCSHaMZxvYaaEWQQ5AvTUoZV5+Ar7RoNVUu1iSCHX8ZJbYYVl4lPujUZusjBd/qndRjqygTvF7blVeeGmjLBlYOfNE+WxXQPKzF0loMGnFVh6KRMmNExjV8rw8qXaua0jRPUxlCXgw5H0FzQxlAXoqSPFnZ0LPZW5oa6EHUo2LbZPBobapZqzHVQLWhVJE0NNWXCaYjarQIMDR/VI3jpr6Ch4aN6BH+4DFHbDzhGhpoQvfQ2B00NNSPoa5kwNxypBZ2WiRJbDa1h5qAUdJqDZfZSBoZKQZchWkqQaOhVDrbEXwRIhl6ViRXJF1aKoVdLtZWgyW7oVYiuBPyGXi3VMkF2Q6/KxESQ29CrHf2rILOhbznIbujVjv5dkNXQszLBb+jVjv5DkNHQU0FGQ6+Warln2Qz/rC1KqEDQfAQZDc8jCed/h8yXZQzLBLehgji54nS0yEFXhryXZaxC1JlhGKbU091lBZ0ZhumARdAuB50ahk8cgjZlwrlhwhCn1iHq1DCk/xZsOYs6N0yo9ytLCTo1JB3SLyvo0pB6HUhziF0iOEeGmrOzMsGgfSF8Pn/1acRlSLs+WlJQcrx/I/9E4dZTSRLS4lR9IlEhKL4KNvXCs/JnNHNoVys3ywqKLxJNXyV9YQnTaEgyVF20UAoKT7q1pp8YsAxiSvrI0RHPFyaCotm0OfOI+lSQGcRFm8JQJyjI4eJV4L/kOI2lt4iohpsGb88oCu46L+4SAzWlXXcK5MdGTQSzQM2l8UZf+MgoJQxjzLCvkBz9/Wf6/sn+axRc7J/InlgbHsVJXIanrTHD9zbx4stsBN/oNHu9puii+ifP9wv2DO6ZPhSLlqU2gv4j+D3eOETnhMKc/9UEC4r6Ojh/9PNFUfIPPOad7tnb+Z+dQ/WkOM8c97rd3uyyEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAV/wHCimpGoi1d2gAAAABJRU5ErkJggg=="
        },
        {
            id: 2,
            title: "Flooz",
            page: "PageRecharge",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-G8eRp2j8LDiTh-TMCBAUkHteO3sr1u5u-v_B6umn7Jqh0PbCETybRZDuvIZSfu7ZWA&usqp=CAU"
        },
        {
            id: 3,
            title: "MTN Mobile Money",
            page: "PageRecharge",
            image:"https://www.africaguinee.com/sites/default/files/field/image/logo_momo_fond_jaune.png.jpg"
        },
        {
            id: 4,
            title:"UBA",
            page: "PageRecharge",
            image:"https://www.jadoremabanque.com/uploads/images/27.jpeg"
        },
        {
            id: 5,
            title: "Djamo",
            page:"PageRecharge",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRusqiKhviikGe0SWOz3pHl2gA-eQeI-omzBwBxo9AmaRaxwlRmSKrgbIzz0Gqa5nCFq0&usqp=CAU"
        }
    ]
    function Historiques(){

        const renderItem = ({ item }) => (
            <TouchableOpacity style={{
                flex:1,
                padding:6,
                width:"100%",
                flexDirection: 'row',
            }} onPress={()=> navigation.navigate(item.page)}>
                <View>
                    <Image source={{uri:item.image}} style={{width:55, height:55}} />
                </View>
                <View style={{
                    flex:3,
                    padding:3
                }}>
                    <Text style={{
                        fontSize:21,
                        fontWeight:"bold",
                        color:"#7a7a7a", position:"relative",top:8, marginLeft:5
                    }}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
        return (
            <FlatList
                numColumns={1}
                data={services}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        )
    }
  return (
    <View style={styles.container}>
        <Header
            leftComponent={
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Icon size={23} name="arrow-back" color="#fff" />
                </TouchableOpacity>
            }
            centerComponent={
                <Text style={{color:"white", fontSize:19}}>Recharger mon compte</Text>
            }
        />
        <View style={{flex:1, padding:7}}>
            {Historiques()}
        </View>
    </View>
  )
}

export default ServiceRechargement

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
    }
})