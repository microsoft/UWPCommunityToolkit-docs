
# VariableSizedGridView class

The VariableSizedGrid control allows to display items from a list using different values for Width and Height item properties. You can control the number of rows and columns to be displayed as well as the items orientation in the panel. Finally, the AspectRatio property allow us to control the relation between Width and Height.

## Members

The **VariableSizedGridView** class has this types of members

* [constructors](#constructors)

* [methods](#methods)

* [properties](#properties)

* [fields](#fields)

### constructors

#### contructor

Initializes a new instance of the [VariableSizedGridView](Microsoft_Toolkit_Uwp_UI_Controls_VariableSizedGridView.md) class.

### methods

#### OnApplyTemplate()

Invoked whenever application code or internal processes (such as a rebuilding layout pass) call ApplyTemplate. In simplest terms, this means the method is called just before a UI element displays in your app. Override this method to influence the default post-template logic of a class.

#### PrepareContainerForItemOverride(Windows.UI.Xaml.DependencyObject element,System.Object item)

Prepares the specified element to display the specified item.

##### parameters



| name | description | type || --- | --- | --- || element | The element that's used to display the specified item. | Windows.UI.Xaml.DependencyObject || item | The item to display. | System.Object |
#### GetContainerForItemOverride()

Creates or identifies the element that is used to display the given item.

##### parameters



| name | description | type || --- | --- | --- || return |The element that is used to display the given item. |
### properties

#### MaximumRowsOrColumns

Gets or sets the maximum number of rows or columns.

#### ItemMargin

Gets or sets the margin for each item.

#### ItemPadding

Gets or sets the padding applied to each item.

#### Orientation

Gets or sets the dimension by which child elements are stacked.

#### AspectRatio

Gets or sets the height-to-width aspect ratio for each tile.

### fields

#### ItemPaddingProperty

Identifies the ItemPadding dependency property.

#### OrientationProperty

Identifies the Orientation dependency property.

#### AspectRatioProperty

Identifies the AspectRatio dependency property.

#### MaximumRowsOrColumnsProperty

Identifies the MaximumRowsOrColumns dependency property.

#### ItemMarginProperty

Identifies the ItemMargin dependency property.
