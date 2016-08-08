
# ImageCache class

Provides methods and tools to cache images in a temporary local folder

## Members

The **ImageCache** class has this types of members

* [methods](#methods)

* [properties](#properties)

### methods

#### ClearAsync(System.Nullable(System.TimeSpan) duration)

call this method to clear the entire cache.

##### parameters



| name | description | type || --- | --- | --- || duration | Use this parameter to define a timespan from now to select cache entries to delete. | [TimeSpan)](https://msdn.microsoft.com/library/windows/apps/System.Nullable(System.TimeSpan)) || return |Task |
#### GetFromCacheAsync(System.Uri uri)

Load a specific image from the cache. If the image is not in the cache, ImageCache will try to download and store it.

##### parameters



| name | description | type || --- | --- | --- || uri | Uri of the image. | [Uri](https://msdn.microsoft.com/library/windows/apps/System.Uri) || return |a BitmapImage |
### properties

#### CacheDuration

Gets or sets the life duration of every cache entry.
