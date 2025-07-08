document.getElementById("check-btn").addEventListener("click", function() {
    let input = document.querySelector("#input").value;
    let res = document.querySelector("#output-text");
    input = input.toLowerCase();
    input = input.replace(/\s/g, ""); // Remove all whitespace
    let reversedInput = input.split("").reverse().join("");
    if (input === reversedInput) {
        res.innerHTML = "IT IS A PALINDROME";
    } else {
        res.innerHTML = "IT IS NOT A PALINDROME";
    }
});

// Optional: Clear button functionality
document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("input").value = "";
    document.getElementById("output-text").innerHTML = "";
});