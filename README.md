# Lists and Keys Workshop

Your objective is to use the power of array methods and lists and keys in React to map over a list of blog post data and render a `Post` component for each of the posts.

You can use the [docs here](https://react.dev/learn/rendering-lists) if you'd like to go over this concept again!

## Task 0

Go to [./src/components](./src/components) and read each component's code to understand what the app is doing.

View the `samplePosts` in [./src/libs/data.js](./src/libs/data.js) to familiarize yourself with the data's structure. Notice where it's imported in the `Main` component and used in the `posts` state.

Only proceed to the rest of the tasks when you feel confident that you understand how the existing code functions. We'd recommend creating a component tree diagram using the [draw.io extension](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio) to map out the components, states, and props already in the app.

## Task 1

In the `<Main/>` component (src/components/Main), use the `.map()` method to loop over the the 'posts' state. For each post in the array, return a `<Post/>` component.

If you need a refresher on how the map method, Google "Javascript array map" or similar and review the examples in the docs.

💡 The `<Post/>` component initially renders the word 'test' - at this point, run your app and make sure you see the word 'test' multiple times on your page to check that your map is working correctly!

## Task 2

Head over to src/libs/data, and look again at the keys in each sample post object. Make a plan of how you can use some or all this data in your `<Post/>` component.

Keep it simple at first - start out with a few bits of information, like the title, author, and text. Then, you can iterate to add additional elements (like image, date, highlights, etc.).

Once you know what data you're using, in the `<Post/>` component, set up the component to receive the props for those pieces of information - be conscious of the syntax here, and look at the docs if you are unsure: https://react.dev/learn/passing-props-to-a-component.

Then use the props to write the JSX of the `<Post/>` component with semantic HTML elements so that it will correctly display the information passed in props (for example, an `h2` that will contain the `title` prop).

💡 Hint: Hard-code the text content of your JSX elements first so you can check that they render correctly on the page before you move on to making them dynamic!

## Task 3

Now, it's time to make your posts dynamic! Using the props you set up in the previous task to guide you, return to your map function, and hand in the correctly named props to the `<Post/>` component returned in the callback function.

You should see three posts for the price of one! Your `.map()` method and `<Post/>` component are working together to generate a post for each item in the `posts` state.

💡 Hint: You should be taking an object into the callback function of `.map()` for each post in the posts array... From there, you can use your normal JavaScript object skills to access the properties!

## Task 4

Add a new post to the `samplePosts` array in src/libs/data. It should seamlessly appear on the page underneath the original posts.

## Bonus tasks

- The `image` property of the post object is itself an object - use this knowledge to populate an `img` tag in your `<Post/>` with both a `src` and `alt` attribute.
- Use another `.map()`, this time in the `<Post/>` component, to map through each post's `highlights` array to generate an `<li>` element for each item in the array.
- Edit the components (Footer, Header, Main, Post) and their respective css files to make this pigeon blog the best on the web!
