---
permalink: /en-US/get-started/get-started.htm
title: Getting Started with the UWP Community Toolkit for Windows 10 Developers
description: Provides an introduction and overview of the UwP Toolkit and its documentation
keywords: windows, app, toolkit, get started, UWP toolkit
layout: default
search.product: eADQiWindows 10XVcnh
---

# Getting Started

If you want to see the controls and animations in an actual app, download the [UWP Toolkit Sample Application](https://www.microsoft.com/store/apps/9nblggh4tlcq) from the Windows store.  

# Developer Requirements

To develop Windows UWP Applications you need the current version of Windows 10, along with Visual Studio 2015 with Update 3 (Any Edition).

Download [Visual Studio 2015 Update 3 with Windows developer tools](https://developer.microsoft.com/en-us/windows/downloads). During install, choose custom option to make sure UWP tools are selected. 

Enable developer mode for your device, [here](https://msdn.microsoft.com/windows/uwp/get-started/enable-your-device-for-development). 

This is an _optional step_ that must be completed before submitting to the Windows App Store.  You do not have to do this in order to build and test locally on your machine. Register as an app developer [Windows Dev Center sign up page](https://msdn.microsoft.com/windows/uwp/get-started/sign-up). 

# For each new Windows Application

Create a new *Blank App (Universal Windows)*. The template is located under the Templates -> Visual C# -> Windows -> Universal path.  If you do not have a Universal path under Windows then you need to install the Universal Windows Platform tools for Visual Studio (re-run setup and check the advanced setup option).

_Either_

Add desired [NuGet Packages](nugetpackages.htm) to your solution.

_Or_

If you would like to work with the source code rather than the NuGet packages, you can clone the GitHub repository for the [UWP Community Toolkit](https://github.com/Microsoft/UWPCommunityToolkit). 

Add the controls to your pages as you would any other control.
