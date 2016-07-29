
# Microsoft.Toolkit.Uwp.UI.ImageCache class

Provides methods and tools to cache images in a temporary local folder

## Members

The **Microsoft.Toolkit.Uwp.UI.ImageCache** namespace has these types of members

* [methods](#methods)

* [properties](#properties)

### methods

#### Microsoft.Toolkit.Uwp.UI.ImageCache.ClearAsync(System.Nullable{System.TimeSpan})

call this method to clear the entire cache.

##### parameters




| name | description |

| --- | --- |

| duration | Use this parameter to define a timespan from now to select cache entries to delete. |

| return |T |

#### Microsoft.Toolkit.Uwp.UI.ImageCache.GetFromCacheAsync(System.Uri)

Load a specific image from the cache. If the image is not in the cache, ImageCache will try to download and store it.

##### parameters




| name | description |

| --- | --- |

| uri | Uri of the image. |

| return |a |

### properties

#### Microsoft.Toolkit.Uwp.UI.ImageCache.CacheDuration

Gets or sets the life duration of every cache entry.
