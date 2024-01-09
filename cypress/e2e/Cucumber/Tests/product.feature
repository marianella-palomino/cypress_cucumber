Feature: Product
@focus
Scenario: Product - AMZ - SKU
Given Un usuario busca un producto de AMZ por SKU
And El usuario ejecuta la api de producto
When El usuario hace click en el producto
Then El usuario valida la marca del producto contra el campo X de la api
And El usuario valida el precio del producto contra el campo X de la api
And El usuario valida el stock del producto contra el campo X de la api