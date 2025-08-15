# Day 25: Sending Data with Fetch API

Welcome to Day 25! Yesterday, you learned how to GET data from a server. Today, you'll learn how to perform the other three core operations of web development: POST, PUT, and DELETE. These are the verbs you use to tell a server to create, update, or delete a resource.

**_The HTTP Request Methods 💡_**

- These are the verbs we use to interact with a server's API.

- **GET:** Retrieve data from a server. (You've already done this!)

- **POST:** Create a new resource on the server. For our project, this will be used to add a new task to our list. A POST request typically includes a body with the data you want to send.

- **PUT:** Update an existing resource. This would be used to modify a task, like marking it as complete.

- **DELETE:** Delete a resource. In our project, this will be used to remove a task from the list.

**fetch() with Options**

To send data, we need to pass a second argument to the `fetch() `function: an options object. This object specifies the HTTP method, headers, and the body of the request.

```js
fetch(url, {
  method: "POST", // or 'PUT', 'DELETE'
  headers: {
    "Content-Type": "application/json", // Tells the server we're sending JSON
  },
  body: JSON.stringify({ title: "New Task" }), // The data, converted to a JSON string
});
```

## Key Takeaways: What You've Learned

- CRUD Operations: You've now learned about the four fundamental operations for working with data: Create (POST), Read (GET), Update (PUT), and Delete (DELETE). This is known as CRUD.

- Sending Data: You now know how to send data to a server using the fetch() API's options object, including the method, headers, and body.

- Asynchronous State Management: You've seen how to handle asynchronous data manipulation by showing a loading state and re-rendering the UI once the "API call" is complete. This is the core pattern for all modern web applications.
