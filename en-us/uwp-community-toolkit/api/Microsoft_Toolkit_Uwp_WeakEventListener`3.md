
# WeakEventListener<T1><T2><T3> class

Implements a weak event listener that allows the owner to be garbage collected if its only remaining link is an event handler.

## Members

The **WeakEventListener<T1><T2><T3>** class has this types of members

* [constructors](#constructors)

* [methods](#methods)

* [properties](#properties)

* [fields](#fields)

### constructors

#### contructor

Initializes a new instance of the [WeakEventListener<T1><T2><T3>](Microsoft_Toolkit_Uwp_WeakEventListener`3.md) class.

##### parameters



| name | description | type || --- | --- | --- || instance | Instance subscribing to the event. | T0 |
### methods

#### OnEvent(T1 source,T2 eventArgs)

Handler for the subscribed event calls OnEventAction to handle it.

##### parameters



| name | description | type || --- | --- | --- || source | Event source. | T1 || eventArgs | Event arguments. | T2 |
#### Detach()

Detaches from the subscribed event.

### properties

#### OnEventAction

Gets or sets the method to call when the event fires.

#### OnDetachAction

Gets or sets the method to call when detaching from the event.

### fields

#### weakInstance

WeakReference to the instance listening for the event.
