import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Comp from '../comp/comp'

export default class Index extends Component {
  state = {
    list: [1,2,3],
  }

  render() {
    return (
      <View>
        <Comp list={this.state.list} />
      </View>
    )
  }
}
