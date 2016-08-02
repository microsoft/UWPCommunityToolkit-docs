
# BoolToVisibilityConverter class

This class converts a boolean value into a Visibility enumeration.

## Members

The **BoolToVisibilityConverter** class has this types of members

* [methods](#methods)

### methods

#### Convert(System.Object value,System.Type targetType,System.Object parameter,System.String language)

Convert a boolean value to visibility.

##### parameters



| name | description | type |
| --- | --- | --- |
| value | The source data being passed to the target. | System.Object |
| targetType | The type of the target property, as a type reference. | System.Type |
| parameter | An optional parameter to be used to invert the converter logic. | System.Object |
| language | The language of the conversion. | System.String |
| return |The value to be passed to the target dependency property. |

#### ConvertBack(System.Object value,System.Type targetType,System.Object parameter,System.String language)

Modifies the target data before passing it to the source object. This method is called only in TwoWay bindings.

##### parameters



| name | description | type |
| --- | --- | --- |
| value | The target data being passed to the source. | System.Object |
| targetType | The type of the target property, as a type reference (System.Type for Microsoft .NET, a TypeName helper struct for Visual C++ component extensions (C++/CX)). | System.Type |
| parameter | An optional parameter to be used to invert the converter logic. | System.Object |
| language | The language of the conversion. | System.String |
| return |The value to be passed to the source object. |
