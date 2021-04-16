

//Entity: LuisHamburger
//LuisHamburger. (Button) View: FormulariolLMHM
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONNDQNZHK_354804 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;

    
    let nombre = entities.LuisHamburger.nombre;
    let apellido = entities.LuisHamburger.apellido;
    let edad  = entities.LuisHamburger.edad;
    
    alert("Hola "+ nombre + " " + apellido + " con " + edad + " años");
};