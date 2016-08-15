---
permalink: /en-US/getting-started.htm
title: Getting Started
description: Introduction and overview of the UwP Toolkit and its documentation
keywords: windows, app, toolkit, get started, UWP toolkit
layout: api
search.product: eADQiWindows 10XVcnh
lang: en-us
---

# Getting Started

If you want to see the controls and animations in an actual app, download the [UWP Toolkit Sample Application](https://www.microsoft.com/store/apps/9nblggh4tlcq) from the Windows store.  

## Developer Requirements

To develop Windows UWP Applications you need the current version of Windows 10, along with Visual Studio 2015 with Update 3 (Any Edition).

## Building a new project 

1)	Download [Visual Studio 2015 Update 3 with Windows developer tools](https://developer.microsoft.com/en-us/windows/downloads) and the Windows 10 SDK.  **Important**: Ensure you choose the custom install option and select the *Universal Windows App Development Tools*.  

2)  Enable developer mode for your device, [here](https://msdn.microsoft.com/windows/uwp/get-started/enable-your-device-for-development). 

3)  Register as an app developer [Windows Dev Center sign up page](https://msdn.microsoft.com/windows/uwp/get-started/sign-up).This is an _optional step_ that must be completed before submitting to the Windows App Store.  You do **not** have to do this in order to build and test locally on your machine.

4)	Create a new project using the Blank App template under Visual C# -> Windows -> Universal.  Be sure you target the SDK *Version 10.0; Build 10586* as the minimum version for your application.   

5)	Add the UWP Community Toolkit to your project by choosing each of the desired [NuGet Packages]({{site.baseurl}}/{{page.lang}}/nugetpackages.htm), Visual Studio will show a preview of the changes that will be applied to your project. Search for *Microsoft.Toolkit.UWP*.

![NuGet Packages]({{site.baseurl}}/resources/images/ManageNugetPackages.png "Manage NuGet Packages Image")

6)	Add a reference to the toolkit in your XAML pages or C#

a.	In your XAML page, add a reference at the top of your page

{% highlight csharp %}

    xmlns:controls="using:Microsoft.Windows.Toolkit.UI.Controls"

{% endhighlight %}

b.	In your C# page, add the namespaces to the toolkit

{% highlight csharp %}

    using Microsoft.Windows.Toolkit;

{% endhighlight %}

7)	You can copy and paste code snippets for each feature from the [Sample Application](https://www.microsoft.com/store/apps/9nblggh4tlcq), or find more details in the documentation. 


## Helpful Links 

* [Windows Dev Center](https://developer.microsoft.com/en-us/windows/getstarted): Read expert tutorials for various development levels, locate open-source code to jump-start app building, and discover featured learning resources.
* [Stack Overflow](http://stackoverflow.com/): This is a community driven site, where programmers work together to solve technical problems.
 
## Videos & Templates 

* [Developers Guide to Windows 10](https://channel9.msdn.com/Events/Windows/Developers-Guide-to-Windows-10-RTM): In depth series on features in Windows 10 for developers.
* [Windows 10 development for absolute beginners](https://channel9.msdn.com/Series/Windows-10-development-for-absolute-beginners): Channel 9 series devoted to teaching new developers how to build for Windows 10.
* [Design Guidelines](https://developer.microsoft.com/en-us/windows/design): Get templates and design guidance for making great apps for Windows 10.

## Windows 10 Store App

Want to see the controls and animations in action before jumping into the code?  We have published the [UWP Toolkit Sample Application](https://www.microsoft.com/store/apps/9nblggh4tlcq) to the Windows 10 store.  Download the app and play with the controls live to see what they do before ever writing a line of code.

## GitHub Repository

Visit the [UWP Community Toolkit Github Repository](https://github.com/Microsoft/UWPCommunityToolkit) to see the current source code, what is coming next, and to clone the repository.  Community contributions are welcome!

## Feedback / Suggestions

User suggestions are tracked using the Microsoft [User Voice page](https://aka.ms/uwpcommunitytoolkituservoice).  Of course you are also always welcome to contribute to the code directly!

