---
permalink: /en-US/controls/headeredtextblock.html
title: HeaderedTextBlock XAML Control for UWP Community Toolkit
description: The HeaderedTextBlock Control provides a header for read-only text, displays forms, content and various item collections
keywords: windows, app, toolkit, HeaderedTextBlock, text block, headered, XAML, XAML Control, HeaderedText, UWP
layout: default
search.product: eADQiWindows 10XVcnh
---

# HeaderedTextBlock XAML Control
The **HeaderedTextBlock Control** provides a header for read-only text. This control is useful for displaying read-only forms, content, or a collection of items depending on the type. 
## Syntax
```xaml
 <controls:HeaderedTextBlock Header="{Binding Header.Value, Mode=OneWay}" 
                                    Text="{Binding Text.Value, Mode=OneWay}" 
                                    Orientation="{Binding Orientation.Value, Mode=OneWay}"
                                    Margin="20,10,0,0"/>

   ```
 
## Example Image


## Default Template
```xaml
	<controls:HeaderedTextBlock Header="@[Header:String:Name]" 
                                Text="@[Text:String:UWP Toolkit]" 
                                Orientation="@[Orientation:Enum:Orientation.Vertical]"
								Margin="20,10,0,0" />
```

## Platforms

## API
