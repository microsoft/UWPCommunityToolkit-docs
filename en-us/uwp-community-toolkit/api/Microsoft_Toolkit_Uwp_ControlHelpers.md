
# ControlHelpers class

Internal class used to provide helpers for controls

## Members

The **ControlHelpers** class has this types of members

* [methods](#methods)

### methods

#### GetVisual(Windows.UI.Xaml.UIElement element)

Get the visual associated with an UIElement

##### parameters



| name | description | type |
| --- | --- | --- |
| element | Source UIElement | Windows.UI.Xaml.UIElement |
| return |ContainerVisual associated with the element |

#### Mod(System.Int32 value,System.Int32 module)

Gets the positive modulo of an integer

##### parameters



| name | description | type |
| --- | --- | --- |
| value | Value to use | System.Int32 |
| module | Module to use | System.Int32 |
| return |Positive modulo |

#### IncMod(System.Int32 value,System.Int32 module)

Gets modulo of value + 1

##### parameters



| name | description | type |
| --- | --- | --- |
| value | Value to use | System.Int32 |
| module | Module to use | System.Int32 |
| return |Modulo of value + 1 |

#### DecMod(System.Int32 value,System.Int32 module)

Gets modulo of value - 1

##### parameters



| name | description | type |
| --- | --- | --- |
| value | Value to use | System.Int32 |
| module | Module to use | System.Int32 |
| return |Modulo of value - 1 |

#### Mod(System.Double value,System.Double module)

Gets the positive modulo of a double

##### parameters



| name | description | type |
| --- | --- | --- |
| value | Value to use | System.Double |
| module | Module to use | System.Double |
| return |Positive modulo |
