export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Haneen";
  }

  if (query.toLowerCase().includes("what is your andrew id")) {
    return "hkhuzaei"; 
  }

  if (query.toLowerCase().includes("name")) {
    return "Haneen";
  }

  if (query.toLowerCase().includes("plus")) {
    // Extract numbers from the query
    const numbers = query.match(/\d+/g)?.map(Number);
  
    if (numbers && numbers.length === 2) {
      const result = numbers[0] + numbers[1];
      return result.toString();
    } else {
      return "I couldn't find two numbers to add.";
    }
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    // Extract all numbers from the question
    const numbers = query.match(/\d+/g)?.map(Number);
  
    // Check if numbers were found
    if (numbers && numbers.length > 0) {
      const largest = Math.max(...numbers);
      return largest.toString();
    } else {
      return "I couldn’t find any numbers in your question.";
    }
  }

  if (query.toLowerCase().includes("which of the following numbers is both a square and a cube")) {
    // Extract all numbers from the question
    const numbers = query.match(/\d+/g)?.map(Number);
  
    if (numbers && numbers.length > 0) {
      // Filter numbers that are both perfect squares and cubes (i.e., perfect 6th powers)
      const result = numbers.filter(num => {
        const sixthRoot = Math.round(Math.pow(num, 1/6));
        return Math.pow(sixthRoot, 6) === num;
      });
  
      // Return the matching numbers as a comma-separated string or a fallback message
      return result.length > 0
        ? result.join(", ")
        : "None of the numbers are both perfect squares and cubes.";
    } else {
      return "I couldn’t find any numbers in your question.";
    }
  }

  if (query.toLowerCase().includes("multiplied by")) {
    // Extract the two numbers
    const numbers = query.match(/\d+/g)?.map(Number);
  
    if (numbers && numbers.length === 2) {
      const result = numbers[0] * numbers[1];
      return result.toString();
    } else {
      return "I couldn't find two numbers to multiply.";
    }
  }
  if (query.toLowerCase().includes("minus")) {
    // Extract numbers from the query
    const numbers = query.match(/\d+/g)?.map(Number);
  
    if (numbers && numbers.length === 2) {
      const result = numbers[0] - numbers[1];
      return result.toString();
    } else {
      return "I couldn't find two numbers to subtract.";
    }
  }

  if (query.toLowerCase().includes("prime")) {
    // Extract numbers from the query
    const numbers = query.match(/\d+/g)?.map(Number);
  
    if (numbers && numbers.length > 0) {
      // Helper function to check if a number is prime
      const isPrime = (num: number) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      };
  
      // Filter prime numbers
      const primes = numbers.filter(isPrime);
  
      if (primes.length > 0) {
        return `The prime numbers are: ${primes.join(", ")}`;
      } else {
        return "None of the numbers are prime.";
      }
    } else {
      return "I couldn't find any numbers to check for primality.";
    }
  }
  return "";
}
