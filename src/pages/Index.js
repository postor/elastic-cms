import React, { useEffect } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

import IndexList from '../comps/IndexList'


const Index = () => {
  return (<Container text>
    <Header
      as='h1'
      content='Indexes'
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em',
      }}
    />
    <IndexList />
  </Container>)
}

export default Index