---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_UI_Animations_AnimationSet.htm
title: Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet API 
description: API page for Microsoft.Toolkit.Uwp.UI.Animations.AnimationSet
keywords: windows, app, toolkit, UWP, API
layout: default
search.product: eADQiWindows 10XVcnh
---


# AnimationSet class

Defines an object for storing and managing CompositionAnimations for an element

## Members

The **AnimationSet** class has this types of members

* [constructors](#constructors)

* [methods](#methods)

* [properties](#properties)

* [events](#events)

### constructors

#### contructor

Initializes a new instance of the [AnimationSet](Microsoft_Toolkit_Uwp_UI_Animations_AnimationSet.htm) class.

##### parameters



| name | description | type || --- | --- | --- || element | The associated element | [UIElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.UIElement) |
### methods

#### SetDelayForAll(System.Double delayTime)

Ovewrites the delay time on all animations to the specified value

##### parameters



| name | description | type || --- | --- | --- || delayTime | The delay time in seconds | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || return |AnimationSet to allow chaining |
#### AddEffectDirectPropertyChange(Windows.UI.Composition.CompositionEffectBrush effectBrush,System.Single value,System.String propertyName)

Adds an effect propety change to be run on StartAsync

##### parameters



| name | description | type || --- | --- | --- || effectBrush | The [CompositionEffectBrush](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Composition.CompositionEffectBrush) that will have a property changed | [CompositionEffectBrush](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Composition.CompositionEffectBrush) || value | The value to be applied | [Single](https://msdn.microsoft.com/library/windows/apps/System.Single) || propertyName | The property of the effect to be animated | [String](https://msdn.microsoft.com/library/windows/apps/System.String) |
#### Then()

Wait for existing animations to complete before running any others

##### parameters



| name | description | type || --- | --- | --- || return |AnimationSet to allow chaining |
#### StartAsync()

Starts all animations on the backing Visual.

##### parameters



| name | description | type || --- | --- | --- || return |A [Task](https://msdn.microsoft.com/library/windows/apps/System.Threading.Tasks.Task) that can be awaited until all animations have completed |
#### Stop()

Stops all animations on the backing Visual.

#### SetDurationForAll(System.Double duration)

Ovewrites the duration on all animations to the specified value

##### parameters



| name | description | type || --- | --- | --- || duration | The duration in seconds | [Double](https://msdn.microsoft.com/library/windows/apps/System.Double) || return |AnimationSet to allow chaining |
#### RemoveDirectPropertyChange(System.String propertyName)

Removes a property change from being run on StartAsync

##### parameters



| name | description | type || --- | --- | --- || propertyName | The property that no longer needs to be changed | [String](https://msdn.microsoft.com/library/windows/apps/System.String) |
#### AddAnimation(System.String propertyName,Windows.UI.Composition.CompositionAnimation animation)

Adds an animation to be run on StartAsync

##### parameters



| name | description | type || --- | --- | --- || propertyName | The property to be animated on the backing Visual | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || animation | The animation to be applied | [CompositionAnimation](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Composition.CompositionAnimation) |
#### RemoveAnimation(System.String propertyName)

Removes an animation from being run on StartAsync

##### parameters



| name | description | type || --- | --- | --- || propertyName | The property that no longer needs to be animated | [String](https://msdn.microsoft.com/library/windows/apps/System.String) |
#### AddEffectAnimation(Windows.UI.Composition.CompositionEffectBrush effectBrush,Windows.UI.Composition.CompositionAnimation animation,System.String propertyName)

Adds an effect animation to be run on StartAsync

##### parameters



| name | description | type || --- | --- | --- || effectBrush | The [CompositionEffectBrush](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Composition.CompositionEffectBrush) that will have a property animated | [CompositionEffectBrush](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Composition.CompositionEffectBrush) || animation | The animation to be applied | [CompositionAnimation](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Composition.CompositionAnimation) || propertyName | The property of the effect to be animated | [String](https://msdn.microsoft.com/library/windows/apps/System.String) |
#### AddDirectPropertyChange(System.String propertyName,System.Object value)

Adds a propertyChange to be run on StartAsync

##### parameters



| name | description | type || --- | --- | --- || propertyName | The property to be animated on the backing Visual | [String](https://msdn.microsoft.com/library/windows/apps/System.String) || value | The value to be applied | [Object](https://msdn.microsoft.com/library/windows/apps/System.Object) |
### properties

#### Element

Gets the [UIElement](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.UIElement)

#### Visual

Gets the Visual object that backs the XAML element

### events

#### Completed

Occurs when all animations have completed
