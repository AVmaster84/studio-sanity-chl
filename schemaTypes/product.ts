import { defineField, defineType } from "sanity";
import { productCategoryType } from "./productCategory";

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'productCategoryType'}],
    }),
    defineField({
      name: 'sku',
      title: 'Sku',
      type: 'number',
    }),
    defineField({
      name: 'inStock',
      title: 'In Stock',
      type: 'number',
      initialValue: 0
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is Featured Product',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
