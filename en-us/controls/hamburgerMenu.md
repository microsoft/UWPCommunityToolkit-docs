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
<Grid>
    <SplitView x:Name="MainSplitView" OpenPaneLength="{TemplateBinding OpenPaneLength}" 
        PanePlacement="{TemplateBinding PanePlacement}" DisplayMode="{TemplateBinding DisplayMode}" 
        CompactPaneLength="{TemplateBinding CompactPaneLength}" PaneBackground="{TemplateBinding PaneBackground}" 
        IsPaneOpen="{TemplateBinding IsPaneOpen}">
        <SplitView.Pane>
            <Grid x:Name="PaneGrid">
                <Grid.RowDefinitions>
                    <RowDefinition Height="Auto"></RowDefinition>
                    <RowDefinition></RowDefinition>
                    <RowDefinition Height="Auto"></RowDefinition>
                </Grid.RowDefinitions>
                <Grid Grid.Row="0" Height="{TemplateBinding HamburgerHeight}"></Grid>
                <ListView Grid.Row="1" Name="ButtonsListView" ItemsSource="{TemplateBinding ItemsSource}" 
                ItemTemplate="{TemplateBinding ItemTemplate}" IsItemClickEnabled="True"
                        Width="{TemplateBinding OpenPaneLength}">
                    <ListView.ItemContainerStyle>
                        <Style TargetType="ListViewItem">
                            <Setter Property="Padding" Value="0" />
                        </Style>
                    </ListView.ItemContainerStyle>
                </ListView>

                <Grid Grid.Row="2" Visibility="{TemplateBinding OptionsVisibility}">
                    <Grid.RowDefinitions>
                        <RowDefinition Height="Auto"></RowDefinition>
                        <RowDefinition></RowDefinition>
                    </Grid.RowDefinitions>
                    <Rectangle Height="1" Fill="{TemplateBinding Foreground}" Grid.Row="0"></Rectangle>

                    <ListView Grid.Row="1" Name="OptionsListView" ItemsSource="{TemplateBinding OptionsItemsSource}" 
                    ItemTemplate="{TemplateBinding OptionsItemTemplate}" IsItemClickEnabled="True"
                        Width="{TemplateBinding OpenPaneLength}" VerticalAlignment="Bottom">
                        <ListView.ItemContainerStyle>
                            <Style TargetType="ListViewItem">
                                <Setter Property="Padding" Value="0" />
                            </Style>
                        </ListView.ItemContainerStyle>
                    </ListView>
                </Grid>

            </Grid>
        </SplitView.Pane>
        <ContentPresenter Content="{TemplateBinding Content}" x:Name="ContentPart"></ContentPresenter>
    </SplitView>
    <Button Name="HamburgerButton" Padding="0" 
    Width="{TemplateBinding HamburgerWidth}" Height="{TemplateBinding HamburgerHeight}" 
    BorderThickness="0" VerticalAlignment="Top" Background="Transparent">
        <FontIcon Margin="{TemplateBinding HamburgerMargin}" FontFamily="Segoe MDL2 Assets" Glyph="&#xE700;" 
        Foreground="{TemplateBinding Foreground}" FontSize="{TemplateBinding HamburgerFontSize}"/>
    </Button>
</Grid>
```

## Platforms

## API
