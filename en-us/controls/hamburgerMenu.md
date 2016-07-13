---
permalink: /en-US/controls/hamburgermenu.html
title: Hamburger menu
description: This page describes the hamburger menu control
keywords: windows, app, toolkit, hamburger, menu
layout: default
search.product: eADQiWindows 10XVcnh
---

# HamburgerMenu
The HamburgerMenu provides a simple-to-use sidebar menu that you can show or hide by clicking the Hamburger button.

## Syntax
```xaml
<controls:HamburgerMenu PaneBackground="#242424" x:Name="HamburgerMenu"
                        Foreground="White"
                        ItemClick="HamburgerMenu_OnItemClick"
                        OptionsItemClick="HamburgerMenu_OnOptionsItemClick"
                        OpenPaneLength="{Binding OpenPaneLength.Value}"
                        PanePlacement="{Binding PanePlacement.Value}"
                        DisplayMode="{Binding DisplayMode.Value}"
                        CompactPaneLength="{Binding CompactPaneLength.Value}"
                        HamburgerWidth="{Binding HamburgerWidth.Value}"
                        HamburgerHeight="{Binding HamburgerHeight.Value}"
                        HamburgerFontSize="{Binding HamburgerFontSize.Value}"
                        IsPaneOpen="{Binding IsPaneOpen.Value, Mode=TwoWay}"
                        >
</controls:HamburgerMenu>
```

## Example
![hamburger menu animation](/resources/images/hamburgermenu.gif "Hamburger menu")


## Default template
```xaml
<Page
    x:Class="Microsoft.Windows.Toolkit.SampleApp.SamplePages.HamburgerMenuPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    xmlns:controls="using:Microsoft.Windows.Toolkit.UI.Controls"
    xmlns:data="using:Microsoft.Windows.Toolkit.SampleApp.Data"
    mc:Ignorable="d">
    <Page.Resources>
        <DataTemplate x:Key="ButtonTemplate" x:DataType="data:PhotoDataItem">
            <Grid Width="240" Height="48">
                <Grid.ColumnDefinitions>
                    <ColumnDefinition Width="48"></ColumnDefinition>
                    <ColumnDefinition></ColumnDefinition>
                </Grid.ColumnDefinitions>
                <Image Source="{x:Bind Thumbnail}" Stretch="UniformToFill" Margin="12,12,11,12"></Image>
                <TextBlock Grid.Column="1" Text="{x:Bind Title}" Foreground="White" FontSize="16" VerticalAlignment="Center"></TextBlock>
            </Grid>
        </DataTemplate>

        <DataTemplate x:Key="OptionTemplate">
            <Grid Width="240" Height="48">
                <Grid.ColumnDefinitions>
                    <ColumnDefinition Width="48"></ColumnDefinition>
                    <ColumnDefinition></ColumnDefinition>
                </Grid.ColumnDefinitions>
                <FontIcon Grid.Column="0" Margin="12,12,11,12" FontFamily="Segoe MDL2 Assets" Glyph="{Binding Glyph}" Foreground="White" />
                <TextBlock Grid.Column="1" Text="{Binding Name}" Foreground="White" FontSize="16" VerticalAlignment="Center"></TextBlock>
            </Grid>
        </DataTemplate>
    </Page.Resources>

    <Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}" Margin="50" BorderThickness="1" BorderBrush="Black">
        <controls:HamburgerMenu PaneBackground="Black" x:Name="HamburgerMenu"
                                Foreground="White"
                                ItemTemplate="{StaticResource ButtonTemplate}"
                                OptionsItemTemplate="{StaticResource OptionTemplate}"
                                ItemClick="HamburgerMenu_OnItemClick"
                                OptionsItemClick="HamburgerMenu_OnOptionsItemClick"
								OpenPaneLength="240"
								DisplayMode="CompactInline"
								CompactPaneLength="48"
								HamburgerHeight="48"
								IsPaneOpen="False"
                                >
            <Grid>
                <Grid.RowDefinitions>
                    <RowDefinition Height="48"></RowDefinition>
                    <RowDefinition></RowDefinition>
                </Grid.RowDefinitions>
                <Border Background="Black" Grid.Row="0">
                    <TextBlock x:Name="Header" FontSize="24" HorizontalAlignment="Center" VerticalAlignment="Center"></TextBlock>
                </Border>
                <Image x:Name="Image" Grid.Row="1"></Image>
            </Grid>
        </controls:HamburgerMenu>
    </Grid>
</Page>
```

    


## Platforms

## API
