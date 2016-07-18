---
permalink: /en-US/controls/HeaderedTextBlock.html
title: HeaderedTextBlock
description: This page describes the HeaderedTextBlock menu control
keywords: windows, app, toolkit, headeredtextblock, menu
layout: default
search.product: eADQiWindows 10XVcnh
---

# HeaderedTextBlock
The **HeaderedTextBlock Control** is designed to provide a header for read-only text. This control is useful for displaying read-only forms, content, or a collection or items depending on the type. 

## Syntax
```xaml
<Grid Background="{StaticResource Brush-Grey-05}">
        <controls:HeaderedTextBlock Header="{Binding Header.Value, Mode=OneWay}" 
                                    Text="{Binding Text.Value, Mode=OneWay}" 
                                    Orientation="{Binding Orientation.Value, Mode=OneWay}"
                                    Margin="20,10,0,0"/>
    </Grid>
   ```
 
## Example


## Default Template
```xaml
  <Grid Background="{StaticResource Brush-Grey-05}">
        <controls:HeaderedTextBlock Header="{Binding Header.Value, Mode=OneWay}" 
                                    Text="{Binding Text.Value, Mode=OneWay}" 
                                    Orientation="{Binding Orientation.Value, Mode=OneWay}"
                                    Margin="20,10,0,0"/>
        <controls:HeaderedTextBlock HorizontalAlignment="Left" Height="100" VerticalAlignment="Top" Width="100"/>
    </Grid>
```

## Platforms

## API
