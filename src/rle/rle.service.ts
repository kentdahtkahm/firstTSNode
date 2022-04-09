export const encode = async(toEncode: string): Promise<string> => {
    //check if toEncode is longer than 0 and not null
    if (!toEncode) {
        return "ERROR";
    }
    
    // use string concatenation, no string builder class
    let encoded: string = "";
    let currentChar: string = toEncode.charAt(0);
    let nextChar: string = "";
    let counter: number = 1;

    // basic algorithm for now
    for (let i = 0; i < toEncode.length; i++) {
        nextChar = toEncode.charAt(i+1);
        if (currentChar == nextChar) {
            counter++;
        } else {
            encoded = encoded.concat(counter.toString(), currentChar);
            counter = 1;
        }

        currentChar = nextChar;
    }

    return encoded;
 };

 export const decode = async(toDecode: string): Promise<string> => {
    //check if toEncode is longer than 0 and not null
    if (!toDecode) {
        return "ERROR";
    }

    // use string concatenation, no string builder class
    let decoded: string = "";

    const regex = /(\d+)(.)/gi;
    let split = toDecode.split(regex);

    // pair match, then number, then character
    for (let i = 1; i < split.length; i = i + 3) {
        // console.log(split[i]);
        decoded = decoded.concat(split[i+1].repeat(Number(split[i])));
    }

    return decoded;
 };