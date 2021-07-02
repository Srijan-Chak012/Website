var dict = {};
if (typeof (Storage) !== "undefined") 
{
    for (var key in sessionStorage) 
    {
        try 
        {
            var data = JSON.parse(sessionStorage.getItem(key));
            if (data.check === "ThisIsFormData") 
            {
                document.getElementById('InsertHere').innerHTML += '<tr><td>' + key + '</td><td>' + data.lastname + '</td><td>' + data.skill +
                    '</td><td>' + data.email + '</td><td>' + data.level + '</td></tr>';
            }
        } 
        
        catch (err) 
        {
            ;
        }
    }
}

function validateForm() 
{
    var x = document.forms["skillform"]["fname"].value;
    if (x == "") {
        alert("First Name must be filled out");
        return false;
    }

    x = document.forms["skillform"]["lname"].value;
    if (x == "") {
        alert("Last Name must be filled out");
        return false;
    }

    var x = document.forms["skillform"]["email"].value;
    if (x == "") {
        alert("Email must be filled out");
        return false;
    }

    x = document.forms["skillform"]["skillname"].value;
    if (x == "") {
        alert("Skill must be filled out");
        return false;
    }
    
    x = document.forms["skillform"]["proficiency"].value;
    if (x == "") {
        alert("Proficiency must be filled out");
        return false;
    }
    addData();
    reset();
    alert("Thank you for your feedback!!");
    return false;
}

function addData() {
    var firstname = document.forms["skillform"]["fname"].value;
    var lastname = document.forms["skillform"]["lname"].value;
    var skill = document.forms["skillform"]["skillname"].value;
    var email = document.forms["skillform"]["email"].value;
    var level = document.forms["skillform"]["proficiency"].value;
    var check = "ThisIsFormData";
    dict[firstname] = { lastname, email, skill, level, check };
    if (typeof (Storage) !== "undefined") 
    {
        sessionStorage.setItem(firstname, JSON.stringify(dict[firstname]));
    }
    document.getElementById('InsertHere').innerHTML += '<tr><td>' + firstname + '</td><td>' + lastname + '</td><td>' + skill +
        '</td><td>' + email + '</td><td>' + level + '</td></tr>';
}

function reset() 
{
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("skillname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("level").value = "";
    //document.getElementById
}
