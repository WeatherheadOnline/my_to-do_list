# Learning React: To-do list, with multiple themes

## My first to-do list

Made with guidance from this very helpful tutorial: [youtube.com/watch?v=LoYbN6qoQHA](https://www.youtube.com/watch?v=LoYbN6qoQHA).

### I made the app my own by making these changes:
- Initialised the to-do list with pre-load items, including completed and not-yet-completed ones.
- Added logic that (a) shows an error message if the "enter" button is clicked without text in the input field, and (b) removes the error message as soon as text is entered into the input field.
- Added a key counter in state, for adding unique keys to each to-do-list item. The counter increments every time an item is added, to avoid key collisions that could arise if array indices were used as keys.
- Added a class name to the app's outer wrapper, to facillitate adding themes.
- Added a component, as a child of App.js, as a UI for switching themes.
- Implemented logic to switch themes. 
- Moved sections of the CSS into sub-folders along with their matching components.
- Added semantic structure to allow for a greater variety of styling options. 

## It's got themes!

Binary light/dark modes are popular today, commonly handled using boolean states. However, I'm a fan of providing multiple modes (as seen on an [old version](https://www.weatherheadonline.com/v2/) of my portfolio - hint: try switching to dark mode). 

A problem I ran into is that my go-to method of providing multiple themes doesn't work in React: it relies on adding and removing stylesheets from the HTML head, and that's outside the scope of a React app. Instead, I put together a React theme-switcher that used an array of theme objects, combined with an outer wrapper for the App whose class name depended on the current theme state, with custom CSS styles applied under each class name.

In this to do list app, I've re-used the themes UI from the [current version](https://www.weatherheadonline.com/) (2025) of my website.

## Where to find it

The to-do list is live here: [weatherheadonline.com/to-do/](https://weatherheadonline.com/to-do/).
