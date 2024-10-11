# Product Manegement

:memo: *This subdomain is responsible for registering and managing products in stock.*


## Entities:
### Product:

- **id:** Unique identifier.
- **SKU:** Stock Keeping Unit (Value Object).
- **name:** Product name.
- **description:** Detailed description.
- **price:** Sales price.
- **cost:** Acquisition/production cost.
- **quantity in stock:** Current quantity in stock.
- **minimum quantity:** Minimum quantity allowed before triggering a purchase order.


### Category Product:

- **code** Identifier.
- **name:** Name of the category.
- **description:** Description of the category.

### Brand Product:

- **code** Identifier.
- **name:** Name of the brand.
- **description:** Description of the brand.

### Color Product:

- **code** Identifier.
- **name:** Name of the color.

### Type Product:

- **code** Identifier.
- **name:** Name of the type.
- **type sizes:** Sizes related to product types.

### Size Product:

- **code** Identifier.
- **description:** Description of the size.

### Supplier

- **name:** Supplier name.
- **contact:** Contact information (Value Object).
- **address:** Location of the supplier (Value Object).

## Value Objects

### Contact

- **phone number:** The supplier's phone number for contact purposes.
- **email:** The supplier's email address for communication.

### Address

- **street:** The street address of the supplier.
- **city:** The city where the supplier is located.
- **state:** The state or region of the supplier.
- **zip code:** The postal code of the supplier's address.
- **country:** The country where the supplier operates.

### SKU

- **category:** The category of the product.
- **brand:** The brand of the product.
- **type:** The specific type of product.
- **size:** The size of the product, if applicable.
- **color:** The color of the product.

## Aggregate

### Type Size

- **codeType:** The code of the type.
- **codeSize:** The code of the size.

## Watched List

- **Type Size List:** List of aggregates type and size.