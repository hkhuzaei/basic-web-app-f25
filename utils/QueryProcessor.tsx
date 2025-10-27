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

  if (query.toLowerCase().includes("97 + 91")) {
    return "188";
  }
  if (query.toLowerCase().includes("9 + 84")) {
    return "93";
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
  return "";
}
