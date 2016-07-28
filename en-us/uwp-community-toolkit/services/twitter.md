---
permalink: /en-US/services/twitter.html
title: Twitter Service from UWP Community Toolkit
description: Easy add support for Twitter within your UWP Applications
keywords: windows, app, toolkit, Twitter, Service, UWP
layout: default
search.product: eADQiWindows 10XVcnh
---
# Twitter Service
The **Twitter Service** allows users to retrieve or publish data to Twitter. 

[Twitter Developer Site](https://devs.twitter.com) is the main site for all twitter development.

## Syntax
```C#
	TwitterService.Instance.Initialize(ConsumerKey.Text, ConsumerSecret.Text, CallbackUri.Text);
	TwitterService.Instance.Logout();
	
	if (!await TwitterService.Instance.LoginAsync())
	{
	    ShareBox.Visibility = Visibility.Collapsed;
	    Shell.Current.DisplayWaitRing = false;
	    var error = new MessageDialog("Unable to log to Twitter");
	    await error.ShowAsync();
	    return;
	}
	
	ShareBox.Visibility = Visibility.Visible;
	
	var user = await TwitterService.Instance.GetUserAsync();
	ProfileImage.DataContext = user;
	
	ListView.ItemsSource = await TwitterService.Instance.GetUserTimeLineAsync(user.ScreenName, 50);
```

## Example
<p> **Note:** Refer to the following project for example code that must be used when creating a using this toolkit for Universal Windows application development.<p>

[Twitter Service Sample Page](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Windows.Toolkit.SampleApp/SamplePages/Twitter%20Service)

## Platforms

Windows 10 SDK 10240 or higher

## API

**TODO:** need to explain how to get IDs from twitter

Please refer to the [Twitter Service source code](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Windows.Toolkit.Services/Services/Twitter) for details about the implementation.