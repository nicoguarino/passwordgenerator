# Nico Guarino Portfolio

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Code Sample](#code-sample)
- [Acknowledgement](#acknowledgement)
- [Contributing](#contributing)
- [License](#license)

## About <a name = "about"></a>

Password Generator Website is designed to give you a random password with lowercase letters, highercase letters, numbers, and keyboard special characters. One can pick a length between 8-128 characters.

## Getting Started <a name = "getting-started"></a>

* [Git Hub Pull](https://github.com/nicoguarino/portfolio.git)
* [Password Generator Website](https://nicoguarino.github.io/passwordgenerator/)

## Code Sample <a name = "code-sample"></a>

![Sample Code](https://github.com/nicoguarino/portfolio/blob/main/assests/images/sample_code.png?raw=true "Sample Code")

### Sample Code
```HTML Sample
    <header>
        <h1>Password Generator</h1>
    </header>
      <div class="card">
        <div class="card-header">
          <h2>Generate a Password</h2>
        </div>
        <div class="card-body">
          <textarea
            readonly
            id="password"
            placeholder="Your Secure Password"
            aria-label="Generated Password"
          ></textarea>
        </div>
        <div class="card-footer">
          <button id="generate" class="btn">Generate Password</button>
```

```CSS Sample
.wrapper {
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
}

header {
  text-align: center;
  padding: 20px;
  padding-top: 0px;
  color: hsl(206, 17%, 28%);
}

.card {
  background-color: hsl(0, 0%, 100%);
  border-radius: 5px;
  border-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px 0px;
  color: hsl(206, 17%, 28%);
  font-size: 18px;
  margin: 0 auto;
  max-width: 800px;
  padding: 30px 40px;
}
```
```JavaScript Sample
// generator (function to run generator) that prompts length of password
 var generatePassword = function() {

  passwordLength = prompt("Please choose a character length between 8 and 128");

  if(passwordLength >= 8 && passwordLength <= 128) {

    randomizePassword();

    return pwd;

   } else {

     alert("Please pick a character length between 8-128");

     generatePassword();
   }
};
```

## Authors and acknowledgement <a name = "acknowledgement"></a>

Nico (Filipu) Guarino
Password Generator Web Team

## Contributing <a name = "contributing"></a>

Password Generator website is open for contrubiting, however check with the creator first before making any permanent changes. The creator is opening to creative ideas and tweeking of design, but it must be approved first.

## License <a name = "license">

(c) 2021 Password Generator
