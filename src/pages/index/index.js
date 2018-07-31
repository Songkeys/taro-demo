import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Comp from '../comp/comp'
import noPropsComp from '../noPropsComp/noPropsComp'

export default class Index extends Component {
  state = {
    isFinished: true,
    isFinished2: false,
    isLoggedIn: true,
  }

  render() {
    return (
      <View>
      {/* tests for "Cannot read property 'props' of undefined" */}
      {/* test passed: */}
      <Comp isLoggedIn={this.state.isLoggedIn} />

      {/* test failed: */}
      {this.state.isFinished && <Comp isLoggedIn={this.state.isLoggedIn} />}

      {/* test passed: */}
      {!this.state.isFinished2 && <Comp isLoggedIn={this.state.isLoggedIn} />}

      {/* test failed: */}
      {!!this.state.isFinished && <Comp isLoggedIn={this.state.isLoggedIn} />}

      {/* tests for "all default props are null" */}
      <noPropsComp />
      </View>
    )
  }
}
