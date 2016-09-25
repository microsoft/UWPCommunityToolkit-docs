---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_UI_InMemoryStorage.htm
title: Microsoft.Toolkit.Uwp.UI.InMemoryStorage API 
description: API page for Microsoft.Toolkit.Uwp.UI.InMemoryStorage
keywords: windows, app, toolkit, UWP, API
layout: api
search.product: eADQiWindows 10XVcnh
---


# InMemoryStorage<T> class

Represents a strongly typed in-memory storage of objects that can be added or removed from.
The size of the in-memory storage is controlled by setting the ***MaxItemCount*** property.
The in-memory storage follows FIFO (first in first out). 

## Members

The **InMemoryStorage<T>** class has the following types of members:

### Methods

#### ClearAsync()

This method clears all items from in-memory storage.


#### ClearAsync(System.TimeSpan duration)

This method deletes expired items from the in-memory storage.

##### Parameters
######| Name | Description | Type |

| duration | This parameter is used to determine whether the item within the in-memory storage has expired and should be deleted. | [TimeSpan](https://msdn.microsoft.com/en-us/library/windows/apps/system.timespan.aspx) |


#### GetItem(System.String id, System.TimeSpan duration)

Retrieves a strongly typed item from the in-memory if it exists and has not expired. If item exists and has expired, it is removed and not returned to caller.

##### Parameters
######| Name | Description | Type |

| id | key identifying the item. | [String](https://msdn.microsoft.com/library/windows/apps/System.String) |

| duration | This parameter is used to determine whether the item within the in-memory storage has expired and should be deleted. | [TimeSpan](https://msdn.microsoft.com/library/windows/apps/System.TimeSpan) |

| return | Strongly typed instance of InMemoryStorageItem<T> or null |


#### SetItem(InMemoryStorageItem<T> item)

Sets the strongly typed instance of InMemoryStorageItem<T>. Once item is added, the collection is checked to ensure that it does not exceed MaxItemCount. Any excess items are removed from the top

##### Parameters
######| Name | Description | Type |

| item | Instance of InMemoryStorageItem<T>. |


### Properties

#### MaxItemCount

Gets or sets the maximum number of items that can be stored in the in-memory storage.