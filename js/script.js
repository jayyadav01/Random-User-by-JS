fetch('https://randomuser.me/api/')
.then((data) => {
    return data.json();
})
.then((result) => {
    console.log(result);
    importdata(result);
})

function importdata(apidata)
{
    let data = document.querySelector('#info');

    let img = document.createElement('img');
    img.src = apidata.results[0].picture.large;
    document.querySelector('#img').append(img);

    let names = document.createElement('h1');
    names.innerHTML = apidata.results[0].name.first + ' ' + apidata.results[0].name.last;
    data.append(names);

    let email = document.createElement('h4');
    email.innerHTML = 'Email : ' + apidata.results[0].email;
    data.append(email);

    let age = document.createElement('h4');
    age.innerHTML = 'Age : ' + apidata.results[0].dob.age;
    data.append(age);

    let phone = document.createElement('h4');
    phone.innerHTML = 'Phone : ' + apidata.results[0].cell;
    data.append(phone);
}