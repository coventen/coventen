

export const generateUniqueId = (prefix: string, counter: number) => {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2);
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const invoiceID = `${prefix}${year}${month}${day}${counter}`;
  
    return invoiceID;
  }
  
