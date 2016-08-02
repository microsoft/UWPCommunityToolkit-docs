
# Composition class

These extension methods use composition to perform animation on visuals.

## Members

The **Composition** class has this types of members

* [methods](#methods)

* [properties](#properties)

### methods

#### Offset(Windows.UI.Xaml.UIElement associatedObject,System.Double duration,System.Double delay,System.Single offsetX,System.Single offsetY,System.Single offsetZ)

Changes the Offset of the specified UI Element.

##### parameters



| name | description | type |
| --- | --- | --- |
| associatedObject | The specified UI Element. | Windows.UI.Xaml.UIElement |
| duration | The duration. | System.Double |
| delay | The delay. | System.Double |
| offsetX | The offset x. | System.Single |
| offsetY | The offset y. | System.Single |
| offsetZ | The offset z. | System.Single |
| return |The visual of the UIElement. |

#### Scale(Windows.UI.Xaml.UIElement associatedObject,System.Double duration,System.Double delay,System.Single centerX,System.Single centerY,System.Single centerZ,System.Single scaleX,System.Single scaleY,System.Single scaleZ)

Scales the specified UI Element.

##### parameters



| name | description | type |
| --- | --- | --- |
| associatedObject | The associated object. | Windows.UI.Xaml.UIElement |
| duration | The duration. | System.Double |
| delay | The delay in milliseconds. | System.Double |
| centerX | The center x in pixels. | System.Single |
| centerY | The center y in pixels. | System.Single |
| centerZ | The center z in pixels. | System.Single |
| scaleX | The scale x. | System.Single |
| scaleY | The scale y. | System.Single |
| scaleZ | The scale z. | System.Single |
| return |The visual of the UIElement. |

#### Rotate(Windows.UI.Xaml.UIElement associatedObject,System.Double duration,System.Double delay,System.Single value,System.Single centerX,System.Single centerY,System.Single centerZ)

Rotates the specified UI Element.

##### parameters



| name | description | type |
| --- | --- | --- |
| associatedObject | The UI Element to rotate. | Windows.UI.Xaml.UIElement |
| duration | The duration. | System.Double |
| delay | The delay in milliseconds. | System.Double |
| value | The value in degrees to rotate. | System.Single |
| centerX | The center x in pixels. | System.Single |
| centerY | The center y in pixels. | System.Single |
| centerZ | The center z in pixels. | System.Single |
| return |The visual of the UIElement. |

#### Rotate(Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet animationSet,System.Double duration,System.Double delay,System.Single value,System.Single centerX,System.Single centerY,System.Single centerZ)

Rotates the specified UI Element.

##### parameters



| name | description | type |
| --- | --- | --- |
| animationSet | The animationSet object. | Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet |
| duration | The duration. | System.Double |
| delay | The delay in milliseconds. | System.Double |
| value | The value in degrees to rotate. | System.Single |
| centerX | The center x in pixels. | System.Single |
| centerY | The center y in pixels. | System.Single |
| centerZ | The center z in pixels. | System.Single |
| return |The visual of the UIElement. |

#### Opacity(Windows.UI.Xaml.UIElement associatedObject,System.Double duration,System.Double delay,System.Single value)

Changes the Opacity of the specified UI Element.

##### parameters



| name | description | type |
| --- | --- | --- |
| associatedObject | The UI Element to change the opacity of. | Windows.UI.Xaml.UIElement |
| duration | The duration. | System.Double |
| delay | The delay. | System.Double |
| value | The value. | System.Single |
| return |The visual of the UIElement. |

#### Opacity(Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet animationSet,System.Double duration,System.Double delay,System.Single value)

Changes the Opacity of the specified UI Element.

##### parameters



| name | description | type |
| --- | --- | --- |
| animationSet | The animationSet object. | Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet |
| duration | The duration. | System.Double |
| delay | The delay. | System.Double |
| value | The value. | System.Single |
| return |The visual of the UIElement. |

#### Scale(Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet animationSet,System.Double duration,System.Double delay,System.Single centerX,System.Single centerY,System.Single centerZ,System.Single scaleX,System.Single scaleY,System.Single scaleZ)

Scales the specified UI Element.

##### parameters



| name | description | type |
| --- | --- | --- |
| animationSet | The animationSet object. | Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet |
| duration | The duration. | System.Double |
| delay | The delay in milliseconds. | System.Double |
| centerX | The center x in pixels. | System.Single |
| centerY | The center y in pixels. | System.Single |
| centerZ | The center z in pixels. | System.Single |
| scaleX | The scale x. | System.Single |
| scaleY | The scale y. | System.Single |
| scaleZ | The scale z. | System.Single |
| return |The visual of the UIElement. |

#### Offset(Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet animationSet,System.Double duration,System.Double delay,System.Single offsetX,System.Single offsetY,System.Single offsetZ)

Changes the Offset of the specified UI Element.

##### parameters



| name | description | type |
| --- | --- | --- |
| animationSet | The animationSet object. | Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet |
| duration | The duration. | System.Double |
| delay | The delay. | System.Double |
| offsetX | The offset x. | System.Single |
| offsetY | The offset y. | System.Single |
| offsetZ | The offset z. | System.Single |
| return |The visual of the UIElement. |

#### Blur(Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet animationSet,System.Double duration,System.Double delay,System.Double blurAmount)

Blurs the specified framework element.

##### parameters



| name | description | type |
| --- | --- | --- |
| animationSet | The animationSet object. | Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet |
| duration | The duration. | System.Double |
| delay | The delay. | System.Double |
| blurAmount | The blur amount. | System.Double |
| return |The Composition Effect Brush of the blur so you can control animations manually. |

#### Blur(Windows.UI.Xaml.FrameworkElement associatedObject,System.Double duration,System.Double delay,System.Double blurAmount)

Blurs the specified framework element.

##### parameters



| name | description | type |
| --- | --- | --- |
| associatedObject | The associated object. | Windows.UI.Xaml.FrameworkElement |
| duration | The duration. | System.Double |
| delay | The delay. | System.Double |
| blurAmount | The blur amount. | System.Double |
| return |The Composition Effect Brush of the blur so you can control animations manually. |

#### Parallax(Windows.UI.Xaml.UIElement element,Windows.UI.Xaml.FrameworkElement scrollerElement,System.Boolean isHorizontalEffect,System.Single multiplier)

Creates a Parallax effect on the specified element based on the supplied scroller element.

##### parameters



| name | description | type |
| --- | --- | --- |
| element | The element. | Windows.UI.Xaml.UIElement |
| scrollerElement | The scroller element. | Windows.UI.Xaml.FrameworkElement |
| isHorizontalEffect | if set to  [is horizontal effect]. | System.Boolean |
| multiplier | The multiplier (how fast it scrolls). | System.Single |

### properties

#### IsBlurSupported

Gets a value indicating whether the platform supports blur.
