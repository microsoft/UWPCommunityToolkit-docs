---
permalink: /en-US/animations/fadeHeader.htm
title: FadeHeader XAML and Code Animation
description: The FadeHeader behavior fades a ListView or GridView Header element
keywords: windows, app, toolkit, FadeHeader, Fade, fades, XAML, UWP, animation behavior, behavior, ListView, GridView, Header, ListViewHeader, GridViewHeader
layout: api
search.product: eADQiWindows 10XVcnh
lang: en-us
---

# FadeHeader

The **FadeHeader behavior** fades a ListView or GridView Header UIElement when the user scrolls. The UIElement fades out to 0 opacity when the edge of the Header reaches the edge of the visible bounds of the ListElement.

## Syntax

### XAML Implementation ###

**Implicit usage**: 

Automatically detects the Header element by finding the ListViewBase (note: GridView uses ListViewBase)

{% highlight xml %}

    <interactivity:Interaction.Behaviors>
        <behaviors:FadeHeaderBehavior />
    </interactivity:Interaction.Behaviors>

{% endhighlight %}


**Explicit usage**: 

Set the ElementName property using the UIElement of the Header manually

{% highlight xml %}

    <interactivity:Interaction.Behaviors>
        <behaviors:FadeHeaderBehavior HeaderElement="{Binding ElementName=MyHeaderGrid}" />
    </interactivity:Interaction.Behaviors>

{% endhighlight %}


### C# Implementation ###

Implicit usage:

{% highlight csharp %}

    Microsoft.Xaml.Interactivity.Interaction.GetBehaviors(MyListView).Add(new FadeHeaderBehavior());

{% endhighlight %}

Explicit usage:

{% highlight csharp %}

    Microsoft.Xaml.Interactivity.Interaction.GetBehaviors(MyListView).Add(new FadeHeaderBehavior { HeaderElement = MyHeaderGrid });

{% endhighlight %}


## Example ##

{% highlight xml %}

    <ListView x:Name="MyListView">
    <interactivity:Interaction.Behaviors>
        <behaviors:FadeHeaderBehavior />
    </interactivity:Interaction.Behaviors>
    <ListView.Header>
        <Grid x:Name="MyHeaderGrid"
                      MinHeight="250"
                      Background="{StaticResource Brush-Blue-01}">
            <StackPanel VerticalAlignment="Center"
                        HorizontalAlignment="Center"
                        Margin="20,0">
                <TextBlock Text="This Is The Header"
                           TextAlignment="Center"
                           FontWeight="Bold"
                           Style="{ThemeResource TitleTextBlockStyle}"
                           Foreground="{StaticResource Brush-White}"
                           Margin="0,5" />
                <TextBlock Text="It starts with 100% opacity but will fade to 0% as you scroll up."
                           Style="{ThemeResource SubtitleTextBlockStyle}"
                           Foreground="{StaticResource Brush-White}"
                           VerticalAlignment="Center"
                           TextAlignment="Center" />
            </StackPanel>
        </Grid>
    </ListView.Header>
</ListView>

{% endhighlight %}


[FadeHeader Behavior Sample Page Source](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/FadeHeader)

Please view the [toolkit sample application](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp) for the UWP Community Toolkit for current samples and example code.
 
## Example Image

![FadeHeader Behavior animation]({{site.baseurl}}/resources/images/Animations-FadeHeader.gif "FadeHeader Behavior")

## Requirements (Windows 10 Device Family)

| [Device family](http://go.microsoft.com/fwlink/p/?LinkID=526370) | Universal, 10.0.10586.0 or higher |
| Namespace | Microsoft.Toolkit.Uwp.UI.Animations |

## API

* [FadeHeader source code](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp.UI.Animations/Behaviors/FadeHeaderBehavior.cs)


