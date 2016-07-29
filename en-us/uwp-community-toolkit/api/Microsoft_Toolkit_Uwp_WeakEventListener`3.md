
# Microsoft.Toolkit.Uwp.WeakEventListener`3 class

Implements a weak event listener that allows the owner to be garbage            collected if its only remaining link is an event handler.

## Members

The **Microsoft.Toolkit.Uwp.WeakEventListener`3** namespace has these types of members

* [constructors](#constructors)

* [methods](#methods)

* [properties](#properties)

* [fields](#fields)

### constructors

#### Microsoft.Toolkit.Uwp.WeakEventListener`3.#ctor(`0)

Initializes a new instance of the [WeakEventListener`3](T_Microsoft_Toolkit_Uwp_WeakEventListener`3) class.

##### parameters




| name | description |

| --- | --- |

| instance | Instance subscribing to the event. |

### methods

#### Microsoft.Toolkit.Uwp.WeakEventListener`3.OnEvent(`1,`2)

Handler for the subscribed event calls OnEventAction to handle it.

##### parameters




| name | description |

| --- | --- |

| source | Event source. |

| eventArgs | Event arguments. |

#### Microsoft.Toolkit.Uwp.WeakEventListener`3.Detach

Detaches from the subscribed event.

### properties

#### Microsoft.Toolkit.Uwp.WeakEventListener`3.OnEventAction

Gets or sets the method to call when the event fires.

#### Microsoft.Toolkit.Uwp.WeakEventListener`3.OnDetachAction

Gets or sets the method to call when detaching from the event.

### fields

#### Microsoft.Toolkit.Uwp.WeakEventListener`3.weakInstance

WeakReference to the instance listening for the event.
