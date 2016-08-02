
# StringFormatConverter class

This class provides a binding converter to display formatted strings

## Members

The **StringFormatConverter** class has this types of members

* [methods](#methods)

### methods

#### Convert(System.Object value,System.Type targetType,System.Object parameter,System.String language)

Return the formatted string version of the source object.

##### parameters



| name | description | type |
| --- | --- | --- |
| value | Object to transform to string. | System.Object |
| targetType | The type of the target property, as a type reference | System.Type |
| parameter | An optional parameter to be used in the string.Format method. | System.Object |
| language | The language of the conversion (not used). | System.String |
| return |Formatted string. |

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
