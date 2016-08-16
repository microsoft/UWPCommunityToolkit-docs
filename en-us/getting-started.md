---
permalink: /en-US/getting-started.htm
title: Getting Started
description: Introduction and overview of the UWP Community Toolkit and its documentation
keywords: windows, app, toolkit, get started, UWP Community Toolkit
layout: api
search.product: eADQiWindows 10XVcnh
lang: en-us
---

# Getting Started

## Developer Requirements

To develop Windows UWP Applications you need the current version of Windows 10, along with Visual Studio 2015 with Update 3 (Any Edition).

## Building a new project 

1)	Download [Visual Studio 2015 Update 3 with Windows developer tools](https://developer.microsoft.com/en-us/windows/downloads) and the Windows 10 SDK.  **Important**: Ensure you choose the custom install option and select the *Universal Windows App Development Tools*.  


2)  Enable developer mode for your device, [here](https://msdn.microsoft.com/windows/uwp/get-started/enable-your-device-for-development). 


3)	Create a new project using the Blank App template under Visual C# -> Windows -> Universal.  Target the SDK *Version 10.0; Build 10586* as the minimum version for your application.   


4)	Add the UWP Community Toolkit to your project by choosing each of the desired [NuGet Packages]({{site.baseurl}}/{{page.lang}}/nugetpackages.htm), Visual Studio will show a preview of the changes that will be applied to your project. Search for *Microsoft.Toolkit.UWP*.

![NuGet Packages]({{site.baseurl}}/resources/images/ManageNugetPackages.png "Manage NuGet Packages Image")

5)	Add a reference to the toolkit in your XAML pages or C#


a.	In your XAML page, add a reference at the top of your page

{% highlight csharp %}

    xmlns:controls="using:Microsoft.Toolkit.Uwp.UI.Controls"

{% endhighlight %}

b.	In your C# page, add the namespaces to the toolkit

{% highlight csharp %}

    using Microsoft.Toolkit.Uwp;

{% endhighlight %}


6)	You can copy and paste code snippets for each feature from the [UWP Community Toolkit Sample App](http://aka.ms/uwptoolkitapp), or find more details in the documentation. 


## Adding the UWP Community Toolkit to your Visual Studio Toolbox

You can add the UWP Community Toolkit Controls into the Visual Studio toolbox follow these steps:

1) Add the *Microsoft.Toolkit.Uwp.UI.Controls* NuGet package to your application like above. 

2) Open any xaml page and select the Toolbox on the left side of Visual Studio.

3) Right click in a blank area and select *Add Tab*.  Name the tab *UWP Community Toolkit Controls*.

4) Right click in the tab you just created and select *Choose Items...*.  Then select *Browse* from the *Choose Toolbox Items* dialog and navigate to the folder on your machine:

    c:\Users\%USERNAME%\.nuget\packages\Microsoft.Toolkit.Uwp.UI.Controls\

a.  Choose the folder name matching the version you have installed, then continue to the *lib\uap10.0* folder and select the *Microsoft.Toolkit.Uwp.UI.Controls.dll* file.  You should end up with a dialog similar to the one shown below.

![UI Toolbox Items]({{site.baseurl}}/resources/images/choosetoolboxitems.png "Choose Toolbox Image")

5) Your toolbox should now have a list of UI Controls from the toolkit that you can drag and drop onto your XAML surfaces.

![Completed Toolbox Items]({{site.baseurl}}/resources/images/toolboxfinal.png "Toolbox Final Image")


## Other Resources 

If you want to see the controls and animations in an actual app, download the [UWP Community Toolkit Sample App](http://aka.ms/uwptoolkitapp) from the Windows store.

If you are new to UWP Development we recommend you visit the [Getting Started with UWP Development](https://developer.microsoft.com/en-us/windows/getstarted) pages on the Developer portal. 

## Open Source

Visit the [UWP Community Toolkit Github Repository](http://aka.ms/uwptoolkit) to see the current source code, what is coming next, and to clone the repository.  Community contributions are welcome!

User suggestions are tracked using the Microsoft [User Voice page](https://aka.ms/uwpcommunitytoolkituservoice).  Of course you are also always welcome to contribute to the code directly!

