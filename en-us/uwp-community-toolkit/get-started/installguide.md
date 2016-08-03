---
permalink: /en-US/get-started/installguide.htm
title: Installation Guide
description: The Installation Guide provides the tools and links required to install the UWP Toolkit and develop Windows applications
keywords: windows, app, toolkit, installation guide, menu
layout: default
search.product: eADQiWindows 10XVcnh
---

#Installation Guide

The UWP Community Toolkit does not have a local installer.  If you want to see the controls and animations in action before jumping into the code?  We have published the [UWP Toolkit Sample Application](https://www.microsoft.com/store/apps/9nblggh4tlcq) to the Windows store.  Download the app and play with the controls live to see what they do before ever writing a line of code. 

1. To develop Windows UWP Applications you need the current version of Windows 10
2. Download [Visual Studio 2015 Update 3 with Windows developer tools](https://developer.microsoft.com/en-us/windows/downloads). During install, choose custom option to make sure all UWP tools are selected. 
3. Enable your device for development, [here](https://msdn.microsoft.com/windows/uwp/get-started/enable-your-device-for-development). 
4. This is an _optional step_ that must be completed before submitting to the Windows App Store.  You do not have to do this in order to build and test locally on your machine. Register as an app developer [Windows Dev Center sign up page](https://msdn.microsoft.com/windows/uwp/get-started/sign-up). 
5. Add desired [NuGet Packages](nugetpackages.md) to your solution.
6. If you would like to work with the source code rather than the NuGet packages, you can clone the GitHub repository for the [UWP Community Toolkit](https://github.com/Microsoft/UWPCommunityToolkit). 

#Reference the NuGet packages within your Universal Windows Project
Read the [NuGet Package list](nugetpackages.md) and include the packages you need for the controls you want to use.

