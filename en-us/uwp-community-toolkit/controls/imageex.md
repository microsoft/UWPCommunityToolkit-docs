---
permalink: /en-US/controls/ImageEx.html
title: ImageEx
description: This page describes the ImageEx menu control
keywords: windows, app, toolkit, ImageEx, menu
layout: default
search.product: eADQiWindows 10XVcnh
---

# ImageEx
The **ImageEx** Control download images asynchronously showing a load indicator. Source images are then stored in the App local cache to preserve resources and load time. 
ImageEx also extends the default Image platform control improving performance. News images with text located at the bottom of the Bing page, are an example of ImaageEx.

## Syntax
```xaml
  <DataTemplate x:Key="PhotoTemplate">
            <Grid BorderBrush="Black" BorderThickness="1" Background="Black">
                <controls:ImageEx
                    IsCacheEnabled="True"
                    Source="{Binding Thumbnail}"
                    Stretch="UniformToFill"
                    PlaceholderSource="/Assets/Photos/ImageExPlaceholder.jpg"
                    PlaceholderStretch="UniformToFill"
                    HorizontalAlignment="Center"
                    VerticalAlignment="Center"/>  
                <TextBlock VerticalAlignment="Bottom" HorizontalAlignment="Center"
                           Text="{Binding Title}" FontSize="16"
                           TextWrapping="Wrap" Foreground="White" />
            </Grid>
```

## Example

## Default Template
```xaml
 <Page.Resources>
        <DataTemplate x:Key="PhotoTemplate">
            <Grid BorderBrush="Black" BorderThickness="1">
                <controls:ImageEx
					IsCacheEnabled="True"
                    Source="{Binding Thumbnail}"
                    Stretch="UniformToFill"
                    HorizontalAlignment="Center"
                    VerticalAlignment="Center"/>  
                <TextBlock VerticalAlignment="Bottom" HorizontalAlignment="Center"
                           Text="{Binding Title}" FontSize="16"
                           TextWrapping="Wrap" Foreground="White"></TextBlock>
            </Grid>
        </DataTemplate>
    </Page.Resources>

    <Grid Background="{StaticResource ApplicationPageBackgroundThemeBrush}">
        <controls:VariableSizedGridView
            Name="control"
            Margin="0"
            ItemTemplate="{StaticResource PhotoTemplate}"
            Orientation="Horizontal"
            MaximumRowsOrColumns="4"
            AspectRatio="1"
            HorizontalAlignment="Left"
            VerticalAlignment="Top"/>
    </Grid>
</Page>
```

## Platforms

## API


