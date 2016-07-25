---
permalink: /en-US/behaviors/blurbehavior.html
title: BlurBehavior XAML behavior
description: The BlurBehavior behavior is a XAML behavior that blurs an image
keywords: windows, app, toolkit, BlurBehavior, XAML behavior, image blur
layout: default
search.product: eADQiWindows 10XVcnh
---

# BLUR
The **Blur Behavior** selectively blurs an image by increasing or decreasing pixel size.
Sometimes you want an image to appear as slightly out of focus from the same image you have used in other locations within an app.  Rather than having two image assets, you can apply a BlueBehavior to the original image at runtime. 

## Syntax
```xaml
 <behaviors:Blur x:Name="BlurBehavior"
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
 
C#
ToolkitLogo.Blur(duration: 10, delay: 0, blurAmount: 10);       
```

## Platforms

## API
