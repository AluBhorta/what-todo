# What-ToDo

An app that let's you handle multiple (todo) lists. (+ all the lorems)

## Prospective Features (i.e. to implement)

- add / remove / edit TodoLists and ListItems
- Save Progress to be implemented on add / remove / edit of Lists or Items
  - (advanced) try not updating the whole state on "save progress", instead send a query to append/remove/update a particular list/item
- reject non empty list title name
- convert the listTitles to -> lowercase and dashes (for space) to use as the "/:url"
- remove unnecessary boilerplate: "Title: / List Item / ..."
- ensure unique list title names (using '(...|...)' regex)
- priority buttons (up & down) for the list items
- list items sorted by priority or chronologically (ask user)
- auth/login for the app use (google/fb/...)
- to style:

  - form -> modals
  - "save progress" btn
  - list items
  - header
  - project link through footer
  - smooth transitions from lists to dashboard
  - design a logo for WHAT-TODO?

#### What's Next? - Bugs/Fixes/Features

> Style and complete 'TodoList's

- make 'add item' and 'add list' as MODALS
- add priority btn
- margins on list items
