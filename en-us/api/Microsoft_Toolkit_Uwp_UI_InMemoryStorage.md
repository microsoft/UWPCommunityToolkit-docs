---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_UI_InMemoryStorage.htm
title: Microsoft.Toolkit.Uwp.UI.InMemoryStorage API 
description: API page for Microsoft.Toolkit.Uwp.UI.InMemoryStorage
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# InMemoryStorage<T> class

Represents a strongly typed in-memory storage of objects that can be added / removed as required

## Members

The **InMemoryStorage<T>** class has the following types of members:

### Methods

#### ClearAsync()

call this method to clear all items from in-memory storage.


#### ClearAsync(System.TimeSpan duration)

call this method to clear items that are older than duration specified.

##### Parameters
######| Name | Description | Type |

| duration | Use this parameter to define a timespan from now to remove items from in-memory storage. | [TimeSpan](https://msdn.microsoft.com/en-us/library/windows/apps/system.timespan.aspx) |


#### GetItem(System.String id, System.TimeSpan duration)

Gets the item stored in-memory provided it has not expired. Expired item is removed and not returned to caller.

##### Parameters
######| Name | Description | Type |

| id | key identifying the item. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) |

| duration | Duration to check if item has expired or not. | [TimeSpan](https://msdn.microsoft.com/library/windows/apps/System.TimeSpan) |

| return | a strongly typed instance of InMemoryStorageItem<T> |


#### SetItem(InMemoryStorageItem<T> item)

Sets the strongly typed instance of InMemoryStorageItem<T>. After the addition, the collection is checked to ensure that it does not exceed MaxItemCount. Any excess items are removed from the top

##### Parameters
######| Name | Description | Type |

| item | instance of InMemoryStorageItem<T>. |


### Properties

#### MaxItemCount

Gets or sets the maximum permitted items in the in-memory storage.