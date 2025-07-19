// import schemaTypes from 'all:part:@sanity/base/schema-type'
// import createSchema from 
import {postType} from './postType'
import {productType} from './product'
import {productCategoryType} from './category'
// import {blockContent} from './blockContent'


export const schemaTypes = [
  postType,
  productType,
  productCategoryType,
]