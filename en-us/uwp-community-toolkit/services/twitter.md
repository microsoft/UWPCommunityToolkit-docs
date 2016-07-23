---
permalink: /en-US/services/twitter.html
title: Twitter
description: This page describes the Twitter Service
keywords: windows, app, toolkit, Twitter, Service, menu
layout: default
search.product: eADQiWindows 10XVcnh
---
# Twitter Service
The **Twitter Service** allows users to retrieve or publish data to Twitter. 

## Twitter IDs
The following sites provide detailed development tools and downloads for Windows developers using Twitter: 

1. https://devs.twitter.com: The Twitter develepment site.
2. https://www.microsoft.com/en-us/store/p/twitter/9wzdncrfj140: Windows store site users can download the Twitter App and more. 
3. https://about.twitter.com/products/twitter-for-windows: The Twitter experience, handcrafted for Windows. Give Twitter a quick browse right from the Twitter Live Tile. 


## Syntax
```xaml


```

## Example

## Default Template
```xaml
<Page.Resources>
        <DataTemplate x:Key="TwitterSchemaTemplate" x:DataType="twitter:Tweet">
            <Grid Margin="0,5,10,5" Height="100">
                <Grid.ColumnDefinitions>
                    <ColumnDefinition Width="100"></ColumnDefinition>
                    <ColumnDefinition></ColumnDefinition>
                </Grid.ColumnDefinitions>
                
                <Grid.RowDefinitions>
                    <RowDefinition></RowDefinition>
                    <RowDefinition></RowDefinition>
                </Grid.RowDefinitions>
                
                <Image Grid.RowSpan="2" Grid.Column="0" Source="{Binding User.ProfileImageUrl}" Stretch="UniformToFill"/>
                <TextBlock Text="{x:Bind Text}" Grid.Row="0" Grid.Column="1" Margin="5,0,0,0" VerticalAlignment="Center" FontSize="20" TextWrapping="Wrap" TextTrimming="CharacterEllipsis"></TextBlock>
                <TextBlock Text="{x:Bind CreationDate}" Grid.Row="1" Grid.Column="1" Margin="5,0,0,0" VerticalAlignment="Center" FontSize="16" TextWrapping="Wrap" TextTrimming="CharacterEllipsis" FontWeight="ExtraLight"></TextBlock>
        </DataTemplate>
    </Page.Resources>

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
                <TextBox Header="Consumer Key:" x:Name="ConsumerKey"></TextBox>
                <TextBox Header="Consumer Secret:" x:Name="ConsumerSecret"></TextBox>
                <TextBox Header="Callback URI:" x:Name="CallbackUri"></TextBox>
                <Button Content="Connect" x:Name="ConnectButton" Click="ConnectButton_OnClick" Margin="0,10,0,0" VerticalAlignment="Bottom"></Button>
            </StackPanel>
            
            <Image Grid.Column="1" x:Name="ProfileImage" Source="{Binding ProfileImageUrl}" VerticalAlignment="Top" Margin="5">
            </Image>
      
        <Border Margin="10" Grid.Row="1" x:Name="ShareBox" BorderThickness="1" BorderBrush="#555555" Padding="5">
            <StackPanel Orientation="Vertical">
                <TextBox Header="Tweet:" x:Name="TweetText"></TextBox>
                <Button Content="Share" x:Name="ShareButton" Click="ShareButton_OnClick" Margin="0,10,0,0"></Button>
                <Button Content="Share with picture" x:Name="SharePictureButton" Click="SharePictureButton_OnClick" Margin="0,10,0,0"></Button>
                <TextBox Header="Search tag:" x:Name="TagText"></TextBox>
                <Button Content="Search" x:Name="SearchButton" Click="SearchButton_OnClick" Margin="0,10,0,0"></Button>
            </StackPanel>
        </Border>
        
        <ListView Grid.Row="2" ItemTemplate="{StaticResource TwitterSchemaTemplate}" x:Name="ListView">
            <ListView.ItemContainerStyle>
                <Style TargetType="ListViewItem">
                    <Setter Property="HorizontalContentAlignment" Value="Stretch" />
                </Style>
            </ListView.ItemContainerStyle>
        </ListView>
```

## Platforms

## API


//need to explain how to get IDs from twitter
