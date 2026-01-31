 // Simple Form Interception
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Simple validation logic or API call would go here
            console.log("Logging in with:", { email, password });
            alert("Login attempted! Check the console (F12) for data.");
        });