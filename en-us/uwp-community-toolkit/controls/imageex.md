---
permalink: /en-US/controls/imageex.html
title: ImageEx XAML Control for UWP Community Toolkit
description: The ImageEx Control downloads images asynchronously while showing a loading indicator
keywords: windows, app, toolkit, ImageEx, loading indicator, ImageExControl, UWP
layout: default
search.product: eADQiWindows 10XVcnh
---

# ImageEx XAML Control
The **ImageEx Control** downloads images asynchronously, while showing a loading indicator. Source images are then stored in the application's local cache to preserve resources and load time. ImageEx also extends the default *Image Platform* control to improve performance through the cache. 

An example of ImageEx is the bottom of the *Bing* website, which shows several photo tiles with embedded image-related content. 

## Syntax
```xaml
<controls:ImageEx Name="ImageExControl"
			IsCacheEnabled="True"
            Source="{Binding Thumbnail}"
            Stretch="UniformToFill"
            HorizontalAlignment="Center"
            VerticalAlignment="Center"/>  
                <TextBlock VerticalAlignment="Bottom" HorizontalAlignment="Center"
                      Text="{Binding Title}" FontSize="16"
                      TextWrapping="Wrap" Foreground="White"></TextBlock>
```

## Example Image

## Example Code
[ImageExControl Sample Page](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Windows.Toolkit.SampleApp/SamplePages/ImageExControl)

## Default Template 
[ImageExControl XAML File](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Windows.Toolkit.UI.Controls/ImageExControl/ImageExControl.xaml) is the XAML template used in the toolkit for the default styling.

## Platforms 
Windows 10 SDK 10240 or greater

## API
Please access the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Windows.Toolkit.SampleApp), to view control samples that are available in the UWP Community Toolkit.
