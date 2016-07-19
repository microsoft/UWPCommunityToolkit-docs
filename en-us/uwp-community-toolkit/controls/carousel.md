---
permalink: /en-US/controls/carousel.html
title: Carousel
description: This page describes the Carousel control
Keywords: carousel, menu, control, image, windows, applicaiton
defaultsearch.product:  eADQiWindows 10XVcnh 
---

# Carousel Menu
The **Carousel Control** is a slideable application that lets developers add interactive navigation UI to their applications. You can navigate through a list, add and remove items dynamically, smooth animations and create vertical and hortizontal transitions. 
 

## Syntax 
```xaml
 <controls:Carousel Name="CarouselControlName"
                ContentTemplate="{StaticResource PhotosTemplate}"
                MaxItems="@[MaxItems:Slider:6:1-10]"
                AspectRatio="@[AspectRatio:DoubleSlider:0.6:0.25-2.0]"
                MaxHeight="@[MaxHeight:Slider:500:200-800]"
                AlignmentX="@[AlignmentX:Enum:AlignmentX.Center]"
                GradientOpacity="@[GradientOpacity:DoubleSlider:0.3:0.0-1.0]"/>
```          

## Example


## Default Template 
```xaml
    <Page.Resources>
        <DataTemplate Grid x:Key="PhotosTemplate">
            <Background="White" BorderBrush="Black" BorderThickness="1">
                <Image Source="{Binding Thumbnail}"
                    Stretch="UniformToFill"
                    HorizontalAlignment="Center"
                    VerticalAlignment="Center"/>
        </DataTemplate>
    </Page.Resources>

    <Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
        <controls:Carousel  Name="CarouselControlName"
                ContentTemplate="{StaticResource PhotosTemplate}"
                MaxItems="6"
                AspectRatio="0.6"
                MaxHeight="500"
                AlignmentX="Center"
                GradientOpacity="0.3"/>
```

## Platforms 

## API 
