---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_UI_Animations_Behaviors_CompositionBehaviorBase.htm
title: Microsoft.Toolkit.Uwp.UI.Animations.Behaviors.CompositionBehaviorBase API 
description: API page for Microsoft.Toolkit.Uwp.UI.Animations.Behaviors.CompositionBehaviorBase
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# CompositionBehaviorBase class

A base class for all behaviors using composition.It contains some of the common propeties to set on a visual.

## Members

The **CompositionBehaviorBase** class has the following types of members:

* [Methods](#Methods)

* [Properties](#Properties)

* [Fields](#Fields)

### Methods

#### OnAttached()

Called after the behavior is attached to the AssociatedObject.



#### StartAnimation()

Starts the animation.



#### PropertyChangedCallback(Windows.UI.Xaml.DependencyObject dependencyObject,Windows.UI.Xaml.DependencyPropertyChangedEventArgs dependencyPropertyChangedEventArgs)

If any of the properties are changed then the animation is automatically started depending on the AutomaticallyStart property.

##### Parameters



| Name | Description | Type || --- | --- | --- || dependencyObject | The dependency object. | [DependencyObject](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.DependencyObject) || dependencyPropertyChangedEventArgs | The [DependencyPropertyChangedEventArgs](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.DependencyPropertyChangedEventArgs) instance containing the event data. | [DependencyPropertyChangedEventArgs](https://msdn.microsoft.com/library/windows/apps/Windows.UI.Xaml.DependencyPropertyChangedEventArgs) |


### Properties

#### AutomaticallyStart

Gets or sets a value indicating whether [automatically start] on the animation is set.



#### Delay

Gets or sets the delay.



#### Duration

Gets or sets the duration.



### Fields

#### DurationProperty

The duration of the animation.



#### DelayProperty

The delay of the animation.



#### AutomaticallyStartProperty

The property sets if the animation should automatically start.


