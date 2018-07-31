import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Btn from '../btn/btn'

export default class Comp extends Component {
  // defaultProps doesn't matter
  // static defaultProps = {
  //   isLoggedIn: false,
  // }

  render() {
    return (
      <View>
        {/* test passed with "isFinished": */}
        #1: {this.props.isLoggedIn && <Btn />}

        {/* test failed with "isFinished": */}
        #2: {!this.props.isLoggedIn && <Btn />}
      </View>
    )
  }
}
