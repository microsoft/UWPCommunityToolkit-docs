
# Microsoft.Toolkit.Uwp.UI.Converters.StringFormatConverter class

This class provides a binding converter to display formatted strings

## Members

The **Microsoft.Toolkit.Uwp.UI.Converters.StringFormatConverter** namespace has these types of members

* [methods](#methods)

### methods

#### Microsoft.Toolkit.Uwp.UI.Converters.StringFormatConverter.Convert(System.Object,System.Type,System.Object,System.String)

Return the formatted string version of the source object.

##### parameters




| name | description |

| --- | --- |

| value | Object to transform to string. |

| targetType | The type of the target property, as a type reference |

| parameter | An optional parameter to be used in the string.Format method. |

| language | The language of the conversion (not used). |

| return |F |

#### Microsoft.Toolkit.Uwp.UI.Converters.StringFormatConverter.ConvertBack(System.Object,System.Type,System.Object,System.String)

Not implemented.

##### parameters




| name | description |

| --- | --- |

| value | The target data being passed to the source. |

| targetType | The type of the target property, as a type reference (System.Type for Microsoft .NET, a TypeName helper struct for Visual C++ component extensions (C++/CX)). |

| parameter | An optional parameter to be used in the converter logic. |

| language | The language of the conversion. |

| return |T |
