---
permalink: /en-US/controls/carousel.html
title: Carousel XAML Control for UWP Community Toolkit
description: The Carousel Control is slideable application that lets users add interactive navigation XAML UI to applications. 
Keywords: carousel, menu, CarouselControl, Carousel, control, image, windows, application, XAML, UI, slideable, UWP, toolkit 
defaultsearch.product:  eADQiWindows 10XVcnh 
---

# Carousel XAML Control
The **Carousel Control** is a slideable application that lets developers add interactive navigation UI to their application. This Windows forms control, displays a tile-like and visually appealing items along a pre-defined path. 

This controls gives users the power to activate, navigate and animate from one item to another. You can navigate through a list, add and remove items dynamically, smooth animations create vertical and horizontal transitions, and customize item paths.
Examples include *iTunes*, and *Windows 10* UI. 
 
## Syntax 
```xaml
 <controls:Carousel Name="carouselControl"
                ContentTemplate="{StaticResource PhotosTemplate}"
                MaxItems="@[MaxItems:Slider:6:1-10]"
                AspectRatio="@[AspectRatio:DoubleSlider:0.6:0.25-2.0]"
                MaxHeight="@[MaxHeight:Slider:500:200-800]"
                AlignmentX="@[AlignmentX:Enum:AlignmentX.Center]"
                GradientOpacity="@[GradientOpacity:DoubleSlider:0.3:0.0-1.0]"/>
```          

## Example Image


## Default Template 
If you need to override the default template to customize the styling or change the presentation you may do so by overriding the defaults.  The linked file below is the source of the control built in the latest version of the toolkit.  If you need an older version see the git page for versions.

[Carousel XAML File](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Windows.Toolkit.UI.Controls/Carousel/Carousel.xaml)

## Platforms 

Windows 10 SDK 10240 or higher

## API 
