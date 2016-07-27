---
permalink: /en-US/controls/carousel.html
title: Carousel XAML Control for UWP Community Toolkit
description: The Carousel Control is slideable application that lets users add interactive navigation XAML UI to applications. 
Keywords: carousel, menu, CarouselControl, Carousel, control, image, windows, application, XAML, UI, slideable, UWP, toolkit 
defaultsearch.product:  eADQiWindows 10XVcnh 
---

# Carousel XAML Control
The **Carousel Control** is a slideable application that lets developers add interactive navigation UI to their application. Developers can navigate through a list, add and remove items dynamically, smooth animations create vertical and horizontal transitions, and customize item paths. 

### How it Works
Carousel Control items can be styled as either *Normal*, *Active* or *HotTracked*, or programmed to automatically scroll along customized paths. The Carousel forms control displays modern, tile-like items that are visually appealing. Examples include *Windows 10 Start* and *iTunes*. 
The following section provides code that is used to create Carousels when developing a Windows application.  

 
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
