---
permalink: /en-US/controls/carousel.html
title: Carousel XAML Control for UWP Community Toolkit
description: The Carousel Control is slideable application that lets users add interactive navigation XAML UI to applications. 
Keywords: carousel, menu, CarouselControl, Carousel, control, image, windows, application, XAML, UI, slideable, UWP, toolkit 
defaultsearch.product:  eADQiWindows 10XVcnh 
---

# Carousel XAML Control
The **Carousel Control** is a slideable application that lets developers add interactive navigation UI to their applications. You can navigate through a list, add and remove items dynamically, smooth animations and create vertical and horizontal transitions. 
 
 
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

(Carousel XAML File)[https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Windows.Toolkit.UI.Controls/Carousel/Carousel.xaml]

## Platforms 

## API 
