import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

export default class Comp extends Component {
  static defaultProps = {
    list: [],
  }

  render() {
    return (
      <View>
        <View>#1: {this.props.list.map(li => <View key={li}>{li}</View>)}</View>
        <View>#2: [x] {this.props.list.map(li => <View key={`${li}`}>{li}</View>)}</View>
        <View>#3: {[1,2,3].map(li => <View key={li}>{li}</View>)}</View>
        <View>#4: [x] {[1,2,3].map(li => <View key={`${li}`}>{li}</View>)}</View>
      </View>
    )
  }
}
