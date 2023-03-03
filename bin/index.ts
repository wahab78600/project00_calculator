#! /usr/bin/env node
import inquirer from "inquirer";

async function askQuestion(){
      const ans = await inquirer
    .prompt([
       /* Pass your questions in here*/
       {
        type:"list",
        name:"operator",
        message:"Which operation you want to perform? \n",
        choices:["Addition", "Subtraction","Multiplication", "Division"]
       },
       {
        type:"number",
        name:"num1",
        message:"Enter number 1:"
       },
       {
        type:"number",
        name:"num2",
        message:"Enter number 2:"
       }
    ]);
    
     if
     (ans.operator == "Addition"){
         console.log(`${ans.num1} + ${ans.num2} = ${ans.num1 + ans.num2}`);
     }
     else if
     (ans.operator == "Subtraction"){
        console.log(`${ans.num1} - ${ans.num2} = ${ans.num1 - ans.num2}`);
     }
     else if
     (ans.operator == "Multiplication"){
        console.log(`${ans.num1} * ${ans.num2} = ${ans.num1 * ans.num2}`);
     }
     else if
     (ans.operator == "Division"){
        console.log(`${ans.num1} / ${ans.num2} = ${ans.num1 / ans.num2}`);
     }
    }

 //askQuestion();

 async function startAgain(){
   do{
    await askQuestion();
    var again=await inquirer
    .prompt({
        type:"input",
        name:"restart",
        message:"Do you want to continue? Press y or n:"
    })
   }
   while(again.restart == 'y' || again.restart == 'Y' || again.restart=='yes' || again.restart == 'YES' )
 }
 startAgain();