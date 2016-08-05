
# ToastActivationType class

Decides the type of activation that will be used when the user interacts with the Toast notification.

## Members

The **ToastActivationType** class has this types of members

* [fields](#fields)

### fields

#### Foreground

Default value. Your foreground app is launched.

#### Background

Your corresponding background task (assuming you set everything up) is triggered, and you can execute code in the background (like sending the user's quick reply message) without interrupting the user.

#### Protocol

Launch a different app using protocol activation.
