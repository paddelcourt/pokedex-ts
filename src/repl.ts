import { State } from "./state.js";


export function cleanInput(input: string): string[] {
  const array = input.toLowerCase().trim().split(/\s+/)
  return array

}


export function startREPL(state: State) {

    const rl = state.readline

    rl.prompt()

    const commandList = state.commands

    rl.on("line", (input) =>  {
        const word = cleanInput(input)
        const commandName = word[0]


        if (word.length === 0) {
            rl.prompt()
            return
        }

        else {
            if(commandName in commandList) {

              try {
                const args = word.slice(1);
                commandList[commandName].callback(state, ...args);
              }
              catch (e) {
                  console.log(e)
    }
            rl.prompt()
                return
                
            }

            else {
                console.log("Unknown command")
                rl.prompt()
                return

            }
            
    }
    
});
}