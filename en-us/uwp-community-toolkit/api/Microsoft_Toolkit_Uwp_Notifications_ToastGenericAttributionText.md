
# ToastGenericAttributionText class

Defines an attribution text element to be displayed on the Toast notification.

## Members

The **ToastGenericAttributionText** class has this types of members

* [constructors](#constructors)

* [properties](#properties)

### constructors

#### contructor

Initializes an attribution text element to be displayed on the Toast notification.

### properties

#### Text

The text to display.

#### Language

The target locale of the XML payload, specified as a BCP-47 language tags such as "en-US" or "fr-FR". The locale specified here overrides any other specified locale, such as that in binding or visual. If this value is a literal string, this attribute defaults to the user's UI language. If this value is a string reference, this attribute defaults to the locale chosen by Windows Runtime in resolving the string.
