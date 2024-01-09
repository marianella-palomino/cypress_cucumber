Feature: Demo de Cucumber Uno

    Esto es un demo de como utilizar Cucumber

    # Scenario: Demo de cucumber uno
    #     Given Abrir el navegador principal
    #     And Cargar los datos nombre Nella, email test@test.com, dir1 Direccion_uno, dir2 Direccion_dos
    #     When Presionar el botón guardar
    #     Then Validar los datos ingresados

    Scenario Outline: Demo de cucumber dos
        Given Abrir el navegador principal
        And Cargar los datos nombre <username>, email <email>, dir1 <direc1>, dir2 <direc2>
        When Presionar el botón guardar
        Then Validar los datos ingresados

        Examples:
            | username | email | direc1 | direc2 |
            | Nella  | test@test.com  | Direccion_uno | Direccion_dos |
            | Lore  | test1@test.com  | Direccion_a | Direccion_b |
            | Rosa  | test2@test.com  | Direccion_x | Direccion_y |
            | Josefina  | test3@test.com  | Direccion_0 | Direccion_1 |