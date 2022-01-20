export const getRandom = (min: number = 0, max: number = 100): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
export const getRandomUUID = (): string => {
    return crypto.getRandomValues(new Uint8Array(16)).toString();
}