---
permalink: /en-US/controls/slidablelistitem.html
title: SlidableListItemControl XAML Control
description: The SlidableListItem Control is a UI that triggers actions by sliding content left or right
keywords: windows, app, toolkit, SlidableListItem, custom list item, List View, XAML, UWP, Slideable, List Item Control
layout: default
search.product: eADQiWindows 10XVcnh
---

# SlidableListItemControl XAML Control
The **SlideableListItem Control** is a UI control that enables actions to be triggered by sliding the content left or right. It can be used as a ListView Data Template root to create effects similar to those common in mobile email apps.  

## Syntax
```xaml
<controls:SlidableListItem 
                    HorizontalAlignment="Stretch"
                    LeftIcon="@[LeftIcon:Enum:Symbol.Favorite]" 
                    RightIcon="@[RightIcon:Enum:Symbol.Delete]" 
                    LeftLabel="@[LeftLabel:String:Set Favorite]" 
                    RightLabel="@[RightLabel:String:Delete]"
                    LeftBackground="@[LeftBackground:Brush:Green]" 
                    RightBackground="@[RightBackground:Brush:Red]"
                    LeftForeground="@[LeftForeground:Brush:White]" 
                    RightForeground="@[RightForeground:Brush:Black]"
                    ActivationWidth="@[ActivationWidth:Slider:100:50-250]"
                    MouseSlidingEnabled="@[MouseSlidingEnabled:Bool:true]"
                    LeftCommand="{x:Bind ToggleFavorite}"
                    RightCommandRequested="SlidableListItem_RightCommandActivated">
</controls:SlidableListItem>         
```

## Example


## Default Template
```xaml
<controls:SlidableListItem HorizontalAlignment="Stretch"
                                       LeftIcon="Favorite" 
                                       RightIcon="Delete" 
                                       LeftLabel="Set Favorite" 
                                       RightLabel="Delete"
                                       LeftBackground="Green" 
                                       RightBackground="Red"
                                       LeftForeground="White" 
                                       RightForeground="Black"
                                       ActivationWidth="100"
                                       MouseSlidingEnabled="True"
                                       LeftCommand="{x:Bind ToggleFavorite}"
								RightCommandRequested="SlidableListItem_RightCommandActivated">
                <Height="110" Background="Gray">
                    <StackPanel Grid.Column="1" Margin="10,0,0,0">
                        <CheckBox IsChecked="{x:Bind IsFavorite, Mode=OneWay}"></CheckBox>
                        <TextBlock Text="{x:Bind Title}" Style="{StaticResource CaptionTextBlockStyle}" TextWrapping="NoWrap"/>
                    </StackPanel>
</controls:SlidableListItem>

    <Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
        <ListView x:Name="listViewControl" ItemTemplate="{StaticResource EmailsItemTemplate}" ItemsSource="{x:Bind _items, Mode=OneWay}" SelectionMode="None" IsItemClickEnabled="False">
            <ListView.ItemContainerStyle>
                <Style TargetType="ListViewItem">
                    <Setter Property="HorizontalContentAlignment" Value="Stretch"></Setter>
                    <Setter Property="Margin" Value="0,1"></Setter>
            </ListView.ItemContainerStyle>
```


## Platforms 


## API
