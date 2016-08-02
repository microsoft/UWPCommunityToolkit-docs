
# CollectionVisibilityConverter class

This class converts a collection size to visibility.

## Members

The **CollectionVisibilityConverter** class has this types of members

* [methods](#methods)

### methods

#### Convert(System.Object value,System.Type targetType,System.Object parameter,System.String language)

This class return Visibility.Visible if the given collection is not empty or null.

##### parameters



| name | description | type |
| --- | --- | --- |
| value | Collection to convert to Visibility. | System.Object |
| targetType | The type of the target property, as a type reference. | System.Type |
| parameter | An optional parameter to be used to invert the converter logic. | System.Object |
| language | The language of the conversion. | System.String |
| return |Visibility.Visible if the collection is not null and not empty |

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
