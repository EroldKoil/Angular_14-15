# Changelog

## [1.0.0] - 2023-04-26

### Added

- firstComponent
- productComponent
- productListComponent
- cartListComponent
- CartService
- ProductsService
- ability to add product to the cart 
- ability to remove product from the cart 

## [2.0.0] - 2023-05-17

### Added

- add Unavailable product
- totalCost and totalQuantity into product info
- add posibility Increase/Decrease products count
- add posibility remove product type
- add title
- add HighlightDirective


### Fixed

- Split app by modules

## [3.0.0] - 2023-05-28

### Added

- ConfigOptionsService
- ConstantsService
- GeneratorService
- GeneratorFactory
- genID generator
- LocalStorageService
- FontSizeChangerDirective


### Fixed

- fix CartService

## [4.0.0] - 2023-05-28

### Added

- standart pipes for cart-item.component.html
- add OrderByPipe that works with multiple parameters
- add OrderByPipe to sort cart list
- added checkBox and selector
- added CommonModule, FormsModule into SharedModule
### Fixed

- fix getProducts to return Observable
- use SharedModule instead of CommonModule