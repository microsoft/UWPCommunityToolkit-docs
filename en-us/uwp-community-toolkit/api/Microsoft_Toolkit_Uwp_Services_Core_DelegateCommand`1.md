
# Microsoft.Toolkit.Uwp.Services.Core.DelegateCommand`1 class

Represents a generic command that can perform a given action.

## Members

The **Microsoft.Toolkit.Uwp.Services.Core.DelegateCommand`1** namespace has these types of members

* [constructors](#constructors)

* [methods](#methods)

* [events](#events)

* [fields](#fields)

### constructors

#### Microsoft.Toolkit.Uwp.Services.Core.DelegateCommand`1.#ctor(System.Action{`0},System.Func{`0,System.Boolean})

Initializes a new instance of the [DelegateCommand`1](T_Microsoft_Toolkit_Uwp_Services_Core_DelegateCommand`1) class.

##### parameters




| name | description |

| --- | --- |

| executeAction | The action to execute when called. |

| canExecute | The function to call to determine if the command can execute the action. |

##### exceptions



| type | description |

| --- | --- |

| exception type | |

### methods

#### Microsoft.Toolkit.Uwp.Services.Core.DelegateCommand`1.CanExecute(System.Object)

Defines the method that determines whether the command can execute in its current state.

##### parameters




| name | description |

| --- | --- |

| parameter | The parameter used by the command. |

| return |R |

#### Microsoft.Toolkit.Uwp.Services.Core.DelegateCommand`1.Execute(System.Object)

Defines the method to be called when the command is invoked.

##### parameters




| name | description |

| --- | --- |

| parameter | The parameter used by the command. |

#### Microsoft.Toolkit.Uwp.Services.Core.DelegateCommand`1.RaiseCanExecuteChanged

Fires notification event when the CanExecute property has changed.

#### Microsoft.Toolkit.Uwp.Services.Core.DelegateCommand`1.ConvertParameterValue(System.Object)

Converts a paramter value to given type.

##### parameters




| name | description |

| --- | --- |

| parameter | Value of the command parameter. |

| return |S |

### events

#### Microsoft.Toolkit.Uwp.Services.Core.DelegateCommand`1.CanExecuteChanged

Occurs when changes occur that affect whether or not the command should execute.

### fields

#### Microsoft.Toolkit.Uwp.Services.Core.DelegateCommand`1.commandExecuteAction

Field for commandExecuteAction.

#### Microsoft.Toolkit.Uwp.Services.Core.DelegateCommand`1.commandCanExecute

Field for whether the command can execute.
