---
permalink: /en-US/controls/slidablelistitem.html
title: SlidableListItem XAML Control
description: The SlidableListItem Control is a UI that triggers actions by sliding content left or right
keywords: windows, app, toolkit, SlidableListItem, custom list item, List View, XAML, UWP, Slideable
layout: default
search.product: eADQiWindows 10XVcnh
---

# SlidableListItem XAML Control
The **SlideableListItem Control** is a UI control that enables actions to be triggered by sliding the content left or right. It can be used as a ListView Data Template root to create effects similar to those common in mobile email apps.  

<p> **Note:** Refer to the following content for required code that must be used when creating a SlideableListItem for Windows application development.<p>
## Syntax

    <controls:SlidableListItem HorizontalAlignment="Stretch"
            LeftIcon="Favorite" 
            RightIcon="Delete" 
            LeftLabel="Set Favorite" 
            RightLabel="Delete"
            LeftBackground="Green" 
             RightBackground="Red"
             LeftForeground="White" 
             RightForeground="Black"
             ActivationWidth="100"
             MouseSlidingEnabled="True"
             LeftCommand="ToggleFavorite" 
             RightCommandRequested="SlidableListItem_RightCommandActivated">
    </controls:SlidableListItem> 
      
```xaml

## Example Image

## Example Code
[SlideableListItem Sample Page](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Windows.Toolkit.SampleApp/SamplePages/SlideableListItem)

## Default Template 
[SlideableListItem XAML File](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Windows.Toolkit.UI.Controls/SlideableListItem/SlideableListItem.xaml) is the XAML template used in the toolkit for the default styling.

## Platforms 
Windows 10 SDK 10240 or greater

## API
Please view the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Windows.Toolkit.SampleApp) for the UWP Community Toolkit for samples of all the controls.
