import React from "react";
import styled, { keyframes } from "styled-components";

const AnimatedBorder = styled.div`
  position: relative;
  z-index: 15;
`;

// Left Border styles
const leftBorderTopBottom = keyframes`
    from {height: 0%;}
    to {height: 100%;}
`;
const LeftBorder = styled.div`
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  animation: ${leftBorderTopBottom};
  animation-duration: .5s;
  background-color: red;
  position: absolute;
  backface-visibility: hidden;
  z-index: 15;
`;

// Right border styles
const rightBorderTopBottom = keyframes`
    from {height: 0%;}
    to {height: 100%;}
`;
const RightBorder = styled.div`
  top: 0;
  right: 0;
  width: 1px;
  height: 100%;
  animation: ${rightBorderTopBottom};
  animation-duration: .5s;
  background-color: red;
  position: absolute;
  z-index: 15;
`;

// Top border styles
const topBorderTopBottom = keyframes`
    from {width: 0%;}
    to {width: 100%;}
`;
const TopBorder = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  animation: ${topBorderTopBottom};
  animation-duration: .5s;
  background-color: red;
  position: absolute;
  backface-visibility: hidden;
  z-index: 15;
`;

// Bottom Border styles

const bottomBorderTopBottom = keyframes`
    from {width: 0%;}
    to {width: 100%;}
`;

const BottomBorder = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  animation: ${bottomBorderTopBottom};
  animation-duration: .5s;
  background-color: red;
  position: absolute;
  z-index: 15;
`;
class AnimatedBorderDiv extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.onAnimationStart = this.onAnimationStart.bind(this);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);
    this.state = {
      animateRemaningBorders: false,
    };
  }

  componentDidMount() {
    let el = document.getElementById("leftBorderAnimated");
    this.prefixEventHandler(el, "AnimationStart", this.onAnimationStart);
    this.prefixEventHandler(el, "AnimationEnd", this.onAnimationEnd);
  }

  onAnimationStart(props: any) {
    console.log("Animation start props!!");
    console.log(props);
  }

  onAnimationEnd(props: any) {
    console.log("Animation end props!1");
    console.log(props);

    this.setState({ animateRemaningBorders: true });
  }

  prefixEventHandler(node: HTMLElement | null, name: string, handler: { (props: any): void; (props: any): void; }, remove: undefined) {
    var prefixes = ["webkit", "moz", "MS", "o", ""];
    for (var i = 0; i < prefixes.length; i++) {
      var eventName =
        prefixes[i] === "" ? name.toLowerCase() : prefixes[i] + name;
      if (!remove) {
        node.addEventListener(eventName, handler);
      } else {
        node.removeEventListener(eventName, handler);
      }
    }
  }

  render() {
    let otherDivs = null;

    if (this.state.animateRemaningBorders) {
      otherDivs = [<RightBorder />, <BottomBorder />];
    }

    return (
      <AnimatedBorder>
        {this.props.children}
        <TopBorder />
        <LeftBorder id="leftBorderAnimated" />
        {otherDivs}
      </AnimatedBorder>
    );
  }
}

export default AnimatedBorderDiv;
