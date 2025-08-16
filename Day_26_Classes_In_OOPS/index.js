
    // --- Core Concepts: The User Class ---

    // 1. Define a class using the 'class' keyword.
    class User {
      // 2. The constructor method. It runs automatically when a new object is created.
      //    It's used to initialize the object's properties.
      constructor(name, email) {
        // 3. Properties are created on the 'this' object.
        //    'this' refers to the specific instance of the class being created.
        this.name = name;
        this.email = email;
        this.isLoggedIn = false; // A default property that we can change later.
      }

      // 4. Methods are functions that belong to the class.
      //    They are defined outside the constructor.

      /**
       * A method to log a user in.
       */
      login() {
        this.isLoggedIn = true;
        console.log(`${this.name} has logged in.`);
        this.renderInfo();
      }

      /**
       * A method to log a user out.
       */
      logout() {
        this.isLoggedIn = false;
        console.log(`${this.name} has logged out.`);
        this.renderInfo();
      }

      /**
       * A method to render this specific user's info to the UI.
       */
      renderInfo() {
        const userElement = document.getElementById(`user-${this.name.toLowerCase()}`);
        if (userElement) {
          const statusText = this.isLoggedIn ? 'Logged In' : 'Logged Out';
          const statusColor = this.isLoggedIn ? 'bg-green-500' : 'bg-red-500';
          const buttonText = this.isLoggedIn ? 'Log Out' : 'Log In';
          const buttonColor = this.isLoggedIn ? 'bg-red-500' : 'bg-green-500';

          userElement.innerHTML = `
                        <div class="p-6 rounded-lg border border-gray-200">
                            <h2 class="text-xl font-semibold">${this.name}</h2>
                            <p class="text-gray-500">${this.email}</p>
                            <div class="mt-4 flex items-center gap-2">
                                <span class="w-2.5 h-2.5 rounded-full ${statusColor}"></span>
                                <span class="text-sm font-medium text-gray-700">${statusText}</span>
                            </div>
                            <button class="mt-4 w-full ${buttonColor} hover:opacity-90 text-white font-semibold py-2 rounded-md transition-opacity duration-200" onclick="handleLoginLogout('${this.name}')">${buttonText}</button>
                        </div>
                    `;
        }
      }
    }

    // --- Creating and Using Objects (Instances) of the Class ---

    // Get the container element for user information
    const userInfoContainer = document.getElementById('user-info');

    // Create HTML elements for each user
    const user1Element = document.createElement('div');
    user1Element.id = 'user-alex';
    userInfoContainer.appendChild(user1Element);

    const user2Element = document.createElement('div');
    user2Element.id = 'user-sara';
    userInfoContainer.appendChild(user2Element);

    // 5. Create new, independent objects (instances) from the User class using the 'new' keyword.
    const alex = new User('Alex', 'alex@example.com');
    const sara = new User('Sara', 'sara@example.com');

    console.log('Initial user objects created:');
    console.log(alex);
    console.log(sara);

    // A global function to handle clicks on the buttons
    window.handleLoginLogout = function (userName) {
      if (userName === 'Alex') {
        if (alex.isLoggedIn) {
          alex.logout();
        } else {
          alex.login();
        }
      } else if (userName === 'Sara') {
        if (sara.isLoggedIn) {
          sara.logout();
        } else {
          sara.login();
        }
      }
    };

    // --- Initial Display ---
    // Render the initial state of each user
    alex.renderInfo();
    sara.renderInfo();

    console.log("Check the UI and console. Click the buttons to see the objects' state change.");
  