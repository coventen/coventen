





export const generateUniqueId = (prefix: string, counter: number) => {
  // const now = new Date();
  // const year = now.getFullYear().toString().slice(-2);
  // const month = (now.getMonth() + 1).toString().padStart(2, '0');
  // const day = now.getDate().toString().padStart(2, '0');
  // const hours = now.getHours().toString().padStart(2, '0');
  // const minutes = now.getMinutes().toString().padStart(2, '0');
  // const seconds = now.getSeconds().toString().padStart(2, '0');
  // const timestamp = `${month}${day}${hours}${minutes}${seconds}`;
  // const uniqueCounter = counter.toString().padStart(4, '0'); 
  const timestamp = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14);
  const ticketId = `${prefix}${timestamp}${counter}`;

  return ticketId;
}
