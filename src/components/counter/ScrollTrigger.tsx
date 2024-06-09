import React, { Component, ReactNode } from 'react';

export interface ScrollTriggerEventArgs {
  progress: number;
  velocity: number;
}

export interface ScrollTriggerProps {
  children?: ReactNode; // Import ReactNode and add children prop
  component?: React.ReactElement | null;
  containerRef?: HTMLElement | string | null;
  throttleResize?: number;
  throttleScroll?: number;
  triggerOnLoad?: boolean;
  onEnter?: (args?: ScrollTriggerEventArgs) => void;
  onExit?: (args?: ScrollTriggerEventArgs) => void;
  onProgress?: (args?: ScrollTriggerEventArgs) => void;
}

interface State {
  lastScrollY: number;
  lastTime: number;
}

export default class ScrollTrigger extends Component<ScrollTriggerProps, State> {
  static defaultProps = {
    throttleResize: 100,
    throttleScroll: 100,
    triggerOnLoad: true,
  };

  state: State = {
    lastScrollY: 0,
    lastTime: Date.now(),
  };

  componentDidMount() {
    this.setupEvents();
    if (this.props.triggerOnLoad) {
      this.handleScroll(); // Trigger at least once on load
    }
  }

  componentWillUnmount() {
    this.teardownEvents();
  }

  setupEvents() {
    const { throttleScroll, throttleResize } = this.props;
    window.addEventListener('scroll', this.throttle(this.handleScroll, throttleScroll!));
    window.addEventListener('resize', this.throttle(this.handleResize, throttleResize!));
  }

  teardownEvents() {
    window.removeEventListener('scroll', this.throttle(this.handleScroll, this.props.throttleScroll!));
    window.removeEventListener('resize', this.throttle(this.handleResize, this.props.throttleResize!));
  }

  throttle = (func: () => void, limit: number) => {
    let inThrottle: boolean;
    return () => {
      if (!inThrottle) {
        func();
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  handleResize = () => {
    // Implement resize logic, if any specific is needed
  };

  handleScroll = () => {
    const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const now = Date.now();
    const velocity = (window.scrollY - this.state.lastScrollY) / (now - this.state.lastTime);

    const args: ScrollTriggerEventArgs = { progress, velocity };

    if (this.props.onProgress) {
      this.props.onProgress(args);
    }

    // Example logic for onEnter and onExit
    if (progress > 0 && this.props.onEnter) {
      this.props.onEnter(args);
    }
    if (progress === 1 && this.props.onExit) {
      this.props.onExit(args);
    }

    this.setState({ lastScrollY: window.scrollY, lastTime: now });
  };

  render() {
    // Choose whether to render children or component prop based on your requirements
    const { component, children } = this.props;
    return component || children || null;
  }
}
