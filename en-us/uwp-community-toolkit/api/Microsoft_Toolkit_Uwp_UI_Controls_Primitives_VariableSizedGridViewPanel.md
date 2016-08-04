
# VariableSizedGridViewPanel class

The VariableSizedGridPanel is used to support the [VariableSizedGridView](Microsoft_Toolkit_Uwp_UI_Controls_VariableSizedGridView.md) control.

## Members

The **VariableSizedGridViewPanel** class has this types of members

* [methods](#methods)

* [properties](#properties)

* [fields](#fields)

### methods

#### MeasureOverride(Windows.Foundation.Size availableSize)

Provides the behavior for the Measure pass of the layout cycle. Classes can override this method to define their own Measure pass behavior.

##### parameters



| name | description | type || --- | --- | --- || availableSize | The available size that this object can give to child objects. Infinity can be specified as a value to indicate that the object will size to whatever content is available. | Windows.Foundation.Size || return |The size that this object determines it needs during layout, based on its calculations of the allocated sizes for child objects or based on other considerations such as a fixed container size. |
#### ArrangeOverride(Windows.Foundation.Size finalSize)

Provides the behavior for the Arrange pass of layout. Classes can override this method to define their own Arrange pass behavior.

##### parameters



| name | description | type || --- | --- | --- || finalSize | The final area within the parent that this object should use to arrange itself and its children. | Windows.Foundation.Size || return |The actual size that is used after the element is arranged in layout. |
#### PrepareItem(System.Int32 index,Windows.UI.Xaml.UIElement element,System.Int32@ colSpan,System.Int32@ rowSpan)

Assigned the row and column span for a given item.

##### parameters



| name | description | type || --- | --- | --- || index | The index of the element. | System.Int32 || element | The element. | Windows.UI.Xaml.UIElement || colSpan | The col span to use for the item. | System.Int32@ || rowSpan | The row span to use for the item. | System.Int32@ |
### properties

#### Orientation

Gets or sets the dimension by which child elements are stacked.

#### MaximumRowsOrColumns

Gets or sets the maximum number of rows or columns.

#### AspectRatio

Gets or sets the height-to-width aspect ratio for each tile.

### fields

#### OrientationProperty

Identifies the Orientation dependency property.

#### MaximumRowsOrColumnsProperty

Identifies the MaximumRowsOrColumns dependency property.

#### AspectRatioProperty

Identifies the AspectRatio dependency property.
