let password = "pg@"

if (password.length > 6 && password.includes("@")) {
    console.log("Your password meets the security criteria");
}else{
    console.log("Your password does not meet the security criteria");
}