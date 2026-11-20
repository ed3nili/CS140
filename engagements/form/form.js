        document.getElementById('myForm').addEventListener('submit',function(event) {
            event.preventDefault();

        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const age = document.getElementById('bdate').value;
        const state = document.getElementById('state').value;
        const remember = document.querySelector('[name="remember"]').checked;
        const gender = document.querySelector('[name="gender"]:checked')?.value;
        const comments = document.getElementById('comments').value;

        if (!fullname || !email) {
            alert("You need a name and email.");
            return;
        }

        if (!age) {
            alert("You need to enter your birthday");
            return;
        }

        if (password.length <8) {
            alert("You need at least 8 characters")
            return;
        }

        const formData = {
            name: fullname,
            email: email,
            password: password,
            age: age,
            state: state,
            remember: remember,
            gender: gender,
            comments: comments
        };

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "submit.json", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
               const response = JSON.parse(xhr.responseText);
               document.getElementById("message").innerHTML = response.message;
               document.getElementById("myForm").innerHTML = "";
            } else if (xhr.readyState === 4) {
                alert('Error submitting form.');
            }
        };
        xhr.send(JSON.stringify(formData));
        console.log(formData);
        });