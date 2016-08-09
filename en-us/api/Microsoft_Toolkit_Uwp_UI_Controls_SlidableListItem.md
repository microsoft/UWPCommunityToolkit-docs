---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_UI_Controls_SlidableListItem.htm
title: Microsoft.Toolkit.Uwp.UI.Controls.SlidableListItem API 
description: API page for Microsoft.Toolkit.Uwp.UI.Controls.SlidableListItem
keywords: windows, app, toolkit, UWP, API
layout: default
search.product: eADQiWindows 10XVcnh
---


# SlidableListItem class

ContentControl providing functionality for sliding left or right to expose functions

## Members

The **SlidableListItem** class has this types of members

* [constructors](#constructors)

* [methods](#methods)

* [properties](#properties)

* [events](#events)

* [fields](#fields)

### constructors

#### contructor

Initializes a new instance of the [SlidableListItem](Microsoft_Toolkit_Uwp_UI_Controls_SlidableListItem.htm) class. Creates a new instance of [SlidableListItem](Microsoft_Toolkit_Uwp_UI_Controls_SlidableListItem.htm)



### methods

#### OnApplyTemplate()

Invoked whenever application code or internal processes (such as a rebuilding layout pass) call OnApplyTemplate. In simplest terms, this means the method is called just before a UI element displays in an application. Override this method to influence the default post-template logic of a class.



#### ContentGrid_ManipulationDelta()

Handler for when slide manipulation is underway



#### ContentGrid_ManipulationCompleted()

Handler for when slide manipulation is complete



### properties

#### RightBackground

Gets or sets the right background color



#### LeftBackground

Gets or sets the left background color



#### RightForeground

Gets or sets the right foreground color



#### LeftForeground

Gets or sets the left foreground color



#### RightLabel

Gets or sets the right label



#### LeftLabel

Gets or sets the left label



#### RightIcon

Gets or sets the right icon symbol



#### LeftIcon

Gets or sets the left icon symbol



#### RightCommand

Gets or sets the ICommand for right command request



#### ActivationWidth

Gets or sets the amount of pixels the content needs to be swiped for an action to be requested



#### LeftCommand

Gets or sets the ICommand for left command request



#### MouseSlidingEnabled

Gets or sets a value indicating whether it has the ability to slide the control with the mouse. False by default



### events

#### RightCommandRequested

Occurs when the user swipes to the left to activate the right action



#### LeftCommandRequested

Occurs when the user swipes to the right to activate the left action



### fields

#### LeftBackgroundProperty

Indetifies the LeftBackground property



#### RightCommandProperty

Identifies the RightCommand property



#### LeftCommandProperty

Identifies the LeftCommand property



#### MouseSlidingEnabledProperty

Identifies the MouseSlidingEnabled property



#### RightBackgroundProperty

Identifies the RightBackground property



#### LeftIconProperty

Indeifies the LeftIcon property



#### RightForegroundProperty

Indetifies the RightForeground property



#### LeftForegroundProperty

Indetifies the LeftForeground property



#### RightLabelProperty

Indetifies the RightLabel property



#### LeftLabelProperty

Indetifies the LeftLabel property



#### RightIconProperty

Indetifies the RightIcon property



#### ActivationWidthProperty

Indetifies the ActivationWidth property


