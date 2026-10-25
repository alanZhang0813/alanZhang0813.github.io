# alanZhang0813.github.io

Personal website

## File explorer

- Different folders with categories
- work experiences
- languages
- In each folder, text files
- One that contains an overall summary
- Individual ones for individual summaries
- Folders/files can be moved around and edited
- Potentially with persistence so same user can move stuff around and it stays there
- Reset button to go back to original
- Ways to change the view (icon size, list vs tiles vs content, sorted by)
- Search bar function (typeahead)
- Navigation
- Breadcrumb with back and forward arrows
- Every click opens a new window and can be closed

## Implementation Detail:

### Either:

- Each folder is its own component with individual files stored as a list inside, and file is its own component with information.
- Home page contains a list of folders, each folder contains a list of files
  - There exists... a map? to keep track of relations
    - could incorporate databases and keys to retrieve the info
  - Shared functionality across files/folders (dragging, renaming, etc)
- No dude, just have a File interface and Folder interface and each new file/folder pulls from that and has shared functionality, and home page has each folder as its own object and folders have files as their own objects.
