/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, ScrollView, Text, TouchableOpacity, View} from 'react-native';

export default class FirstApp extends Component {

    state = {
        myLargeData:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend nulla sit amet scelerisque facilisis. Donec turpis libero, pulvinar vitae tortor non, pretium finibus ante. Sed interdum tellus elementum, interdum ipsum non, accumsan tellus. Sed tempor enim eros, ac commodo erat cursus ac. Phasellus nisi est, dapibus vitae lacinia ut, lobortis eget ante. Etiam non felis magna. Mauris felis felis, congue vitae elementum quis, dapibus id nisl. Ut auctor nulla tempus metus fermentum imperdiet. Donec urna mi, pellentesque sit amet viverra eu, feugiat non tortor. Ut sed turpis et ante lacinia porta. Aenean molestie sollicitudin aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\n" +
        "                    Nam eu urna convallis, tempus augue at, ultricies sapien. Duis sed iaculis tortor. Duis quis ipsum in quam dictum scelerisque a non diam. Aliquam erat volutpat. Proin laoreet turpis non nisl consequat, sit amet facilisis neque lacinia. Praesent consectetur eget nibh sed semper. Mauris bibendum, enim ut pellentesque blandit, eros enim tempor lectus, ut blandit turpis est eu elit. Nam vel turpis sapien. Integer tempor justo orci. Mauris fringilla sodales arcu, eget interdum nulla feugiat vel. In ut tellus rutrum, posuere metus ut, fringilla nibh. Phasellus semper augue ante. Phasellus vel condimentum orci. Vestibulum ac iaculis lorem. Vivamus egestas nibh id massa blandit, sagittis ultrices tellus imperdiet.\n" +
        "                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam ultricies suscipit enim at lacinia. Nulla id ultrices lacus. Donec lorem magna, congue vitae viverra vel, ornare vel nibh. Phasellus neque massa, consectetur non ex quis, bibendum consequat nunc. Duis pharetra tellus vitae velit molestie, sed ultrices turpis commodo. Suspendisse vitae vehicula libero, et laoreet elit. Ut a ultrices quam, id posuere nisi. Nam aliquam elementum eros, eget pellentesque tortor mollis et. Nam cursus, est ac fermentum maximus, purus metus placerat nulla, id pharetra augue lectus a massa. Nulla suscipit iaculis sapien, venenatis pellentesque dolor ornare vitae. Proin et fermentum purus. Sed molestie ornare tincidunt.\n" +
        "                    Nam nunc ligula, auctor ut euismod eget, tincidunt non arcu. Fusce pharetra at metus vitae ornare. Pellentesque pretium nibh a quam ornare, sed commodo sem volutpat. Morbi dapibus malesuada purus pharetra lacinia. Integer in nulla metus. Phasellus pharetra eros sem, at imperdiet felis scelerisque eu. Ut in finibus dolor. Donec rutrum mauris et velit ultrices, ut dignissim ligula auctor. Aliquam leo sem, fringilla id purus a, eleifend vestibulum lectus. Integer malesuada tellus at neque tincidunt vulputate. Donec nec vulputate mauris, vitae tincidunt odio. In hac habitasse platea dictumst. Maecenas commodo rutrum tortor ut auctor. Suspendisse ac augue id velit pretium feugiat. Phasellus a est id dolor gravida convallis dapibus vitae dui. Suspendisse sit amet nibh ut nulla venenatis volutpat.\n" +
        "                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam maximus justo quis est viverra, quis faucibus enim consequat. Suspendisse potenti. Suspendisse luctus malesuada tincidunt. Vestibulum eget quam sed urna gravida placerat sit amet nec dui. Nulla vitae dolor ut orci tristique malesuada. Vivamus a ipsum id mi lobortis maximus sit amet vitae arcu. Nunc augue dui, sagittis quis facilisis vitae, interdum vitae velit. Morbi finibus quam a metus semper, vitae dignissim nibh mattis. Nam vestibulum ex nulla, in congue velit elementum ut. Nullam venenatis vehicula neque eget rhoncus. Curabitur id cursus sem. Donec quis tincidunt libero. Cras eget orci sed ex congue posuere id id ante."
    };

    render() {
        return (
           <View style={{
               flex:1
           }}>
               <TouchableOpacity
                    onPress={()=>{
                        this.setState({
                            myLargeData:this.state.myLargeData+"================================================"+this.state.myLargeData
                        })
                    }}
               >
                    <Text>CLick Me To Increase Text</Text>
               </TouchableOpacity>
               <ScrollView style={{
                   flex: 1,
                   padding:10
               }}>
                   <Text>
                       {this.state.myLargeData}
                   </Text>
               </ScrollView>
           </View>
        );
    }
}

AppRegistry.registerComponent('FirstApp', () => FirstApp);
