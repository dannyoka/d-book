About my project:

I used a pretty straight forward solution. The first step was create my components. I prefer functional components with hooks over class-based these days.

The app passes down the data to the list as a prop, the input passes back the search term, which the app passes back down to the list as a prop. The list first determines if there is a search term, or if it's blank. If there's no search term, then the list simply returns the whole dataset, otherwise it runs the props.data through a filter function which checks if Search Term === props.data.item.name and returns those that are true. After that, I added the .toLowerCase() to our Search Term === props.data.item.name just to make it string insensitive.

Having finished that, I began on pagination. To accomplish this, I wrote a limitedList function, which would take in the limit as a parameter (the limit has been defined as state and set as the default of 5). The limited list function then creates an empty array, and uses a while loop to push the filtered (or unfiltered) list to the empty array which gets returned and finally displayed to the user.

Then, I have a function called renderButton() which checks if the total number of items in the props.data is greater than the limit, and if so, it renders a button that says Load More, and if clicked, it will use the setLimit() function to change the limit to be equal to the total dataset and thus render all items in our data, rather than just a limited portion. The renderButton() also checks if the limit === numberOfItems, and if it does it displays a "Show Less" button, which if clicked reduces the limit back down to 5.

I believe that most of these components are pretty reusable. If I were to have more time, I might pull the Load More button out of the List component. I would also make my limitedList function take in both limit and list as a parameter to make it more reusable rather than hard code in which list it's using.

Oh! And about halfway through the project, I added in Bootstrap because the default styling was very ugly.
