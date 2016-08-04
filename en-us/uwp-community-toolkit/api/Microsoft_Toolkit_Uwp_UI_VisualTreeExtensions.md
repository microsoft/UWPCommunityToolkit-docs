
# VisualTreeExtensions class

Defines a collection of extensions methods for UI.

## Members

The **VisualTreeExtensions** class has this types of members

* [methods](#methods)

### methods

#### FindDescendantByName(Windows.UI.Xaml.FrameworkElement element,System.String name)

Find descendant control using its name.

##### parameters



| name | description | type || --- | --- | --- || element | Parent element. | Windows.UI.Xaml.FrameworkElement || name | Name of the control to find | System.String || return |Descendant control or null if not found. |
#### FindDescendant``1(Windows.UI.Xaml.DependencyObject element)

Find first descendant control of a specified type.

##### parameters



| name | description | type || --- | --- | --- || element | Parent element. | Windows.UI.Xaml.DependencyObject || return |Descendant control or null if not found. |
#### FindAscendant``1(Windows.UI.Xaml.FrameworkElement element)

Find first ascendant control of a specified type.

##### parameters



| name | description | type || --- | --- | --- || element | Child element. | Windows.UI.Xaml.FrameworkElement || return |Ascendant control or null if not found. |
#### FindVisualAscendant``1(Windows.UI.Xaml.FrameworkElement element)

Find first visual ascendant control of a specified type.

##### parameters



| name | description | type || --- | --- | --- || element | Child element. | Windows.UI.Xaml.FrameworkElement || return |Ascendant control or null if not found. |