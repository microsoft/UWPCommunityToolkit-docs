---
permalink: /en-US/controls/carousel.html
title: Carousel
description: This page describes the Carousel control
Keywords: carousel, menu, control, image, windows, applicaiton
defaultsearch.product:  eADQiWindows 10XVcnh 
```

# Carousel Menu
The **Carousel Control** is a slideable application that lets developes add interactive navigation user interface to their applications, both vertically ad horiztonally. You can navigate through a list, add and remove items dynamically, smooth animations and transition.  
 

## Syntax 
```xaml
<Page.Resources>
        <DataTemplate x:Key="PhotosTemplate">
            <Grid Background="White" BorderBrush="Black" BorderThickness="1">
                <Image Source="{Binding Thumbnail}"
                    Stretch="UniformToFill"
                    HorizontalAlignment="Center"
                    VerticalAlignment="Center"/>
                    ```


## Example


## Default Template 
```xaml
/Grid>
    <Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
        <controls:Carousel
                Name="control"
                ContentTemplate="{StaticResource PhotosTemplate}"
                MaxItems="6"
                AspectRatio="0.6"
				MaxHeight="315"
                AlignmentX="Right"
                GradientOpacity="0.79"/>
    </Grid>
```

## Platforms 

## API 
