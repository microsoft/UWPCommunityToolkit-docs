---
permalink: /en-US/services/facebookservices.html
title: Facebook Service from UWP Community Toolkit
description: Easy add support for Facebook within your UWP Applications
keywords: windows, app, toolkit, facebook, service, UWP
layout: default
search.product: eADQiWindows 10XVcnh
---

# Facebook Service 
The **Facebook Service** allows you to retrieve or publish data to the Facebook graph. Examples of the types of objects you can work with are Posts, Tagged Objects, and the primary user feed.

## Install Windows SDK for Facebook
This project builds on the existing [Windows SDK for Facebook](https://github.com/Microsoft/winsdkfb). 

Install the SDK
1. Go to **Tools** | **Nuget Package Manager** | **Manage Nuget Packages for Solution...** (this opens a new pane in Visual Studio). 
![Manage Nuget Packages](/resources/images/ManageNugetPackages.png)
2. Choose nuget.org as the Package source and enter **winsdkfb** in the search field.
3. Check your projects on the right side and choose **Install**.
![Facebook SDK Install](/resources/images/WinSDKFBInstall.png)

## Getting Windows Store SID
The Windows Store SID is a unique value per application generated, and it not tied to the actual store publication.  Creating a local application will give you a valid SID that you can use for debugging against Facebook.  

```C#

	// Put the following code in your mainform loaded event
	// Note that this will not work in the App.xaml.cs Loaded
#if DEBUG
    System.Diagnostics.Debug.WriteLine("Windows Store SID = " +
	Microsoft.Windows.Toolkit.Services.Facebook.FacebookService.Instance.WindowsStoreId);
#endif

```

**NOTE:** You may have to turn on the Output window in Visual Studio to see this debug writeline.

The above code will output something like this: 

```text
// EXAMPLE ONLY DO NOT USE THIS!
Windows Store SID = ms-app://s-1-15-2-69261451-1486691014-2395677208-255521631-1892998043-4997490472-675352499/
```

When entering the value into the Facebook Developer site you must strip the ms-app:// and the trailing / off the string.

## Creating a new Application on Facebook Developer Site
1. To get a **Facebook.WindowsStoreID**, go to: https://developers.facebook.com/apps. 
2. Select **Create a New App ID**, to start integration Facebook into your app or website. 
3. Click, **Create a New App**
4. From the app Dashboard choose the **Settings** item on the left.  It should select the *Basic* item under it by default.
5. **+Add Platform** choose Windows App
6. Enter the **Windows Store SID** from within your app (see *Getting Windows Store SID* section above)

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

**NOTE:** Ensure you have a reference to the *Microsoft.Windows.Toolkit.Services* assembly.

**TODO:** Need to explain how to get appID from facebook (+serivce.WindowsStoreID)

Please refer to the [Facebook Service source code](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Windows.Toolkit.Services/Services/Facebook) for details about the implementation.