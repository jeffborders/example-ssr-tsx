export default function(word: string): string {
   return word.replace(/^\w/, letter => letter.toUpperCase());
}
