---
permalink: /en-US/controls/hamburgermenu.html
title: HamburgerMenucontrol XAML Control for UWP Community Toolkit
description:  The Hamburger Menu control displays a sidebar that is displayed by the Hamburger button       
keywords: windows, app, toolkit, hamburger, menu, hamburgermenu, XAML, control, sidebar
layout: default
search.product: eADQiWindows 10XVcnh
---

# HamburgerMenuControl XAML Control##  ##
The **Hamburger Menu Control** provides an easy-to-use, side-bar menu which users can show or hide by using a Hamburger button.


## Syntax
```xaml
<controls:HamburgerMenu PaneBackground="@[PaneBackground:Brush:Black]" x:Name="HamburgerMenuControl"
                Foreground="White"
                ItemTemplate="{StaticResource ButtonTemplate}"
                OptionsItemTemplate="{StaticResource OptionTemplate}"
                ItemClick="HamburgerMenu_OnItemClick"
                OptionsItemClick="HamburgerMenu_OnOptionsItemClick"
					OpenPaneLength="@[OpenPaneLength:Slider:240:50-400]"
					DisplayMode="@[DisplayMode:Enum:SplitViewDisplayMode.CompactInline]"
					CompactPaneLength="@[CompactPaneLength:Slider:48:10-80]"
					HamburgerHeight="@[HamburgerHeight:Slider:48:10-80]"
					IsPaneOpen="@[IsPaneOpen:Bool:False]"
</controls:HamburgerMenu>
```

## Example Image
![hamburger menu animation](/resources/images/hamburgermenu.gif "Hamburger menu")


## Default template
```xaml
        <DataTemplate x:Key="ButtonTemplate" x:DataType="data:PhotoDataItem">
            <Grid Width="240" Height="48">
                <Grid.ColumnDefinitions>
                    <ColumnDefinition Width="48"></ColumnDefinition>
                    <ColumnDefinition></ColumnDefinition>
                </Grid.ColumnDefinitions>
                <Image Source="{x:Bind Thumbnail}" Stretch="UniformToFill" Margin="12,12,11,12"></Image>
                <TextBlock Grid.Column="1" Text="{x:Bind Title}" Foreground="White" FontSize="16" VerticalAlignment="Center"></TextBlock>
        </DataTemplate>

        <DataTemplate x:Key="OptionTemplate">
            <Width="240" Height="48">
                <Grid.ColumnDefinitions>
                    <ColumnDefinition Width="48"></ColumnDefinition>
                    <ColumnDefinition></ColumnDefinition>
                </Grid.ColumnDefinitions>
                <FontIcon Grid.Column="0" Margin="12,12,11,12" FontFamily="Segoe MDL2 Assets" Glyph="{Binding Glyph}" Foreground="White" />
                <TextBlock Grid.Column="1" Text="{Binding Name}" Foreground="White" FontSize="16" VerticalAlignment="Center"></TextBlock>
        </DataTemplate>

    <Background="{ThemeResource ApplicationPageBackgroundThemeBrush}" Margin="50" BorderThickness="1" BorderBrush="Black">
        <controls:HamburgerMenu PaneBackground="Black" x:Name="HamburgerMenuControl"
                                Foreground="White"
                                ItemTemplate="{StaticResource ButtonTemplate}"
                                OptionsItemTemplate="{StaticResource OptionTemplate}"
                                ItemClick="HamburgerMenu_OnItemClick"
                                OptionsItemClick="HamburgerMenu_OnOptionsItemClick"
								OpenPaneLength="240"
								DisplayMode="CompactInline"
								CompactPaneLength="48"
								HamburgerHeight="48"
								IsPaneOpen="False">
        
                <Grid.RowDefinitions>
                    <RowDefinition Height="48"></RowDefinition>
                    <RowDefinition></RowDefinition>
                </Grid.RowDefinitions>
                <Border Background="Black" Grid.Row="0">
                    <TextBlock x:Name="Header" FontSize="24" HorizontalAlignment="Center" VerticalAlignment="Center"></TextBlock>
                </Border>
                <Image x:Name="Image" Grid.Row="1"></Image>
        </controls:HamburgerMenu>
```

## Platforms

## API
