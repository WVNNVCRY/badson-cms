import type { Schema, Struct } from '@strapi/strapi';

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
      'product.sizing': ProductSizing;
      'product.sizing-row': ProductSizingRow;
    }
  }
}
