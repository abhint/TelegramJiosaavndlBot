export default function minutesC(seconds: number) {
    let minutes: number = Math.floor(seconds / 60);
    let second: number = Math.floor(seconds % 60);
    return `${minutes}:${second}`
}