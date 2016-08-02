
# StringVisibilityConverter class

This class converts a string value into a Visibility value (if the value is null or empty returns a collapsed value).

## Members

The **StringVisibilityConverter** class has this types of members

* [methods](#methods)

### methods

#### Convert(System.Object value,System.Type targetType,System.Object parameter,System.String language)

Converts a string value into a Visibility value by testing if string is null or empty.

##### parameters



| name | description | type |
| --- | --- | --- |
| value | The source data being passed to the target. | System.Object |
| targetType | The type of the target property, as a type reference. | System.Type |
| parameter | An optional parameter to invert the converter logic. | System.Object |
| language | The language of the conversion. | System.String |
| return |Visibility value. |

#### ConvertBack(System.Object value,System.Type targetType,System.Object parameter,System.String language)

Not implemented.

##### parameters



| name | description | type |
| --- | --- | --- |
| value | The target data being passed to the source. | System.Object |
| targetType | The type of the target property, as a type reference (System.Type for Microsoft .NET, a TypeName helper struct for Visual C++ component extensions (C++/CX)). | System.Type |
| parameter | An optional parameter to be used in the converter logic. | System.Object |
| language | The language of the conversion. | System.String |
| return |The value to be passed to the source object. |

##### exceptions


| type | description |
| --- | --- |
| exception type | |
