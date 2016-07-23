---
permalink: /en-US/services/bing.html
title: Bing
description: This page describes the Bing Service
keywords: windows, app, toolkit, Bing, services, menu
layout: default
search.product: eADQiWindows 10XVcnh
---

# BING SERVICE
The **Bing Service** allows you to retrieve Microsoft Bing web serach engine results. 

## Syntax
```xaml
if (string.IsNullOrEmpty(SearchText.Text))
{
    return;
}

var searchConfig = new BingSearchConfig
{
    Country = BingCountry.UnitedStates,
    Query = SearchText.Text
};

ListView.ItemsSource = await BingService.Instance.RequestAsync(searchConfig, 50);
```

## Example 


## Default Syntax
```xaml
<Page.Resources>
        <DataTemplate x:Key="BingSchemaTemplate" x:DataType="bing:BingResult">
            <Grid Margin="0,5,10,5">
                <Grid.ColumnDefinitions>
                    <ColumnDefinition></ColumnDefinition>
                    <ColumnDefinition Width="Auto"></ColumnDefinition>
                </Grid.ColumnDefinitions>
                <Grid.RowDefinitions>
                    <RowDefinition></RowDefinition>
                    <RowDefinition></RowDefinition>
                    <RowDefinition></RowDefinition>
                </Grid.RowDefinitions>
                <TextBlock Text="{x:Bind Title}" Grid.Row="0" Grid.Column="0" FontWeight="Bold" TextTrimming="CharacterEllipsis"></TextBlock>
                <TextBlock Text="{x:Bind Published}" Grid.Row="0" Grid.Column="1" HorizontalAlignment="Right"></TextBlock>
                <TextBlock Text="{x:Bind Summary}" Grid.Row="1" Grid.Column="0" Grid.ColumnSpan="2" TextWrapping="Wrap"></TextBlock>
                <HyperlinkButton Content="{x:Bind Link}" NavigateUri="{x:Bind Link}" Grid.Row="2" Grid.Column="0" Grid.ColumnSpan="2"></HyperlinkButton>
            </Grid>
        </DataTemplate>
    </Page.Resources>

    <Grid Background="{StaticResource Brush-Grey-05}">
        <Grid.RowDefinitions>
            <RowDefinition Height="Auto"></RowDefinition>
            <RowDefinition></RowDefinition>
        </Grid.RowDefinitions>
       
        <StackPanel Orientation="Vertical" Margin="10">
            <TextBox Header="Request:" x:Name="SearchText" Text="UWP"></TextBox>
            <Button Content="Search" x:Name="SearchButton" Click="SearchButton_OnClick" Margin="0,10,0,0"></Button>
        </StackPanel>
       
        <ListView Grid.Row="1" ItemTemplate="{StaticResource BingSchemaTemplate}" x:Name="ListView">
            <ListView.ItemContainerStyle>
                <Style TargetType="ListViewItem">
                    <Setter Property="HorizontalContentAlignment" Value="Stretch" />
                </Style>
            </ListView.ItemContainerStyle>
        </ListView>
  
 

```

## Platforms 


## API

