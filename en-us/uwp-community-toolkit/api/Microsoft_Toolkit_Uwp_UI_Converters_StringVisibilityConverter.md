
# Microsoft.Toolkit.Uwp.UI.Converters.StringVisibilityConverter class

This class converts a string value into a Visibility value (if the value is null or empty returns a collapsed value).

## Members

The **Microsoft.Toolkit.Uwp.UI.Converters.StringVisibilityConverter** namespace has these types of members

* [methods](#methods)

### methods

#### Microsoft.Toolkit.Uwp.UI.Converters.StringVisibilityConverter.Convert(System.Object,System.Type,System.Object,System.String)

Converts a string value into a Visibility value by testing if string is null or empty.

##### parameters




| name | description |

| --- | --- |

| value | The source data being passed to the target. |

| targetType | The type of the target property, as a type reference. |

| parameter | An optional parameter to invert the converter logic. |

| language | The language of the conversion. |

| return |V |

#### Microsoft.Toolkit.Uwp.UI.Converters.StringVisibilityConverter.ConvertBack(System.Object,System.Type,System.Object,System.String)

Not implemented.

##### parameters




| name | description |

| --- | --- |

| value | The target data being passed to the source. |

| targetType | The type of the target property, as a type reference (System.Type for Microsoft .NET, a TypeName helper struct for Visual C++ component extensions (C++/CX)). |

| parameter | An optional parameter to be used in the converter logic. |

| language | The language of the conversion. |

| return |T |

##### exceptions



| type | description |

| --- | --- |

| exception type | |
