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
    const primesMatch = query.match(/which of the following numbers are primes.*?([\d,\s]+)/i);
    if (primesMatch) {
      const numbers = primesMatch[1].split(",").map(n => parseInt(n.trim()));
      const result = numbers.filter(n => {
        if (isNaN(n) || n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i === 0) return false;
        }
        return true;
      });
      return result.length > 0 ? result.join(", ") : "None of the numbers are prime.";
    }
  }

  if (query.toLowerCase().includes("plus")) {
    // Extract all numbers from the query
    const numbers = query.match(/\d+/g)?.map(Number);
  
    if (numbers && numbers.length > 0) {
      const result = numbers.reduce((acc, curr) => acc + curr, 0);
      return result.toString();
    } else {
      return "I couldn't find any numbers to add.";
    }
  }

  if (query.toLowerCase().includes("to the power of")) {
    // Extract the two numbers
    const numbers = query.match(/\d+/g)?.map(Number);
  
    if (numbers && numbers.length === 2) {
      const result = Math.pow(numbers[0], numbers[1]);
      return result.toString();
    } else {
      return "I couldn't find two numbers to calculate power.";
    }
  }

  if (query.toLowerCase().includes("plus") || query.toLowerCase().includes("multiplied by")) {
    // Split the query into parts by "plus"
    const additionParts = query.toLowerCase().split("plus").map(part => part.trim());
  
    let total = 0;
  
    additionParts.forEach(part => {
      if (part.includes("multiplied by")) {
        // Handle multiplication inside this part
        const numbers = part.match(/\d+/g)?.map(Number);
        if (numbers && numbers.length === 2) {
          total += numbers[0] * numbers[1];
        }
      } else {
        // Single number, just add it
        const number = parseInt(part.match(/\d+/)?.[0] || "0");
        total += number;
      }
    });
  
    return total.toString();
  }
  
  return "";
}
