import { Component } from 'react';
import { shallowEqualImmutable } from 'react-immutable-render-mixin';

export default class BaseComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      !shallowEqualImmutable(this.props, nextProps)
      || !shallowEqualImmutable(this.state, nextState)
    );
  }
}
