
# Microsoft.Toolkit.Uwp.UI.Converters.CollectionVisibilityConverter class

This class converts a collection size to visibility.

## Members

The **Microsoft.Toolkit.Uwp.UI.Converters.CollectionVisibilityConverter** namespace has these types of members

* [methods](#methods)

### methods

#### Microsoft.Toolkit.Uwp.UI.Converters.CollectionVisibilityConverter.Convert(System.Object,System.Type,System.Object,System.String)

This class return Visibility.Visible if the given collection is not empty or null.

##### parameters




| name | description |

| --- | --- |

| value | Collection to convert to Visibility. |

| targetType | The type of the target property, as a type reference. |

| parameter | An optional parameter to be used to invert the converter logic. |

| language | The language of the conversion. |

| return |V |

#### Microsoft.Toolkit.Uwp.UI.Converters.CollectionVisibilityConverter.ConvertBack(System.Object,System.Type,System.Object,System.String)

Not implemented.

##### parameters




| name | description |

| --- | --- |

| value | The target data being passed to the source. |

| targetType | The type of the target property, as a type reference (System.Type for Microsoft .NET, a TypeName helper struct for Visual C++ component extensions (C++/CX)). |

| parameter | An optional parameter to be used in the converter logic. |

| language | The language of the conversion. |

| return |T |
