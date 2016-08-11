---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_UI_Animations_AnimationExtensions.htm
title: Microsoft.Toolkit.Uwp.UI.Animations.AnimationExtensions API 
description: API page for Microsoft.Toolkit.Uwp.UI.Animations.AnimationExtensions
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# AnimationExtensions class

These extension methods perform animation on UIElements

## Members

The **AnimationExtensions** class has the following types of members:

* [Methods](#Methods)

* [Properties](#Properties)

### Methods

#### Offset(Windows.UI.Xaml.UIElement associatedObject,System.Single offsetX,System.Single offsetY,System.Double duration,System.Double delay)

Animates the offset of the the UIElement.

##### Parameters



| Name | Description | Type || --- | --- | --- || associatedObject | The specified UI Element. | [UIElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.UIElement) || offsetX | The offset on the x axis. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || offsetY | The offset on the y axis. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || duration | The duration in milliseconds. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || delay | The delay in milliseconds. (ignored if duration == 0) | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || return |An AnimationSet. |




#### Scale(Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet animationSet,System.Single scaleX,System.Single scaleY,System.Single centerX,System.Single centerY,System.Double duration,System.Double delay)

Animates the scale of the the specified UIElement.

##### Parameters



| Name | Description | Type || --- | --- | --- || animationSet | The animationSet object. | [AnimationSet](Microsoft_Toolkit_Uwp_UI_Animations_AnimationSet.htm) || scaleX | The scale on the x axis. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || scaleY | The scale on the y axis. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || centerX | The center x in pixels. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || centerY | The center y in pixels. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || duration | The duration in milliseconds. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || delay | The delay in milliseconds. (ignored if duration == 0) | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || return |An AnimationSet. |




#### Blur(Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet animationSet,System.Double value,System.Double duration,System.Double delay)

Animates the gaussian blur of the the UIElement.

##### Parameters



| Name | Description | Type || --- | --- | --- || animationSet | The animation set. | [AnimationSet](Microsoft_Toolkit_Uwp_UI_Animations_AnimationSet.htm) || value | The blur amount. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || duration | The duration in milliseconds. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || delay | The delay. (ignored if duration == 0) | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || return |An Animation Set. |




#### BeginAsync(Windows.UI.Xaml.Media.Animation.Storyboard storyboard)

Begins a Storyboard animation and returns a task that completes when the animaton is complete

##### Parameters



| Name | Description | Type || --- | --- | --- || storyboard | The storyoard to be started | [Storyboard](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.Media.Animation.Storyboard) || return |Task that completes when the animation is complete |




#### Fade(Windows.UI.Xaml.UIElement associatedObject,System.Single value,System.Double duration,System.Double delay)

Animates the opacity of the the UIElement.

##### Parameters



| Name | Description | Type || --- | --- | --- || associatedObject | The UI Element to change the opacity of. | [UIElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.UIElement) || value | The fade value, between 0 and 1. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || duration | The duration in milliseconds. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || delay | The delay. (ignored if duration == 0) | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || return |An AnimationSet. |




#### Fade(Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet animationSet,System.Single value,System.Double duration,System.Double delay)

Animates the opacity of the the UIElement.

##### Parameters



| Name | Description | Type || --- | --- | --- || animationSet | The animation set. | [AnimationSet](Microsoft_Toolkit_Uwp_UI_Animations_AnimationSet.htm) || value | The fade value, between 0 and 1. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || duration | The duration in milliseconds. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || delay | The delay. (ignored if duration == 0) | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || return |An AnimationSet. |




#### Blur(Windows.UI.Xaml.FrameworkElement associatedObject,System.Double value,System.Double duration,System.Double delay)

Animates the gaussian blur of the the UIElement.

##### Parameters



| Name | Description | Type || --- | --- | --- || associatedObject | The associated object. | [FrameworkElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.FrameworkElement) || value | The blur amount. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || duration | The duration in milliseconds. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || delay | The delay. (ignored if duration == 0) | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || return |An Animation Set. |




#### Offset(Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet animationSet,System.Single offsetX,System.Single offsetY,System.Double duration,System.Double delay)

Animates the offset of the the UIElement.

##### Parameters



| Name | Description | Type || --- | --- | --- || animationSet | The animation set. | [AnimationSet](Microsoft_Toolkit_Uwp_UI_Animations_AnimationSet.htm) || offsetX | The offset on the x axis. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || offsetY | The offset on the y axis. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || duration | The duration in milliseconds. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || delay | The delay in milliseconds. (ignored if duration == 0) | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || return |An AnimationSet. |




#### Rotate(Windows.UI.Xaml.UIElement associatedObject,System.Single value,System.Single centerX,System.Single centerY,System.Double duration,System.Double delay)

Animates the rotation in degrees of the the UIElement.

##### Parameters



| Name | Description | Type || --- | --- | --- || associatedObject | The UI Element to rotate. | [UIElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.UIElement) || value | The value in degrees to rotate. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || centerX | The center x in pixels. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || centerY | The center y in pixels. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || duration | The duration in milliseconds. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || delay | The delay in milliseconds. (ignored if duration == 0) | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || return |An AnimationSet. |




#### Rotate(Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet animationSet,System.Single value,System.Single centerX,System.Single centerY,System.Double duration,System.Double delay)

Animates the rotation in degrees of the the UIElement.

##### Parameters



| Name | Description | Type || --- | --- | --- || animationSet | The animation set. | [AnimationSet](Microsoft_Toolkit_Uwp_UI_Animations_AnimationSet.htm) || value | The value in degrees to rotate. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || centerX | The center x in pixels. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || centerY | The center y in pixels. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || duration | The duration in milliseconds. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || delay | The delay in milliseconds. (ignored if duration == 0) | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || return |An AnimationSet. |




#### Scale(Windows.UI.Xaml.UIElement associatedObject,System.Single scaleX,System.Single scaleY,System.Single centerX,System.Single centerY,System.Double duration,System.Double delay)

Animates the scale of the the specified UIElement.

##### Parameters



| Name | Description | Type || --- | --- | --- || associatedObject | The associated UIElement. | [UIElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.UIElement) || scaleX | The scale on the x axis. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || scaleY | The scale on the y axis. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || centerX | The center x in pixels. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || centerY | The center y in pixels. | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || duration | The duration in millisecond. | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || delay | The delay in milliseconds. (ignored if duration == 0) | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || return |An AnimationSet. |




### Properties

#### IsBlurSupported

Gets a value indicating whether the platform supports blur.




