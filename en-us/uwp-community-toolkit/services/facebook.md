---
permalink: /en-US/services/facebookservices.html
title: Facebook Service from UWP Community Toolkit
description: Easy add support for Facebook within your UWP Applications
keywords: windows, app, toolkit, facebook, service, UWP
layout: default
search.product: eADQiWindows 10XVcnh
---

# FACEBOOK SERVICE 
The **Facebook Service** allows you to retrieve or publish data to the Facebook graph. Examples of the types of objects you can work with are Posts, Tagged Objects, and the primary user feed.

## Facebook APP ID 
1. To get a **Facebook.WindowsStoreID**, go to: https://developers.facebook.com/apps. 
2. Select **Create a New App ID**, to start integration Facebook into your app or website. 
3. Click, **Create a New App**, and select a Platform, or choose Basic Setup. 



## Syntax
```C#
	FacebookService.Instance.Initialize(AppIDText.Text);
	if (!await FacebookService.Instance.LoginAsync())
	{
	    ShareBox.Visibility = Visibility.Collapsed;
	    Shell.Current.DisplayWaitRing = false;
	    var error = new MessageDialog("Unable to log to Facebook");
	    await error.ShowAsync();
	    return;
	}
	
	FacebookDataConfig config;
	switch (QueryType.SelectedIndex)
	{
	    case 1:
	        config = FacebookDataConfig.MyPosts;
	        break;
	    case 2:
	        config = FacebookDataConfig.MyTagged;
	        break;
	    default:
	        config = FacebookDataConfig.MyFeed;
	        break;
	}
	
	ListView.ItemsSource = await FacebookService.Instance.RequestAsync(config, 50);
	
	ShareBox.Visibility = Visibility.Visible;
	
	ProfileImage.DataContext = await FacebookService.Instance.GetUserPictureInfoAsync();
```
 
## Example
<p> **Note:** Refer to the following project for example code that must be used when creating a using this toolkit for Universal Windows application development.<p>

[Facebook Service Sample Page](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Windows.Toolkit.SampleApp/SamplePages/Facebook%20Service)

## Platforms

Windows 10 SDK 10240 or higher

## API

**TODO:** Need to explain how to get appID from facebook (+serivce.WindowsStoreID)

Please refer to the [Facebook Service source code](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Windows.Toolkit.Services/Services/Facebook) for details about the implementation.