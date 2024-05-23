# Capsule Hotel

_NOTE: This plan is a starting point, not a complete plan_

## High Level Requirements

The application user is the hotel administrator.

- [ ] On start up, the application prompts the administrator for the hotel's capacity. The capacity determines how many capsules are available.
- [ ] The administrator may book a guest in an unoccupied numbered capsule.
- [ ] The administrator may check out a guest from an occupied capsule.
- [ ] The administrator may view guests and their capsule numbers in groups of 10.

## Technical Requirements

- [ ] When the program starts up, capsules and guests will be represented by an `array` of the appropriate size.
- [ ] Unoccupied capsules are represented by a null array value.
- [ ] Occupied capsules are represented by the occupant's name as a String.
- [ ] At least one method beyond main is required. A few more methods may make your life easier.

## Tasks

- [ ] Application start-up (1-2 hours)
- [ ] Display a menu (2-3 hours)
- [ ] Check in a guest (3-4 hours)
- [ ] View guests (4-5 hours)
- [ ] Check out a guest (1-2 hours)

- Create a task list with estimates
  - Review your planning and identify distinct units of work
  - What order do the tasks need to be completed in?
  - Are there dependencies between tasks? Document them.
  - What tasks need to be completed to create an MVP (minimal viable product)?
  - Estimate each task
  - Document how long each task actually takes

## Plan

### Application start-up

- Display a welcome message
- Prompt the administrator for the hotel's capacity

  - How am I going to get the input from the user?

- Display a confirmation message back to the user indicating how many rooms were created
- Declare and initialize an `array`

### Display a menu

_TODO_ Think about displaying a menu... how will you do that?

### Check in a guest

- Flow...
  - Prompt the user for the guest's name
  - Prompt the user for the capsule number
  - Given the provided capsule number, check to see if the room is already occupied
  - If the room is occupied...
    - Display an error message to let the user know that the room is occupied
    - Re-prompt the user for the room number (how will I keep prompting the user until they give me a valid room number?)
  - If the room is unoccupied...
    - ...
  - Re-display the main menu

_TODO_ Is there anything that I need to review or research?

_TODO_ How will I test this feature?

### Check out a guest

_TODO_

### View guests

_TODO_

### Quit the application

_TODO_

Hints...

- What are the steps?
- What is the step sequence?
- Which decisions need to be made?
- What repeats (loops)?
- What data is needed?
- Which data types are appropriate?
- Does creating a method simplify the problem?

Things to consider...

- Brainstorm a list of questions (from the provided requirements) for each part of the project
- Review the provided requirements
- Review the provided sample UI
- Describe the flow through the UI
- Document any "known unknowns" and describe the steps that you'll take to turn these "unknowns" into "knowns"
