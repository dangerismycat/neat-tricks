import { useEffect, useRef } from 'react';

/*
  This util Hook is useful for determing why a function component is re-rendering.
  It should never be left in production code; only use this for debugging purposes.

  USAGE:
  function MyComponent(props) {
    useWhatPropsChanged(props);
    return <div>{props.children}</div>;
  }

  From this Stack Overflow answer:
  https://stackoverflow.com/a/51082563/5253702
*/

function useWhatPropsChanged(props) {
  const prev = useRef(props);

  useEffect(() => {
    const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
      if (prev.current[k] !== v) {
        ps[k] = [prev.current[k], v];
      }
      return ps;
    }, {});

    if (Object.keys(changedProps).length > 0) {
      console.log('Changed props:', changedProps);
    }

    prev.current = props;
  });
}

/*
  This util is useful for determing why a class component is re-rendering.
  It should never be left in production code; only use this for debugging purposes.

  USAGE:
  class MyComponent extends Component {
    componentDidUpdate(prevProps, prevState) {
      whatPropsChanged(this.props, prevProps, this.state, prevState);
    }
  }

  From this Stack Overflow answer:
  https://stackoverflow.com/a/51082563/5253702
*/

function whatPropsChanged(props, prevProps, state, prevState) {
  if (props && prevProps) {
    Object.entries(props).forEach(([key, val]) => {
      const oldVal = prevProps[key];
      if (oldVal !== val) {
        console.log(`Prop '${key}' changed.`);
        console.log('  Old val: ', oldVal);
        console.log('  New val: ', val);
      }
    });
  }

  if (state && prevState) {
    Object.entries(state).forEach(([key, val]) => {
      const oldVal = prevState[key];
      if (oldVal !== val) {
        console.log(`State '${key}' changed`);
        console.log('  Old val: ', oldVal);
        console.log('  New val: ', val);
      }
    });
  }
}
