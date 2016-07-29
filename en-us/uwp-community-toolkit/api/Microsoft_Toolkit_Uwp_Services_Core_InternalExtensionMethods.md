
# Microsoft.Toolkit.Uwp.Services.Core.InternalExtensionMethods class

This class offers general purpose methods.

## Members

The **Microsoft.Toolkit.Uwp.Services.Core.InternalExtensionMethods** namespace has these types of members

* [methods](#methods)

* [fields](#fields)

### methods

#### Microsoft.Toolkit.Uwp.Services.Core.InternalExtensionMethods.Truncate(System.String,System.Int32)

Truncates the specified string to the specified length.

##### parameters




| name | description |

| --- | --- |

| value | The string to be truncated. |

| length | The maximum length. |

| return |T |

#### Microsoft.Toolkit.Uwp.Services.Core.InternalExtensionMethods.Truncate(System.String,System.Int32,System.Boolean)

Truncates the specified string to the specified length.

##### parameters




| name | description |

| --- | --- |

| value | The string to be truncated. |

| length | The maximum length. |

| ellipsis | if set to  add a text ellipsis. |

| return |T |

#### Microsoft.Toolkit.Uwp.Services.Core.InternalExtensionMethods.FixHtml(System.String)

Applies regular expressions to string of HTML to remove comments, scripts, styles.

##### parameters




| name | description |

| --- | --- |

| html | HTML string to fix |

| return |F |

### fields

#### Microsoft.Toolkit.Uwp.Services.Core.InternalExtensionMethods.RemoveCommentsRegex

Regular expression for removing comments.

#### Microsoft.Toolkit.Uwp.Services.Core.InternalExtensionMethods.RemoveScriptsRegex

Regular expression for removing scripts.

#### Microsoft.Toolkit.Uwp.Services.Core.InternalExtensionMethods.RemoveStylesRegex

Regular expression for removing styles.
