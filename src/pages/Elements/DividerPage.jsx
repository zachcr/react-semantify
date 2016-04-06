"use strict";

import React        from 'react';
import ExampleBlock from '../../components/ExampleBlock.jsx';
import PageTitle    from '../../components/PageTitle.jsx';

import {Button, Divider, Header} from 'react-semantify';

export default React.createClass({

  render() {
    return (
      <div>
        <PageTitle title="Divider">
          A divider visually segments content into groups
        </PageTitle>

        <div className="main container">
          <Header className="large dividing">Type</Header>

          <ExampleBlock header="Divider"
                        sub="A standard divider">
            <p>This is the first region</p>
            <Divider/>
            <p>This is the second region</p>
          </ExampleBlock>
        </div>
      </div>
    );
  }
})
