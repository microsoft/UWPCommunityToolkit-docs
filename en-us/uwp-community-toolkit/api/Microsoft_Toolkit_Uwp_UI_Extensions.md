
# Extensions class

Defines a collection of extensions methods for UI.

## Members

The **Extensions** class has this types of members

* [methods](#methods)

### methods

#### GetTranslateX(Windows.UI.Xaml.FrameworkElement frameworkElement)

Gets the current X translation of a [FrameworkElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.FrameworkElement).

##### parameters



| name | description | type |
| --- | --- | --- |
| frameworkElement | The [FrameworkElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.FrameworkElement). | Windows.UI.Xaml.FrameworkElement |
| return |Returns the X translation. |

#### GetTranslateY(Windows.UI.Xaml.FrameworkElement frameworkElement)

Gets the current Y translation of a [FrameworkElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.FrameworkElement).

##### parameters



| name | description | type |
| --- | --- | --- |
| frameworkElement | The [FrameworkElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.FrameworkElement). | Windows.UI.Xaml.FrameworkElement |
| return |Returns the Y translation. |

#### TranslateX(Windows.UI.Xaml.FrameworkElement frameworkElement,System.Double x)

Translates a [FrameworkElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.FrameworkElement) on the X axis to the provided X value.

##### parameters



| name | description | type |
| --- | --- | --- |
| frameworkElement | The [FrameworkElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.FrameworkElement). | Windows.UI.Xaml.FrameworkElement |
| x | The value to translate to on the X axis. | System.Double |

#### TranslateY(Windows.UI.Xaml.FrameworkElement frameworkElement,System.Double y)

Translates a [FrameworkElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.FrameworkElement) on the Y axis to the provided Y value.

##### parameters



| name | description | type |
| --- | --- | --- |
| frameworkElement | The [FrameworkElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.FrameworkElement). | Windows.UI.Xaml.FrameworkElement |
| y | The value to translate to on the Y axis. | System.Double |

#### TranslateDeltaX(Windows.UI.Xaml.FrameworkElement frameworkElement,System.Double x)

Translates a [FrameworkElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.FrameworkElement) on the X axis by the provided X value.

##### parameters



| name | description | type |
| --- | --- | --- |
| frameworkElement | The [FrameworkElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.FrameworkElement). | Windows.UI.Xaml.FrameworkElement |
| x | The value to translate by on the X axis. | System.Double |

#### TranslateDeltaY(Windows.UI.Xaml.FrameworkElement frameworkElement,System.Double y)

Translates a [FrameworkElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.FrameworkElement) on the Y axis by the provided Y value.

##### parameters



| name | description | type |
| --- | --- | --- |
| frameworkElement | The [FrameworkElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.FrameworkElement). | Windows.UI.Xaml.FrameworkElement |
| y | The value to translate by on the Y axis. | System.Double |

#### GetCompositeTransform(Windows.UI.Xaml.FrameworkElement frameworkElement)

Gets the composite transform for a [FrameworkElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.FrameworkElement).

##### parameters



| name | description | type |
| --- | --- | --- |
| frameworkElement | The [FrameworkElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.FrameworkElement). | Windows.UI.Xaml.FrameworkElement |
| return |Returns a [CompositeTransform](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.Media.CompositeTransform) representation for the given element. |
