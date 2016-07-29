
# Microsoft.Toolkit.Uwp.UI.Animations.Extensions.Composition class

These extension methods use composition to perform animation on visuals.

## Members

The **Microsoft.Toolkit.Uwp.UI.Animations.Extensions.Composition** namespace has these types of members

* [methods](#methods)

* [properties](#properties)

### methods

#### Microsoft.Toolkit.Uwp.UI.Animations.Extensions.Composition.Scale(Windows.UI.Xaml.UIElement,System.Double,System.Double,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)

Scales the specified UI Element.

##### parameters




| name | description |

| --- | --- |

| associatedObject | The associated object. |

| duration | The duration. |

| delay | The delay in milliseconds. |

| centerX | The center x in pixels. |

| centerY | The center y in pixels. |

| centerZ | The center z in pixels. |

| scaleX | The scale x. |

| scaleY | The scale y. |

| scaleZ | The scale z. |

| return |T |

#### Microsoft.Toolkit.Uwp.UI.Animations.Extensions.Composition.Rotate(Windows.UI.Xaml.UIElement,System.Double,System.Double,System.Single,System.Single,System.Single,System.Single)

Rotates the specified UI Element.

##### parameters




| name | description |

| --- | --- |

| associatedObject | The UI Element to rotate. |

| duration | The duration. |

| delay | The delay in milliseconds. |

| value | The value in degrees to rotate. |

| centerX | The center x in pixels. |

| centerY | The center y in pixels. |

| centerZ | The center z in pixels. |

| return |T |

#### Microsoft.Toolkit.Uwp.UI.Animations.Extensions.Composition.Opacity(Windows.UI.Xaml.UIElement,System.Double,System.Double,System.Single)

Changes the Opacity of the specified UI Element.

##### parameters




| name | description |

| --- | --- |

| associatedObject | The UI Element to change the opacity of. |

| duration | The duration. |

| delay | The delay. |

| value | The value. |

| return |T |

#### Microsoft.Toolkit.Uwp.UI.Animations.Extensions.Composition.Offset(Windows.UI.Xaml.UIElement,System.Double,System.Double,System.Single,System.Single,System.Single)

Changes the Offset of the specified UI Element.

##### parameters




| name | description |

| --- | --- |

| associatedObject | The specified UI Element. |

| duration | The duration. |

| delay | The delay. |

| offsetX | The offset x. |

| offsetY | The offset y. |

| offsetZ | The offset z. |

| return |T |

#### Microsoft.Toolkit.Uwp.UI.Animations.Extensions.Composition.Blur(Windows.UI.Xaml.FrameworkElement,System.Double,System.Double,System.Double)

Blurs the specified framework element.

##### parameters




| name | description |

| --- | --- |

| associatedObject | The associated object. |

| duration | The duration. |

| delay | The delay. |

| blurAmount | The blur amount. |

| return |T |

#### Microsoft.Toolkit.Uwp.UI.Animations.Extensions.Composition.Parallax(Windows.UI.Xaml.UIElement,Windows.UI.Xaml.FrameworkElement,System.Boolean,System.Single)

Creates a Parallax effect on the specified element based on the supplied scroller element.

##### parameters




| name | description |

| --- | --- |

| element | The element. |

| scrollerElement | The scroller element. |

| isHorizontalEffect | if set to  [is horizontal effect]. |

| multiplier | The multiplier (how fast it scrolls). |

### properties

#### Microsoft.Toolkit.Uwp.UI.Animations.Extensions.Composition.IsBlurSupported

Gets a value indicating whether the platform supports blur.
