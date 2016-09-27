---
permalink: /en-US/helpers/backgroundtask.htm
title: Background Task helper utility 
description: Utilities class to help supporting applications with background tasks
keywords: windows, app, toolkit, UWP, helpers, background task, register, unregister, background
layout: api
search.product: eADQiWindows 10XVcnh
lang: en-us
---

# Background Task Helper

The **Background Task Helper** helps users interacting with background tasks in an easier manner. 

## Example

{% highlight csharp %}
	// Be sure to include the using at the top of the file:
	//using Microsoft.Toolkit.Uwp;
    //using Windows.ApplicationModel.Background;

	// Register a normal, seperate process, background task
	BackgroundTaskRegistration registered = BackgroundTaskHelper.Register("TaskName","TaskEntryPoint", new TimeTrigger(15, true));

    // This can also be written using the overload of Register with Type parameter.
    BackgroundTaskRegistration registered = BackgroundTaskHelper.Register(typeof(BackgroundTaskClass), new TimeTrigger(15, true));

    // With condition
    BackgroundTaskRegistration registered = 
        BackgroundTaskHelper.Register(typeof(BackgroundTaskClass), 
                                      new TimeTrigger(15, true), 
                                      false, true, 
                                      new SystemCondition(SystemConditionType.InternetAvailable));

    // 2 or more conditions
    BackgroundTaskRegistration registered = 
        BackgroundTaskHelper.Register(typeof(BackgroundTaskClass), 
                                      new TimeTrigger(15, true), 
                                      false, true, 
                                      new SystemCondition(SystemConditionType.InternetAvailable), 
                                      new SystemCondition(SystemConditionType.UserPresent));

	// Register a single process background task (Anniversary Update and later ONLY)
    BackgroundTaskRegistration registered = BackgroundTaskHelper.Register("TaskName", new TimeTrigger(15, true))

{% endhighlight %}

You can find more examples in our [unit tests](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/UnitTests/Helpers/Test_BackgroundTaskHelper.cs)

## Requirements (Windows 10 Device Family)

| [Device family](http://go.microsoft.com/fwlink/p/?LinkID=526370) | Universal, 10.0.10586.0 or higher |
| Namespace | Microsoft.Toolkit.Uwp |

## API

* [Background Task source code](https://github.com/Microsoft/UWPCommunityToolkit/blob/master/Microsoft.Toolkit.Uwp/Helpers/BackgroundTaskHelper.cs)

