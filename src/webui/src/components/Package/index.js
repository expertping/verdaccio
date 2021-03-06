import React from 'react';
import PropTypes from 'prop-types';
import {Tag} from 'element-react';
import {Link} from 'react-router-dom';
import isNil from 'lodash/isNil';

import classes from './package.scss';

export default class Package extends React.Component {
  static propTypes = {
    package: PropTypes.object
  }

  render() {
    const {
      package: pkg
    } = this.props;

    return (
        <Link to={`detail/${pkg.name}`} className={classes.package}>
          <h1>{pkg.name}<Tag type="gray">v{pkg.version}</Tag></h1>
          {this.renderAuthor(pkg)}
          <p>{pkg.description}</p>
        </Link>
    );
  }

  renderAuthor(pkg) {
    if (isNil(pkg.author) || isNil(pkg.author.name)) {
      return;
    }

    return <span role="author" className={classes.author}>By: {pkg.author.name}</span>;
  }
}
