import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Header,
  List,
} from 'semantic-ui-react'

import { getIndexes } from '../../backend/frontended/elastic'

const IndexList = () => {
  let [indexes, setIndexes] = useState([])
  useEffect(() => {
    let updateState = true
    getIndexes().then(x => updateState && setIndexes(x.body))
    return () => updateState = false
  }, [])
  if (!indexes.length) return (<Header
    as='p'
  >
    暂时还没有 index，<Link to="/index/create">创建</Link>
  </Header>)
  return (<List>
    <List.Item>Apples</List.Item>
    <List.Item>Pears</List.Item>
    <List.Item>Oranges</List.Item>
  </List>)
}

export default IndexList