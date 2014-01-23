// This function is to check if the input is an integer or not and larger than zero
function numberCheck(nc)
	{
		var nb = parseInt(nc);
		
		// if input is smaler or equal than one, is not a number, isn't an integer or there is no input it returns true
		if ((nb <= 1) || (nc == NaN) || (nc != nb) || (nc == null))
			{
				return(true);
			}
		else
			{
				return(false);
			}
	}
				
// This function is to check, if input contains a full stop, meaning it is a decimal number or a space
function isJustNumber(dc)
	{
		// indexOf returns position of the first occurence of a specified value in a string
		// if "." or " " is not present it returns value of -1
		if ((dc.indexOf(".") != -1) || (dc.indexOf(" ") != -1))
			{
				return(true);
			}
		else
			{
				return(false);
			}
	}

// This function is to check whether the input is a prime number or not
function isPrime(h)
	{
		var x;
		var g = parseInt(h);
		// Because number is a product of two numbers where one of them is always smaller than squared root of the number, we can use it as a top limit for this function
		var gSquared = Math.sqrt(g);
		var y = parseInt(gSquared);
		
		// is a prime number, but because we want just a odd numbers in function we need to get 2 out of the way
		if (g == 2)
			{
				return(true);
			}
		
		// any even number apart from 2 is not prime number
		if (g % 2 == 0)
			{
				return(false);
			}
		
		// now the loop that checks if there is any number which have 0 reminder from input, if yes input is not prime, if the loop reach square root of input the input has to be prime
		else
			{
				// it starts at 3 and increase x by 2 every thime, because even numbers don't have to be checked
				for (x = 3; x <= y ; x = x + 2)
					{
						if (g % x == 0)
							{
								return(false);
							}
					}
				return(true);
			}
	}
		
// This function is for either ending the function or returning to the begining
// "history.go(0)" taken from http://www.htmlgoodies.com/tutorials/getting_started/article.php/3479551/Reloading-The-Page.htm
function startOver()
	{
		var over = confirm("To restart program press OK\nTo quit press cancel");
		if (over == true)
			{
				history.go(0);
			}
	}
 
// here start the switch between two functions
var input1 = window.prompt("Please enter your choice: \nEnter 1 to find out if a number is prime \nEnter 2 to show all prime numbers between two chosen numbers: ","0");
var choice = parseInt(input1);

switch(input1)
  {
    
	case "1":
		
		// call for an input of number to be checked
		var input2 = window.prompt("Enter number to find out whether it's prime or not: ","0");
				
		// call function numberCheck to find out if input is valid integer
		if (numberCheck(input2) == true)
			{
				alert("Your entry ( " + input2 + " ) is not acceptable\nYou can enter only round integer number greater than 1");
				startOver();
			}
		
		// call function isJustNumber to find out if number have full stop or space
		else if (isJustNumber(input2) == true)
			{
				alert("Your entry includes '.' or space\nYou can enter only round integer number greater than 1");
				startOver();				
			}	
		
		// call function isPrime to find out if number is not prime
		else if (isPrime(input2) == false)
			{
				alert(input2 + " is not prime");
				startOver();
			}
		
		// call function isPrime to find out if number is not prime
		else if (isPrime(input2) == true)
			{
				alert(input2 + " is prime");
				startOver();
			}

		// and a little fail-save in case something unexpected went wrong
		else
			{
				alert("something went wrong");
				startOver();
			}		
			
		break;
		
	case "2":

		// inputs (lower and upper limit)
		var input3 = window.prompt("Enter number from which you want to show all prime numbers: ","0");
		var input4 = window.prompt("Enter number until which you want to show all prime numbers: ","0");
		var par1 = parseInt(input3);
		var par2 = parseInt(input4);
		var p;
		
		// call function numberCheck to find out if input is valid integer
		if (numberCheck(input3) == true)
			{
				alert("Your entry ( " + input3 + " ) is not acceptable\nYou can enter only round integer number greater than 1");
				startOver();
			}
		
		// call function numberCheck to find out if input is valid integer
		else if (numberCheck(input4) == true)
			{
				alert("Your entry ( " + input4 + " ) is not acceptable\nYou can enter only round integer number greater than 1");
				startOver();
			}
		
		// call function isJustNumber to find out if number have full stop or space
		else if (isJustNumber(input3) == true)
			{
				alert("Your entry includes '.' or space\nYou can enter only round integer number greater than 1");
				startOver();				
			}
			
		// call function isJustNumber to find out if number have full stop or space
		else if (isJustNumber(input4) == true)
			{
				alert("Your entry includes '.' or space\nYou can enter only round integer number greater than 1");
				startOver();				
			}
		
		// this is to find out whether upper limit is actualy larger than lower limit
		else if (par2 <= par1)
			{
				alert("Second number must be higher than first");
				startOver();
			}
		
		// now to print all prime numbers between the two inputs
		else
			{
				// Little heading (just to make it look better :o) )
				document.writeln("<h2> These are all of the prime numbers between the numbers that you have chosen: </h2> </br>")
				// anyPrimes is here so we know if function return any primes
				var anyPrimes = 0
				// because this function would not take two as prime, we have to add it extra
				if (par1 == 2)
					{
						document.writeln("2 is prime </br>");
						par1++;
					}
					
				// if input is even, we add 1 so we can check only odd numbers
				else if (par1 % 2 == 0)
					{
						par1++;
					}
				
				// loop to print out every prime number between two inputs 
				for (p = par1; p <= par2; p = p + 2)
					{
						if (isPrime(p) == true)
							{
								document.writeln(p + " is prime </br>");
								anyPrimes = 1;
							}
					}
			}
		// in case that there were no prime numbers between our two inputs	
		if (anyPrimes == 0)
					{
						document.writeln("Sorry, there are no prime numbers between " + input3 + " and " + input4 + ".")
					}
		break;
		
    // if input for switch is not 1 or 2
	default:
      alert("Your choice was not correct!")
	  startOver();
  }
  // THE END