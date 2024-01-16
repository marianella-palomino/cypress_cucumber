Feature: Product
@focus
Scenario: Product - AMZ - SKU
Given Un usuario busca un producto de AMZ por SKU
And El usuario ejecuta la api de producto
When El usuario hace click en el producto
Then El usuario valida la marca del producto contra el campo correspondiente en la API
And El usuario valida el titulo del producto contra el campo correspondiente en la API
And El usuario valida la capacidad del producto contra el campo correspondiente en la API
And El usuario valida el color del producto contra el campo correspondiente en la API
And El usuario valida el style del producto contra el campo correspondiente en la API
And El usuario valida el vendor del producto contra el campo correspondiente en la API
And El usuario valida el stock del producto contra el campo correspondiente en la API
And El usuario valida la devolucion del producto contra el campo correspondiente en la API
And El usuario valida la condicion del producto contra el campo correspondiente en la API
And El usuario valida la imagen del producto contra el campo correspondiente en la API