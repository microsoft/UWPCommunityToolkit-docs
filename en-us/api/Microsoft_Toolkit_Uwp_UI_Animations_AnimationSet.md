---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_UI_Animations_AnimationSet.htm
title: Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet API 
description: API page for Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# AnimationSet class

Defines an object for storing and managing CompositionAnimations for an element

## Members

The **AnimationSet** class has the following types of members:

### Constructors

#### contructor

Initializes a new instance of the [AnimationSet](Microsoft_Toolkit_Uwp_UI_Animations_AnimationSet.htm) class.

##### Parameters



| Name | Description | Type || --- | --- | --- || element | The associated element | [UIElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.UIElement) |


### Methods

#### SetDurationForAll(System.TimeSpan duration)

Ovewrites the duration on all animations to the specified value

##### Parameters



| Name | Description | Type || --- | --- | --- || duration | [TimeSpan](https://msdn.microsoft.com/library/windows/apps/System.TimeSpan) for the duration | [TimeSpan](https://msdn.microsoft.com/library/windows/apps/System.TimeSpan) || return |AnimationSet to allow chaining |


#### Dispose()

Dispose resources.



#### AddEffectDirectPropertyChange(Windows.UI.Composition.CompositionEffectBrush effectBrush,System.Single value,System.String propertyName)

Adds an effect propety change to be run on StartAsync

##### Parameters



| Name | Description | Type || --- | --- | --- || effectBrush | The [CompositionEffectBrush](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Composition.CompositionEffectBrush) that will have a property changed | [CompositionEffectBrush](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Composition.CompositionEffectBrush) || value | The value to be applied | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || propertyName | The property of the effect to be animated | [String](https://msdn.microsoft.com/library/windows/apps/System.String) |


#### AddStoryboardAnimation(System.String propertyPath,Windows.UI.Xaml.Media.Animation.Timeline timeline)

Adds a storyboard animation to be run

##### Parameters



| Name | Description | Type || --- | --- | --- || propertyPath | The property to be animated with Storyboards | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || timeline | The timeline object to be added to storyboard | [Timeline](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.Media.Animation.Timeline) |


#### Start()

Stats all animations. This method is not awaitable.



#### StartAsync()

Starts all animations and returns an awaitable task.

##### Parameters



| Name | Description | Type || --- | --- | --- || return |A [Task](https://msdn.microsoft.com/library/windows/apps/System.Threading.Tasks.Task) that can be awaited until all animations have completed |


#### Stop()

Stops all animations.



#### Then()

Wait for existing animations to complete before running new animations

##### Parameters



| Name | Description | Type || --- | --- | --- || return |AnimationSet to allow chaining |


#### SetDuration(System.Double duration)

Ovewrites the duration on all animations after last Then() to the specified value

##### Parameters



| Name | Description | Type || --- | --- | --- || duration | The duration in milliseconds | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || return |AnimationSet to allow chaining |


#### SetDuration(System.TimeSpan duration)

Ovewrites the duration on all animations after last Then() to the specified value

##### Parameters



| Name | Description | Type || --- | --- | --- || duration | [TimeSpan](https://msdn.microsoft.com/library/windows/apps/System.TimeSpan) for the duration | [TimeSpan](https://msdn.microsoft.com/library/windows/apps/System.TimeSpan) || return |AnimationSet to allow chaining |


#### SetDurationForAll(System.Double duration)

Ovewrites the duration on all animations to the specified value

##### Parameters



| Name | Description | Type || --- | --- | --- || duration | The duration in milliseconds | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || return |AnimationSet to allow chaining |


#### RemoveCompositionDirectPropertyChange(System.String propertyName)

Removes a composition property change

##### Parameters



| Name | Description | Type || --- | --- | --- || propertyName | The property that no longer needs to be changed | [String](https://msdn.microsoft.com/library/windows/apps/System.String) |


#### SetDelay(System.Double delayTime)

Ovewrites the delay time on all animations after last Then() to the specified value

##### Parameters



| Name | Description | Type || --- | --- | --- || delayTime | The delay time in milliseconds | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || return |AnimationSet to allow chaining |


#### SetDelay(System.TimeSpan delayTime)

Ovewrites the delay time on all animations after last Then() to the specified value

##### Parameters



| Name | Description | Type || --- | --- | --- || delayTime | [TimeSpan](https://msdn.microsoft.com/library/windows/apps/System.TimeSpan) for how much to delay | [TimeSpan](https://msdn.microsoft.com/library/windows/apps/System.TimeSpan) || return |AnimationSet to allow chaining |


#### SetDelayForAll(System.Double delayTime)

Ovewrites the delay time on all animations to the specified value

##### Parameters



| Name | Description | Type || --- | --- | --- || delayTime | The delay time in milliseconds | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || return |AnimationSet to allow chaining |


#### SetDelayForAll(System.TimeSpan delayTime)

Ovewrites the delay time on all animations to the specified value

##### Parameters



| Name | Description | Type || --- | --- | --- || delayTime | [TimeSpan](https://msdn.microsoft.com/library/windows/apps/System.TimeSpan) for how much to delay | [TimeSpan](https://msdn.microsoft.com/library/windows/apps/System.TimeSpan) || return |AnimationSet to allow chaining |


#### AddCompositionAnimation(System.String propertyName,Windows.UI.Composition.CompositionAnimation animation)

Adds a composition animation to be run on StartAsync

##### Parameters



| Name | Description | Type || --- | --- | --- || propertyName | The property to be animated on the backing Visual | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || animation | The [CompositionAnimation](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Composition.CompositionAnimation) to be applied | [CompositionAnimation](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Composition.CompositionAnimation) |


#### RemoveCompositionAnimation(System.String propertyName)

Removes a composition animation from being run on Visual property

##### Parameters



| Name | Description | Type || --- | --- | --- || propertyName | The property that no longer needs to be animated | [String](https://msdn.microsoft.com/library/windows/apps/System.String) |


#### AddCompositionEffectAnimation(Windows.UI.Composition.CompositionEffectBrush effectBrush,Windows.UI.Composition.CompositionAnimation animation,System.String propertyName)

Adds a composition effect animation to be run on backing Visual

##### Parameters



| Name | Description | Type || --- | --- | --- || effectBrush | The [CompositionEffectBrush](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Composition.CompositionEffectBrush) that will have a property animated | [CompositionEffectBrush](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Composition.CompositionEffectBrush) || animation | The animation to be applied | [CompositionAnimation](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Composition.CompositionAnimation) || propertyName | The property of the effect to be animated | [String](https://msdn.microsoft.com/library/windows/apps/System.String) |


#### AddCompositionDirectPropertyChange(System.String propertyName,System.Object value)

Adds a composition property that will change instantaneously

##### Parameters



| Name | Description | Type || --- | --- | --- || propertyName | The property to be animated on the backing Visual | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || value | The value to be applied | [Object](https://msdn.microsoft.com/library/windows/apps/System.Object) |


### Properties

#### Visual

Gets the Visual object that backs the XAML element



#### Element

Gets the [UIElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.UIElement)



#### UseComposition

Gets or sets a value indicating whether composition must be use even on SDK > 10586



### Events

#### Completed

Occurs when all animations have completed


