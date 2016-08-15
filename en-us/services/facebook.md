---
permalink: /en-US/services/facebook.htm
title: Facebook Service
description: Easily add support for Facebook within your Windows 10 UWP Applications
keywords: windows, app, toolkit, facebook, service, UWP, social, share
layout: api
search.product: eADQiWindows 10XVcnh
lang: en-us
---

# Facebook Service 

The **Facebook Service** allows you to retrieve or publish data to the Facebook graph. Examples of the types of objects you can work with are Posts, Tagged Objects, and the primary user feed.

## Getting Windows Store SID

The Windows Store SID is a unique value per application generated, and it not tied to the actual store publication.  Creating a local application will give you a valid SID that you can use for debugging against Facebook.  

{% highlight csharp %}


	// Put the following code in your mainform loaded event
	// Note that this will not work in the App.xaml.cs Loaded
#if DEBUG
	System.Diagnostics.Debug.WriteLine("Windows Store SID = " + Microsoft.Toolkit.Uwp.Services.Facebook.FacebookService.Instance.WindowsStoreId);
#endif


{% endhighlight %}


**NOTE:** You may have to turn on the Output window in Visual Studio to see this debug writeline.

The above code will output something like this: 

{% highlight csharp %}

// EXAMPLE ONLY DO NOT USE THIS!
Windows Store SID = ms-app://s-1-15-2-69261451-1486691014-2395677208-255521631-1892998043-4997490472-675352499/

{% endhighlight %}


When entering the value into the Facebook Developer site you must strip the ms-app:// and the trailing / off the string.

## Creating a new Application on Facebook Developer Site

1. To get a **Facebook.WindowsStoreID**, go to: https://developers.facebook.com/apps. 
2. Select **Create a New App ID**, to start integration Facebook into your app or website. 
3. Click, **Create a New App**
4. From the app Dashboard choose the **Settings** item on the left.  It should select the *Basic* item under it by default.
5. **+Add Platform** choose Windows App.  Leave the *Namespace* and *App Domains* entries blank.
6. Enter the **Windows Store SID** from within your app (see *Getting Windows Store SID* section)
7. From left side menu choose **+Add Product** Click to add *Facebook Login*.  Ensure you set the following options in the UI: 


|Setting|Value|
|----------|:-------------:|------:|
|Client OAuth Login|Yes|
|Web OAuth Login|No|
|Embedded Browser OAuth Login|Yes|
|Force Web OAuth Redirection|No|
|Login from Devices|No|
|Valid OAuth redirect URIs|Blank|


## Syntax

{% highlight csharp %}

// Initialize service
FacebookService.Instance.Initialize(AppIDText.Text);

// Login to Facebook
if (!await FacebookService.Instance.LoginAsync())
{
    return;
}

// Get user's feed
ListView.ItemsSource = await FacebookService.Instance.RequestAsync(FacebookDataConfig.MyFeed, 50);

// Get current user profile picture
ProfileImage.DataContext = await FacebookService.Instance.GetUserPictureInfoAsync();

// Post a message on your wall
await FacebookService.Instance.PostToFeedAsync(TitleText.Text, MessageText.Text, DescriptionText.Text, UrlText.Text);

// Post a message on your wall using Facebook Dialog
await FacebookService.Instance.PostToFeedWithDialogAsync(TitleText.Text, DescriptionText.Text, UrlText.Text);

// Post a message with a picture on your wall
await FacebookService.Instance.PostToFeedAsync(TitleText.Text, MessageText.Text, DescriptionText.Text, picture.Name, stream);

// Post a message with a picture on your wall using Facebook Dialog
await FacebookService.Instance.PostToFeedWithDialogAsync(TitleText.Text, DescriptionText.Text, picture.Name, stream);

{% endhighlight %}
 
## Example

[Facebook Service Sample Page](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.SampleApp/SamplePages/Facebook%20Service)

## Platforms

Windows 10 SDK 10586 or higher

## API

* [Facebook Service source code](https://github.com/Microsoft/UWPCommunityToolkit/tree/master/Microsoft.Toolkit.Uwp.Services/Services/Facebook)
* [Facebook Service API documentation]({{site.baseurl}}/{{page.lang}}/api/Microsoft_Toolkit_Uwp_Services_Facebook_FacebookService.htm)


## NuGet Packages Required

Microsoft.Toolkit.Uwp.Services

See the [NuGet Packages page]({{site.baseurl}}/{{page.lang}}/nugetpackages.htm) for complete list.

