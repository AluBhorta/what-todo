# What-ToDo

An app that let's you handle multiple (todo) lists.

## to implement - Features

all the lorems.

#### Bugs/Fixes

- non empty list title name
- save todoLists of App onto a file & read from when rendering
- ensure unique list title names (using '(...|...)' regex)
- priority buttons (up & down) for the list items
- list items sorted by priority or chronologically
- auth/login for the app use (google/fb/...)

> Save progress onto a file - onClick of "Save Progress", save the App.state onto a file

- onClick of "Save Progress", perform a http:put request to backend with the data i.e. App.state
- update the file "state.json"
- log to server console on success/error
