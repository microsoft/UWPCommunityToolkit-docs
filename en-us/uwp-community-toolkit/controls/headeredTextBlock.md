---
permalink: /en-US/controls/HeaderedTextBlock.html
title: HeaderedTextBlock
description: This page describes the HeaderedTextBlock menu control
keywords: windows, app, toolkit, HeaderedTextBlock, menu
layout: default
search.product: eADQiWindows 10XVcnh
---

# HeaderedTextBlock
The **HeaderedTextBlock Control** provides a header for read-only text. This control is useful for displaying read-only forms, content, or a collection of items depending on the type. 

## Syntax
```xaml
 <controls:HeaderedTextBlock Header="{Binding Header.Value, Mode=OneWay}" 
                                    Text="{Binding Text.Value, Mode=OneWay}" 
                                    Orientation="{Binding Orientation.Value, Mode=OneWay}"
                                    Margin="20,10,0,0"/>

   ```
 
## Example


## Default Template
```xaml
	<controls:HeaderedTextBlock Header="@[Header:String:Name]" 
                                Text="@[Text:String:UWP Toolkit]" 
                                Orientation="@[Orientation:Enum:Orientation.Vertical]"
								Margin="20,10,0,0" />
```

## Platforms

## API
