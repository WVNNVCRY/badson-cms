import type { Schema, Struct } from '@strapi/strapi';

export interface ProductSizeOption extends Struct.ComponentSchema {
  collectionName: 'components_product_size_options';
  info: {
    displayName: 'size-option';
  };
  attributes: {
    isSoldOut: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    sku: Schema.Attribute.String;
    stock: Schema.Attribute.Integer;
  };
}

export interface ProductSizing extends Struct.ComponentSchema {
  collectionName: 'components_product_sizings';
  info: {
    displayName: 'sizing';
  };
  attributes: {
    columns: Schema.Attribute.JSON;
    notes: Schema.Attribute.JSON;
    rows: Schema.Attribute.Component<'product.sizing-row', true>;
  };
}

export interface ProductSizingRow extends Struct.ComponentSchema {
  collectionName: 'components_product_sizing_rows';
  info: {
    displayName: 'sizing row';
  };
  attributes: {
    in: Schema.Attribute.JSON;
    key: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.size-option': ProductSizeOption;
      'product.sizing': ProductSizing;
      'product.sizing-row': ProductSizingRow;
    }
  }
}
