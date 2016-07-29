
# Microsoft.Toolkit.Uwp.UI.Converters.BoolToVisibilityConverter class

This class converts a boolean value into a Visibility enumeration.

## Members

The **Microsoft.Toolkit.Uwp.UI.Converters.BoolToVisibilityConverter** namespace has these types of members

* [methods](#methods)

### methods

#### Microsoft.Toolkit.Uwp.UI.Converters.BoolToVisibilityConverter.Convert(System.Object,System.Type,System.Object,System.String)

Convert a boolean value to visibility.

##### parameters




| name | description |

| --- | --- |

| value | The source data being passed to the target. |

| targetType | The type of the target property, as a type reference. |

| parameter | An optional parameter to be used to invert the converter logic. |

| language | The language of the conversion. |

| return |T |

#### Microsoft.Toolkit.Uwp.UI.Converters.BoolToVisibilityConverter.ConvertBack(System.Object,System.Type,System.Object,System.String)

Modifies the target data before passing it to the source object. This method is called only in TwoWay bindings.

##### parameters




| name | description |

| --- | --- |

| value | The target data being passed to the source. |

| targetType | The type of the target property, as a type reference (System.Type for Microsoft .NET, a TypeName helper struct for Visual C++ component extensions (C++/CX)). |

| parameter | An optional parameter to be used to invert the converter logic. |

| language | The language of the conversion. |

| return |T |
