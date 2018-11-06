// This technique allows parallel data fetching from multiples sources in a component, with individual error handling. Since the individual promises always resolve, Promise.all will never fail (it fails if even one promise rejects). Errors can then be handled on an individual basis in Redux.


class SomeComponent extends React.Component {
  componentDidMount() {
    const promises = this.props.dataUrlsArray.map(this.getData)
    Promise.all(promises);
  }

  getData() {
    // promise resolves no matter what so Promise.all above never fails, even with an error
    // (allows individual error handling)
    return new Promise((resolve, reject) =>
      this.props.operations.getDataThunk().then(resolve));
  }

  render() {
    const { data, errorMessage, isLoading } = this.props;

    if (isLoading) // handle loading state
    if (errorMessage) // handle error state
    // handle data
  }
}

// Redux state could also look something like { source1: { data, errorMessage, isLoading }, source2: { data, errorMessage, isLoading } }
