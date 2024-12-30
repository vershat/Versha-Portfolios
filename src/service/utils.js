const formatTextWithListsAndBold = (text) => {
  const boldPattern = /\*\*(.*?)\*\*/g; // Regex to find text between **
  const numberedListPattern = /^\d+\./; // Regex to detect lines starting with a number and a period

  return text.split("\n").map((line, index) => {
    // Check if the line matches the numbered list pattern
    if (numberedListPattern.test(line)) {
      const parts = line.split(boldPattern).map((part, i) => {
        if (i % 2 === 1) {
          // Render bold text for parts wrapped in **
          return <strong key={`${index}-${i}`}>{part}</strong>;
        }
        return part; // Plain text
      });
      return (
        <p key={index} className="">
          {parts}
        </p>
      );
    } else {
      // Handle regular lines and bold formatting
      const parts = line.split(boldPattern).map((part, i) => {
        if (i % 2 === 1) {
          return <strong key={`${index}-${i}`}>{part}</strong>;
        }
        return part;
      });
      return <p key={index}>{parts}</p>;
    }
  });
};

export default formatTextWithListsAndBold;
