---
permalink: /en-US/services/twitter.htm
title: Twitter Service from UWP Community Toolkit
description: Easy add support for Twitter within your UWP Applications
keywords: windows, app, toolkit, Twitter, Service, UWP
layout: default
search.product: eADQiWindows 10XVcnh
---
# Twitter Service
The **Twitter Service** allows users to retrieve or publish data to Twitter. 

[Twitter Developer Site](https://dev.twitter.com) is the main content site for all twitter developers.  Visit the [Twitter Apps List](https://apps.twitter.com/) to manage existing apps.

[Create new Twitter App](https://apps.twitter.com/app/new) can be used to create a new app within the Twitter portal.

## App Setup

**Consumer Key**
Copy this from the *Keys and Access Tokens* tab on your application page. 

**Consumer Secret**
Copy this from the *Keys and Access Tokens* tab on your application page. 

**Callback URI** Enter a unique URI for your application.  This must match the *Callback URL* field on the *Application Details* tab in Twitter.
*Example*: http://myapp.company.com - (this does not have to be a working URL)

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

[Twitter Service Sample Page](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/Twitter%20Service)

## Posting to timeline fails to appear
Twitter app models allows for read only applications.  If the app is tagged as Readonly, but attempts to post there is *no error returned*.  The post is just eaten by the service.

If you are posting from your app and never seeing them show up in the timeline check the *Permissions* tab on the app page.  You want to ensure that you have *Read and Write* checked on that tab.

## Platforms

Windows 10 SDK 10586 or higher

## API

Please refer to the [Twitter Service source code](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.Services/Services/Twitter) for details about the implementation.

## NuGet Packages Required

Microsoft.Toolkit.Uwp.Services

See the [NuGet Packages page](../get-started/nugetpackages.md) for complete list.