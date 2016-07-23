---
permalink: /en-US/services/facebookservices.html
title: FacebookServices 
description: How to get an AppID from Facebook, using serivce.WindowsStoreID.
keywords: windows, app, toolkit, facebook, service
layout: default
search.product: eADQiWindows 10XVcnh
---

# FACEBOOK SERVICE 
The **Facebook Service** allows you to retrieve or publish data to the Facebook graph. 

## Facebook APP ID 
1. To get a **Facebook.WindowsStoreID**, go to: https://developers.facebook.com/apps. 
2. Select **Create a New App ID**, to start integration Facebook into your app or website. 
3. Click, **Create a New AP**, and select a Platform, or choose Basic Setup. 

For additional information, visit:  https://www.microsoft.com/en-us/store/p/facebook/9wzdncrfj2wl. 


## Syntax
```xaml

```
 
## Example


## Default Template
```xaml
      <DataTemplate x:Key="FacebookSchemaTemplate" x:DataType="facebook:FacebookPost">
            <Grid Margin="0,5,10,5" Height="100">
                <Grid.ColumnDefinitions>
                    <ColumnDefinition Width="100"></ColumnDefinition>
                    <ColumnDefinition></ColumnDefinition>
                </Grid.ColumnDefinitions>
                <Grid.RowDefinitions>
                    <RowDefinition></RowDefinition>
                    <RowDefinition></RowDefinition>
                </Grid.RowDefinitions>
                <Image Source="{Binding Full_Picture}" Grid.RowSpan="2" Grid.Column="0" Stretch="UniformToFill"></Image>
                <TextBlock Text="{x:Bind Message}" Grid.Row="0" Grid.Column="1" Margin="5,0,0,0" VerticalAlignment="Center" FontSize="20" TextWrapping="Wrap" TextTrimming="CharacterEllipsis"></TextBlock>
                <TextBlock Text="{x:Bind Created_Time}" Grid.Row="1" Grid.Column="1" Margin="5,0,0,0" VerticalAlignment="Center" FontSize="16" TextWrapping="Wrap" TextTrimming="CharacterEllipsis" FontWeight="ExtraLight"></TextBlock>
            </Grid>
        </DataTemplate>

    <Background="{StaticResource Brush-Grey-05}">
        <Grid.RowDefinitions>
            <RowDefinition Height="Auto"></RowDefinition>
            <RowDefinition Height="Auto"></RowDefinition>
            <RowDefinition></RowDefinition>
        </Grid.RowDefinitions>
 
            <Grid.ColumnDefinitions>
                <ColumnDefinition></ColumnDefinition>
                <ColumnDefinition Width="Auto"></ColumnDefinition>
            </Grid.ColumnDefinitions>
            <StackPanel Orientation="Vertical" Margin="10">
                <TextBox Header="AppID:" x:Name="AppIDText"></TextBox>
                <StackPanel Orientation="Horizontal">
                    <ComboBox x:Name="QueryType" Header="Type:"></ComboBox>
                    <Button Content="Connect" x:Name="ConnectButton" Click="ConnectButton_OnClick" Margin="10,0,0,0" VerticalAlignment="Bottom"></Button>
                </StackPanel>
            </StackPanel>
            <Image Grid.Column="1" x:Name="ProfileImage" Source="{Binding Url}" VerticalAlignment="Top" Margin="5"></Image>
 
        <Border Margin="10" Grid.Row="1" x:Name="ShareBox" BorderThickness="1" BorderBrush="#555555" Padding="5">
            <StackPanel Orientation="Vertical">
                <TextBox Header="Title:" x:Name="TitleText"></TextBox>
                <TextBox Header="Description:" x:Name="DescriptionText"></TextBox>
                <TextBox Header="Url:" x:Name="UrlText" Text="https://github.com/Microsoft/WindowsAppToolkit"></TextBox>
                <Button Content="Share text" x:Name="ShareButton" Click="ShareButton_OnClick" Margin="0,10,0,0"></Button>
                <Button Content="Share with picture" x:Name="SharePictureButton" Click="SharePictureButton_OnClick" Margin="0,10,0,0"></Button> 
            </StackPanel>
        </Border>
        <ListView Grid.Row="2" ItemTemplate="{StaticResource FacebookSchemaTemplate}" x:Name="ListView">
            <ListView.ItemContainerStyle>
                <Style TargetType="ListViewItem">
                    <Setter Property="HorizontalContentAlignment" Value="Stretch" />
                </Style>
            </ListView.ItemContainerStyle>
        </ListView>
```

## Platforms

## API

neeed to explain how to get appID from facebook (+serivce.WindowsStoreID)
