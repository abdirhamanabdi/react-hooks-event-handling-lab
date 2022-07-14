// Code Keypad Component Here
export default function Keypad(){

    return(
    <input type="password" id="keypad" 
    onChange={(e) => console.log("Entering password...")}
    />
    )
}