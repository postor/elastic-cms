const { Client } = require('@elastic/elasticsearch')
const { elastic } = require('../config')

const client = new Client(elastic)

module.exports.getIndexes = async () => {
 return await client.cat.indices({format: 'json'})
}