export function validate(input) {
    let errors = {};
    if(!input.name){
      errors.name ="Name is required"
    } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(input.name)) {
      errors.name = 'Activity name is invalid';
    } else if(!input.difficulty){
      errors.difficulty ="Dificulty is required"
    } else if(!input.season){
      errors.season ="Please select season"
    } else if(input.countries.length < 1){
      errors.countries ="Please select the countries where this activity is practiced"
    } 
    
    return errors;
  }
