console.log("Hello World");
    const myName = "jake senayo";
    let age = 20;
    const number = 9163214632;
    const address = "victorias city brgy 8 bat-us";

    console.log(`Name: ${myName}`);
    console.log(`Age: ${age}`);
    console.log(`Number: ${number}`);
    console.log(`Adress: ${address}`);


    //functions 

    function greet(name) {

        return `good morning, ${name}`;


    }
    console.log(greet("Rene"));


    //function 
    function add(a, b) {
        return a + b;
    }
    function mdas(num1, num2) {
        let m = num1 * num2;
        let d = num1 / num2;
        let a = num1 + num2;
        let s = num1 - num2;
        return (`values: ${num1} and ${num2}\n product: ${m}\n quotient: ${d}\n sum: ${a}\n difference: ${s}`);


    }

    console.log(mdas(5, 3));

    //query selector

    const heading = document.querySelector("h1");
    console.log(heading);

    const contactHeading = document.querySelector("#contact h2");
    console.log(contactHeading);

    const projectsHeading = document.querySelector("#projects h2");
    console.log(projectsHeading);
    const servicesHeading = document.querySelector("#services h2");
    console.log(servicesHeading);

    //text Content
    heading.textContent = "My Portfolio";
    contactHeading.textContent = "lets connect";
    projectsHeading.textContent = "My Projects";
    servicesHeading.textContent = "My Services";

    //.style
    heading.style.color = "purple";
    heading.style.backgroundColor = "yellow";
    contactHeading.style.color = "purple";
    projectsHeading.style.color = "purple";
    servicesHeading.style.color = "purple";

    heading.addEventListener("click", function () {
        heading.style.color = "red";
    }

    );
    const toggleButton = document.querySelector('#switch');
    const body = document.querySelector('body');
    let isOff = false;

    toggleButton.addEventListener("click", function () {
        isOff = !isOff;

        if (isOff) {
            body.style.backgroundColor = "black";
            body.style.color = "white";
            
        } else {
            body.style.backgroundColor = "white";
            body.style.color = "black";
        }
    });


