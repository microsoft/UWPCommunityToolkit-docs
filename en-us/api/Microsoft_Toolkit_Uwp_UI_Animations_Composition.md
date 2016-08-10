---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_UI_Animations_Composition.htm
title: Microsoft.Toolkit.Uwp.UI.Animations.Composition API 
description: API page for Microsoft.Toolkit.Uwp.UI.Animations.Composition
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


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



| name | description | type || --- | --- | --- || associatedObject | The specified UI Element. | [UIElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.UIElement) || duration | The duration. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || delay | The delay. (ignored if duration == 0) | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || offsetX | The offset x. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || offsetY | The offset y. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || offsetZ | The offset z. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || return |The visual of the UIElement. |


#### Scale(Windows.UI.Xaml.UIElement associatedObject,System.Double duration,System.Double delay,System.Single centerX,System.Single centerY,System.Single centerZ,System.Single scaleX,System.Single scaleY,System.Single scaleZ)

Scales the specified UI Element.

##### parameters



| name | description | type || --- | --- | --- || associatedObject | The associated object. | [UIElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.UIElement) || duration | The duration. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || delay | The delay in milliseconds. (ignored if duration == 0) | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || centerX | The center x in pixels. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || centerY | The center y in pixels. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || centerZ | The center z in pixels. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || scaleX | The scale x. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || scaleY | The scale y. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || scaleZ | The scale z. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || return |The visual of the UIElement. |


#### Rotate(Windows.UI.Xaml.UIElement associatedObject,System.Double duration,System.Double delay,System.Single value,System.Single centerX,System.Single centerY,System.Single centerZ)

Rotates the specified UI Element.

##### parameters



| name | description | type || --- | --- | --- || associatedObject | The UI Element to rotate. | [UIElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.UIElement) || duration | The duration. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || delay | The delay in milliseconds. (ignored if duration == 0) | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || value | The value in degrees to rotate. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || centerX | The center x in pixels. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || centerY | The center y in pixels. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || centerZ | The center z in pixels. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || return |The visual of the UIElement. |


#### Rotate(Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet animationSet,System.Double duration,System.Double delay,System.Single value,System.Single centerX,System.Single centerY,System.Single centerZ)

Rotates the specified UI Element.

##### parameters



| name | description | type || --- | --- | --- || animationSet | The animationSet object. | [AnimationSet](Microsoft_Toolkit_Uwp_UI_Animations_AnimationSet.htm) || duration | The duration. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || delay | The delay in milliseconds. (ignored if duration == 0) | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || value | The value in degrees to rotate. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || centerX | The center x in pixels. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || centerY | The center y in pixels. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || centerZ | The center z in pixels. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || return |The visual of the UIElement. |


#### Fade(Windows.UI.Xaml.UIElement associatedObject,System.Double duration,System.Double delay,System.Single value)

Changes the Opacity of the specified UI Element.

##### parameters



| name | description | type || --- | --- | --- || associatedObject | The UI Element to change the opacity of. | [UIElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.UIElement) || duration | The duration. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || delay | The delay. (ignored if duration == 0) | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || value | The value. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || return |The visual of the UIElement. |


#### Fade(Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet animationSet,System.Double duration,System.Double delay,System.Single value)

Changes the Opacity of the specified UI Element.

##### parameters



| name | description | type || --- | --- | --- || animationSet | The animationSet object. | [AnimationSet](Microsoft_Toolkit_Uwp_UI_Animations_AnimationSet.htm) || duration | The duration. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || delay | The delay. (ignored if duration == 0) | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || value | The value. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || return |The visual of the UIElement. |


#### Scale(Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet animationSet,System.Double duration,System.Double delay,System.Single centerX,System.Single centerY,System.Single centerZ,System.Single scaleX,System.Single scaleY,System.Single scaleZ)

Scales the specified UI Element.

##### parameters



| name | description | type || --- | --- | --- || animationSet | The animationSet object. | [AnimationSet](Microsoft_Toolkit_Uwp_UI_Animations_AnimationSet.htm) || duration | The duration. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || delay | The delay in milliseconds. (ignored if duration == 0) | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || centerX | The center x in pixels. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || centerY | The center y in pixels. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || centerZ | The center z in pixels. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || scaleX | The scale x. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || scaleY | The scale y. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || scaleZ | The scale z. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || return |The visual of the UIElement. |


#### Offset(Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet animationSet,System.Double duration,System.Double delay,System.Single offsetX,System.Single offsetY,System.Single offsetZ)

Changes the Offset of the specified UI Element.

##### parameters



| name | description | type || --- | --- | --- || animationSet | The animationSet object. | [AnimationSet](Microsoft_Toolkit_Uwp_UI_Animations_AnimationSet.htm) || duration | The duration. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || delay | The delay. (ignored if duration == 0) | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || offsetX | The offset x. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || offsetY | The offset y. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || offsetZ | The offset z. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || return |The visual of the UIElement. |


#### Blur(Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet animationSet,System.Double duration,System.Double delay,System.Double value)

Blurs the specified framework element.

##### parameters



| name | description | type || --- | --- | --- || animationSet | The animationSet object. | [AnimationSet](Microsoft_Toolkit_Uwp_UI_Animations_AnimationSet.htm) || duration | The duration. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || delay | The delay. (ignored if duration == 0) | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || value | The blur amount. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || return |The Composition Effect Brush of the blur so you can control animations manually. |


#### Blur(Windows.UI.Xaml.FrameworkElement associatedObject,System.Double duration,System.Double delay,System.Double value)

Blurs the specified framework element.

##### parameters



| name | description | type || --- | --- | --- || associatedObject | The associated object. | [FrameworkElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.FrameworkElement) || duration | The duration. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || delay | The delay. (ignored if duration == 0) | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || value | The blur amount. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || return |The Composition Effect Brush of the blur so you can control animations manually. |


#### Parallax(Windows.UI.Xaml.UIElement element,Windows.UI.Xaml.FrameworkElement scrollerElement,System.Boolean isHorizontalEffect,System.Single multiplier)

Creates a Parallax effect on the specified element based on the supplied scroller element.

##### parameters



| name | description | type || --- | --- | --- || element | The element. | [UIElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.UIElement) || scrollerElement | The scroller element. | [FrameworkElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.FrameworkElement) || isHorizontalEffect | if set to  [is horizontal effect]. | [Boolean](https://msdn.microsoft.com/library/windows/apps/System.Boolean) || multiplier | The multiplier (how fast it scrolls). | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) |


### properties

#### IsBlurSupported

Gets a value indicating whether the platform supports blur.


