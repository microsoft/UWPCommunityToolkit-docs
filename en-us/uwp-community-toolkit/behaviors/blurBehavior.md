---
permalink: /en-US/behaviors/blurbehavior.html
title: BlurBehavior XAML Behavior for UWP Community Toolkit
description: The BlurBehavior behavior allows for blurring of XAML elements using composition
keywords: windows, app, toolkit, BlurBehavior, XAML behavior, image blur, XAML blur, XAML composition 
layout: default
search.product: eADQiWindows 10XVcnh
---

# BlurBehavior XAML Behavior
The **Blur Behavior** selectively blurs a XAML element by increasing or decreasing pixel size.
Sometimes you want an element to appear slightly out of focus, but to be familiar to the user from other locations within an app.  Rather than having to rasterize the XAML into an image and apply a blur, you can apply a BlurBehavior to the original element at run time. 

## Syntax
```xaml
 <behaviors:Blur x:Name="BlurBehaviorControl"
                            BlurAmount="@[BlurAmount:DoubleSlider:10.0:0.0-10.0]"
                            Duration="@[Duration:DoubleSlider:3.0:0.1-10.0]"
                            Delay="@[Delay:DoubleSlider:0.0:0.0-5.0]"
                            AutomaticallyStart="@[AutomaticallyStart:Bool:True]"/>
```
 
## Example


## Default Template
```xaml
<Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
        <Rectangle x:Name="MyRectangle" Fill="red" Height="100" Width="100" >
          <interactivity:Interaction.Behaviors>
            <behaviors:Blur x:Name="BlurBehavior"
                            BlurAmount="10"
                            Duration="3"
                            Delay="0"
                            AutomaticallyStart="True"/>
          </interactivity:Interaction.Behaviors>
        </Rectangle>
        <StackPanel HorizontalAlignment="Right" VerticalAlignment="Bottom">
            <Button Content="Apply" Margin="10">
                <interactivity:Interaction.Behaviors>
                    <core:EventTriggerBehavior EventName="Click">
                        <core:CallMethodAction TargetObject="{Binding ElementName=Offset}" MethodName="StartAnimation"/>
                    </core:EventTriggerBehavior>
                </interactivity:Interaction.Behaviors>
            </Button>
        </StackPanel>
```
 
```C#
ToolkitLogo.Blur(duration: 10, delay: 0, blurAmount: 10);       
```

## Platforms

## API
