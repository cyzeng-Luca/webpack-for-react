import React from 'react';
import addDOMEventListener from 'add-dom-event-listener';
import { contains } from '@shared/utils/commonUtil';
import BaseComponent from '@shared/utils/BaseComponent';


function returnDocument() {
  return window.document;
}


export default class Trigger extends BaseComponent {
  constructor(props) {
    super(props);
    this.root = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.visible) {
      const currentDocument = returnDocument();
      this.clickOutsideHandler = addDOMEventListener(currentDocument,
        'mousedown', this.onDocumentClick);
      return;
    }
    this.clearOutsideHandler();
  }

  componentWillUnmount() {
    this.clearOutsideHandler();
  }

  onDocumentClick = (event) => {
    const { target } = event;
    if (!contains(this.root.current, target)) {
      this.props.visibleChange(false);
    }
  }

  clearOutsideHandler = () => {
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.clickOutsideHandler = null;
    }
  }


  render() {
    return (
      <div ref={this.root}>
        <div role="presentation" onClick={() => this.props.visibleChange(true)}>
          {this.props.children}
        </div>
        { this.props.visible ? this.props.content : null }
      </div>
    );
  }
}
