
# Microsoft.Toolkit.Uwp.UI.Controls.Primitives.VariableSizedGridViewPanel class

The VariableSizedGridPanel is used to support the [VariableSizedGridView](T_Microsoft_Toolkit_Uwp_UI_Controls_VariableSizedGridView) control.

## Members

The **Microsoft.Toolkit.Uwp.UI.Controls.Primitives.VariableSizedGridViewPanel** namespace has these types of members

* [methods](#methods)

* [properties](#properties)

* [fields](#fields)

### methods

#### Microsoft.Toolkit.Uwp.UI.Controls.Primitives.VariableSizedGridViewPanel.MeasureOverride(Windows.Foundation.Size)

Provides the behavior for the Measure pass of the layout cycle. Classes can override this method to define their own Measure pass behavior.

##### parameters




| name | description |

| --- | --- |

| availableSize | The available size that this object can give to child objects. Infinity can be specified as a value to indicate that the object will size to whatever content is available. |

| return |T |

#### Microsoft.Toolkit.Uwp.UI.Controls.Primitives.VariableSizedGridViewPanel.ArrangeOverride(Windows.Foundation.Size)

Provides the behavior for the Arrange pass of layout. Classes can override this method to define their own Arrange pass behavior.

##### parameters




| name | description |

| --- | --- |

| finalSize | The final area within the parent that this object should use to arrange itself and its children. |

| return |T |

#### Microsoft.Toolkit.Uwp.UI.Controls.Primitives.VariableSizedGridViewPanel.PrepareItem(System.Int32,Windows.UI.Xaml.UIElement,System.Int32@,System.Int32@)

Assigned the row and column span for a given item.

##### parameters




| name | description |

| --- | --- |

| index | The index of the element. |

| element | The element. |

| colSpan | The col span to use for the item. |

| rowSpan | The row span to use for the item. |

### properties

#### Microsoft.Toolkit.Uwp.UI.Controls.Primitives.VariableSizedGridViewPanel.Orientation

Gets or sets the dimension by which child elements are stacked.

#### Microsoft.Toolkit.Uwp.UI.Controls.Primitives.VariableSizedGridViewPanel.MaximumRowsOrColumns

Gets or sets the maximum number of rows or columns.

#### Microsoft.Toolkit.Uwp.UI.Controls.Primitives.VariableSizedGridViewPanel.AspectRatio

Gets or sets the height-to-width aspect ratio for each tile.

### fields

#### Microsoft.Toolkit.Uwp.UI.Controls.Primitives.VariableSizedGridViewPanel.OrientationProperty

Identifies the [Orientation](P_Microsoft_Toolkit_Uwp_UI_Controls_Primitives_VariableSizedGridViewPanel_Orientation) dependency property.

#### Microsoft.Toolkit.Uwp.UI.Controls.Primitives.VariableSizedGridViewPanel.MaximumRowsOrColumnsProperty

Identifies the [MaximumRowsOrColumns](P_Microsoft_Toolkit_Uwp_UI_Controls_Primitives_VariableSizedGridViewPanel_MaximumRowsOrColumns) dependency property.

#### Microsoft.Toolkit.Uwp.UI.Controls.Primitives.VariableSizedGridViewPanel.AspectRatioProperty

Identifies the [AspectRatio](P_Microsoft_Toolkit_Uwp_UI_Controls_Primitives_VariableSizedGridViewPanel_AspectRatio) dependency property.
