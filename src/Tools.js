const generateRandomID = ()=>  {
    const rndMax = 20000;
    const rndMin = 0;
    return Math.floor(Math.random() * (rndMax - rndMin + 1)) + rndMin;
}

export {generateRandomID}