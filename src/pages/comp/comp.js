import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

export default class Comp extends Component {
  static defaultProps = {
    list: [],
  }

  render() {
    return (
      <View>
        #1: {this.props.list.map(li => <View key={li}>{li}</View>)}
        #2: {this.props.list.map(li => <View key={`${li}`}>{li}</View>)}
      </View>
    )
  }
}
