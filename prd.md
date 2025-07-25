# Café Randomizer Web App – Product Requirements Document

## Background & Problem Statement

Remote workers often seek out coffee shops and cafés as alternative workspaces to stay productive outside of the home or office. With many options available, deciding where to work can become a daily hassle. The user (a remote worker in this case) wants a fun and efficient way to pick a café at random from a list of preferred work-friendly locations. This avoids decision fatigue and adds a bit of spontaneity to the work routine. Key factors for a work-friendly café include reliable Wi-Fi and accessible power outlets, so the user keeps track of these details for each location in their list.

**Problem:** "I don't know where to go work today, and I'd like an easy way to randomly select one of my favorite cafés." The user needs a simple web-based solution to shuffle through a personal list of cafés and quickly suggest one, with the ability to influence the results based on personal preferences (e.g., favoriting or excluding certain cafés).

## Goals & Objectives

- **Quick Decision Making:** Eliminate the time spent deliberating which café to work from by providing a single-click random suggestion from the list of cafes.
- **Personalized Selection:** Allow the user to influence the randomness – for example, favorited cafes should appear more often, and disliked or "not today" cafes can be temporarily excluded.
- **Easy Management:** Provide simple controls to manage the café list – including adding new cafés, marking favorites, and toggling inclusion/exclusion – without complex steps.
- **Good UX/UI:** Ensure the application is easy to use and visually appealing, with a clean interface accessible on desktop and mobile browsers (responsive design).
- **Zero Cost Solution:** The app should be free to use and maintain, relying on no paid APIs or services. This is an internal/personal tool, so cost should be zero or minimal (using free map links, open-source libraries, etc.).

## User Stories

1. **Random Pick:** "As a remote worker with many café options, I want the app to randomly pick a café for me so that I can quickly decide where to work without stressing over the choices."

2. **Favorites Weighting:** "As a user, I want to mark certain cafés as favorites so that my preferred spots have a higher chance of being selected when I randomize."

3. **Temporary Exclusion:** "As a user, I want to temporarily remove (or hide) some cafés from the random draw so I won't be suggested places I'm not in the mood for today, while still keeping them in the list for future consideration."

4. **Adding New Cafés:** "As a user, I want to add new café entries to my list easily (via a simple form or settings page) so that the list stays up-to-date with new places I discover."

*(Since this app is only for the owner's personal use, there are no multi-user or admin-specific stories needed beyond the owner's perspective.)*

## Functional Requirements & Features

The web application will include the following core features and functionalities:

### Random Café Selection ("Shuffle")
A prominent "Shuffle" button that triggers the app to randomly select one café from the active list and display it as a suggestion. The result should show the café's name and key details (location link, Wi-Fi/plug info, rating). This helps the user quickly get a recommendation where to go.

### Favorites with Weighted Randomization
The user can mark any café as a favorite (for example, by clicking a star icon ☆). Favorited cafés will have a higher probability of being chosen when shuffling. (Implementation detail: favorites could be weighted, e.g. a favorite counts as 2 entries in the random draw vs. 1 for a normal entry, to tilt the randomness in their favor.) Toggling a café's favorite status updates its weight in the random selection pool.

### Exclude/Include Cafés (Temporary Removal)
The user can temporarily remove (exclude) a café from the random selection pool. For example, an "eye" or "hide" toggle can indicate if a location is in the active rotation. Excluded cafes are not deleted – they remain in the master list but won't be considered by the shuffle function until re-included. The user can re-enable an excluded café at any time. This feature ensures the user can avoid certain places for now (e.g. if they went there yesterday or it's too crowded today) without losing them permanently.

### View Café List with Details
The app will provide a view of all cafés in the list, displaying each entry's key details and allowing management actions. For each café entry in the list, the following should be shown:

- Name of the café (possibly with a small thumbnail or icon, optional).
- Location with a link to Google Maps (so the user can get directions or view the place).
- Indicators for "Free Wi-Fi?" and "Power Outlets available?" (e.g. icons or text yes/no).
- Overall rating (1–5) given by the user for work-friendliness.
- Controls to mark/unmark as Favorite.
- Controls to Include/Exclude from random selection.

This list can be the main interface or a section the user can expand, ensuring at-a-glance information on all saved locations.

### Add New Café
There will be a simple way to add a new café entry to the list. This could be via a "Add Café" button or within a settings/manage page. The input form for a new café will allow the user to enter the Name, Location (address or Google Maps URL), whether it has free Wi-Fi, whether it has plugs, and an initial rating. Upon submission, the new café is saved to the database (or data store) and immediately becomes available in the random selection pool. The design of this feature should prioritize simplicity since it's for internal use (e.g., a basic form with a submit, without any unnecessary fields).

### Data Persistence
All café entries and the user's preferences (favorites, exclusions) should be stored persistently so that the information is available across sessions and devices. This could be achieved via a small database or even a local storage mechanism. For example, the backend might use a simple database or a JSON file to store the list of cafes. The key requirement is that when the user opens the app on another day (or on another device), they see the same list with their favorites and exclusions as they left it. No login is required (since it's just for one user), so if using multiple devices, a cloud-sync or hosting the data on a personal server might be considered.

### Result Display & Details
When a café is randomly selected (after hitting "Shuffle"), the app should clearly display the chosen café's details in a spotlight result area. This could include:

- The café name as the headline.
- Perhaps the address or a direct "Open in Google Maps" link (using the stored Google Maps URL).
- Quick info icons/text for Wi-Fi and Plug availability (so the user knows if they can rely on internet and power there).
- The user's rating (for reference, e.g. ★★★★☆).
- Optionally, a refresh/re-roll button if they want a different suggestion.

This result area should have a clean design, possibly with a small image or icon representing the café type, and should be prominently visible after shuffling.

*(No multi-user login, sharing, or social features are needed in this version, as the app is intended for a single user's personal use.)*

## Data Requirements

Each café entry will contain a set of attributes to describe the location and its work-friendly features. The following data fields will be stored for each café in the list:

| Field | Description |
|-------|-------------|
| **Name** | The café's name (e.g., "Starbucks – Central Plaza"). |
| **Location** | A Google Maps link or address for the café's location (for easy navigation). |
| **Free Wi-Fi** | Yes/No – indicates if the café provides free Wi-Fi to customers. Reliable internet is essential for remote work, so this is a key detail. |
| **Power Outlets** | Yes/No – indicates if there are accessible electrical outlets for customers. Access to power is crucial for long work sessions. |
| **Overall Rating** | A personal rating (1–5 stars or numeric) representing the user's overall impression of the café's suitability for work (e.g., considering factors like ambiance, noise, service, etc.). |

**Additional metadata managed by the app** (not directly entered by user in the form, but toggled via UI):
- **Favorite Flag:** (Boolean) Indicates if this café is marked as favorite by the user. This affects random selection weight.
- **Active/Excluded Flag:** (Boolean) Indicates if this café is currently included in the random selection pool or temporarily excluded. This toggles when the user hides/unhides a café from the list.

The data should be stored in a lightweight structure. For internal use, this could be a simple table in a database, or even a JSON file or localStorage entry if using a static app approach. Since the scale is small (one user's list, perhaps tens of cafes), performance and size are not issues. Data integrity (not losing entries) is important, so the app should handle saving updates (new entries or toggles) reliably to the storage.

## User Interface & Experience (UX/UI)

### Simplicity
The interface should be clean and straightforward. Upon opening the web app, the primary action (Shuffle) should be immediately apparent. The design should minimize clutter – focusing on the core function of picking a café – aligning with the goal of quick decision making.

### Layout
Consider a single-page application design. For example, the top area could be the "Random Café Picker" section with the Shuffle button and the result display. Below or in a menu, the user can access "Manage Cafés" where the list of all cafés with their details and toggles is available. This separation ensures the main action (random pick) is front and center, while management controls are accessible but not distracting.

### Responsive Design
The UI must be mobile-friendly. The user might open this app on their phone while on the go, so the layout should adjust to smaller screens (use a responsive design or mobile-first approach). On mobile, the Shuffle button should be easily tappable, and the list should scroll nicely with touch. On desktop, the layout can use more space to show the list and result side by side or in a comfortable way.

### Visual Design
Use clear visual indicators:

- Favorite cafés can be marked with a star icon (★). Tapping it toggles the status (filled star for favorite, outline for not favorite).
- Exclusion can be shown with an eye/icon with a slash or a checkbox – for instance, a checkbox to include/exclude or a hide/show icon. If a café is excluded, it might appear grayed out or with an icon to denote it's inactive.
- Wi-Fi and Power Outlet info can be shown with small icons (e.g., a Wi-Fi symbol 🕸 and a plug socket symbol 🔌) along with a check or cross, or simply text "Free WiFi: Yes/No".
- The overall rating can be depicted with star symbols (★☆☆☆☆) or a numeric value accompanied by stars.

### Feedback and Transitions
When the user hits Shuffle, provide a bit of fun or feedback – maybe a quick animation (like a spinning wheel or shuffle animation) before showing the result, to make the experience engaging. Once a café is selected, display it prominently. If the user doesn't like the suggestion, they should understand they can shuffle again or possibly go to the list to manually pick another if desired.

### Good UX Practices
Keep interactions intuitive:

- Use buttons and toggles that are standard (e.g., a star icon is commonly understood as favorite; a crossed eye or a strike-through list icon could mean hide).
- Provide tooltips or labels on icons if needed (especially if just using symbols) to avoid confusion.
- Ensure the color scheme and text are easy on the eyes for reading (since the user might use this in the morning or evening in different lighting).
- Since it's for personal use, the tone can be informal/fun (for example, when a random pick is made, the app could say "How about trying: Café XYZ today?" for a friendly touch).

Overall, the UX goal is that the user can, within seconds, get a suggestion and take action (open maps to head there), and also have full control over the pool of options in a straightforward way.

## Technical Constraints & Considerations

### Platform
This will be a web application (accessible via browser). It does not need native mobile app versions, which keeps development simpler. Ensuring it works on common browsers (Chrome, Safari, Firefox, etc.) is sufficient.

### Performance
The app's scale is very small (single user, small dataset), so performance is not a major concern. Even so, the app should feel snappy – the random selection should happen instantly. Using simple technologies (plain JavaScript/HTML/CSS or a lightweight framework) is acceptable.

### Data Storage
Since the requirement is for a free solution, using a free tier database or a static file is preferable. Possible approaches:

- A small JSON file or localStorage for storing data if the app is run as a static site (this would tie data to one device unless manually synced).
- A lightweight backend with a database (e.g., SQLite, or a free cloud database) if access from multiple devices is needed. This could be hosted on a free service or the user's own server/Raspberry Pi, etc. The simplest for internal use might be a local setup or something like Google Sheets as a backend (with appropriate API calls), but that might be overkill. In any case, the solution should not incur costs.

### No Paid APIs
The app should avoid any API that costs money. For maps, using a Google Maps link (just a URL) to open the location is free. We won't use something like the Google Places API (which could require billing) unless absolutely necessary. If map embedding is desired, consider an open alternative or a simple embed that doesn't require an API key for low usage.

### No User Authentication
Since the app is "just for me," there is no need for login or user accounts. This simplifies development and UX. If the app is hosted online and the user wants to keep it private, a simple password protection (htaccess or basic auth) could be used, but that's outside the scope of core requirements.

### Scalability
Not a concern here – the app is not intended for public use or many users. We explicitly scope it to personal use.

### Maintainability
The solution should be easy to maintain for the user. For instance, adding a new café should not require technical steps like editing code. That's why a simple UI for adding is preferred. Also, the user should be able to export or backup the list easily (maybe provide a way to download the list as a CSV or JSON for safekeeping, though this is a nice-to-have).

### Reliability
Ensure that the random selection truly picks from the intended pool. If using a pseudo-random generator in code, that's fine. Just make sure that if favorites are weighted, the logic is correct and doesn't exclude others unintentionally. Given the simplicity, rigorous testing isn't critical, but the user should trust that every shuffle is fair (with their weighting considerations).

### Responsive Frameworks (optional)
To speed up development of a good UI, the use of CSS frameworks (like Bootstrap or Tailwind) is acceptable as long as they are free. This can help quickly achieve a responsive and clean layout without a paid design kit.

## Scope and Limitations

### In Scope
The initial version of this product covers the personal use-case of one user's café list. All the features described (random suggestion, favorites weighting, hide/show, add new) are within scope and will be implemented. The focus is on core functionality and usability for the single user scenario.

### Out of Scope
- **Multi-user features or accounts** – there will be no support for multiple users, sharing lists, or collaborative features. The app will not have social or community aspects (unlike some public platforms for finding work-friendly cafes).
- **Advanced filtering or search** – beyond the basic inclusion/exclusion and favorites, the app won't provide complex filtering (like filtering by Wi-Fi quality or location proximity). The assumption is the user's list is relatively small and already vetted.
- **Monetization or payments** – no payment processing or premium features, since the requirement is explicitly for a free tool.
- **Native apps** – no native iOS/Android app development. The web app should suffice, especially with responsive design.
- **Detailed analytics** – tracking how often each café is picked or other analytical features are not in scope. (The user could manually observe usage, but no need for built-in analytics.)
- **Permanent deletion of cafés via UI** – the user did not request a delete feature (since they prefer to keep all entries). We assume for now that cafés can be excluded but not fully deleted through the UI. (If truly needed, one could be removed via editing the database manually or this can be a future enhancement.)

## Future Considerations

*(These are not required for the first version, but could be ideas for the future if the user decides to extend the app):*

- **Editing Entries:** Ability to edit details of an existing café (e.g., update the rating or notes, or correct the name/address) via the UI.
- **Notes/Comments:** A field for personal notes about each café (e.g., "best flat white coffee" or "second floor has quieter seating").
- **Tagging or Filtering:** Maybe allow tagging cafés (like "quiet", "open late") and a way to filter or bias random selection based on mood (e.g., prefer quiet places today).
- **Integration with Maps API:** Possibly auto-fetch details like address or ratings via an API when adding a new café (though this might introduce complexity and costs, so only if needed).
- **History/Logs:** Keep a history of which cafés were chosen recently to avoid repeats (e.g., "You went to Café X yesterday, maybe pick another?" prompt) or just for personal record.
- **Multiple Lists:** If the user ever wants to maintain different lists (for different cities or types of places), the app could support switching between datasets.

These are nice-to-have ideas and are not part of the current requirements, but the architecture can be kept flexible enough to add some of them later if desired.

## Conclusion

This PRD outlines a personal web application to help a remote worker decide on a café to work from by randomizing among a curated list of favorite locations. The emphasis is on simplicity, usability, and zero cost. By implementing the features above, the user will be able to quickly get a suggestion for a work-friendly café – complete with essential info like Wi-Fi and power availability – and have control over their list through favorites and exclusions. The end result will be a handy tool that makes the daily choice of remote work location both fun and efficient, perfectly tailored to the user's own preferences and needs.

With a strong focus on good UX (mobile-responsive, intuitive controls) and the given functional requirements, the Café Randomizer Web App will save time and add a bit of delight to the user's routine of choosing where to work each day. Enjoy your coffee and productive work sessions! ☕

---

## Sources

1. **Remote Work Café** – digital nomad guide for work-friendly coffee shops (context on remote workers seeking cafés worldwide)  
   [https://remotework.cafe/](https://remotework.cafe/)

2. **Adobe Acrobat Blog** – "What makes a good spot for coffee shop remote work?" (importance of Wi-Fi and power outlets)  
   [https://www.adobe.com/acrobat/hub/work-remotely-from-coffee-shop-or-cafe.html](https://www.adobe.com/acrobat/hub/work-remotely-from-coffee-shop-or-cafe.html)