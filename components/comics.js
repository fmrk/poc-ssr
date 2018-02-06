import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData } from "../actions";

class Comics extends React.PureComponent {
  componentDidMount() {
    this.props.requestApiData();
  }
  render() {
    const { comics, isFetching, requestApiData } = this.props;
    return (
      <React.Fragment>
        {Boolean(comics.length) &&
          <table>
            <tbody>
              <tr>
                <th>Num.</th>
                <th>Image</th>
                <th>Title</th>
                <th>Year</th>
              </tr>
              {comics.map(({ title, alt, img, year, num }) => (
                <tr key={num}>
                  <td>{num}</td>
                  <td><img src={img} alt={alt} /></td>
                  <td>{title}</td>
                  <td>{year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
        {isFetching ? <p>loading...</p> : <button onClick={requestApiData}>next</button>}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ comics: state.data.comics, isFetching: state.data.isFetching });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Comics);
