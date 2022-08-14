
  // export const knightIsAwake = ''; archerIsAwake; prisonerIsAwake; petDogIsPresent;
 
export function canExecuteFastAttack(knightIsAwake) {
  
  if (knightIsAwake === true){
  return (false); 
  }else{
    return true;
  }}


 
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    if (knightIsAwake === false && prisonerIsAwake === false && archerIsAwake)
            return (true);

    else if(knightIsAwake === false && prisonerIsAwake && archerIsAwake === false){
            return true;
    }
    else if(knightIsAwake === false && prisonerIsAwake && archerIsAwake){
            return true;
    }
    else if(knightIsAwake && prisonerIsAwake && archerIsAwake === false){
            return true;
    }
    else if(knightIsAwake && prisonerIsAwake === false && archerIsAwake === false){
            return true;
    }
    else if(knightIsAwake && prisonerIsAwake && archerIsAwake){
            return true;
    }
    else{
            return false;
    }
  }

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (prisonerIsAwake && archerIsAwake === false)
  return (true);else{
    return false;
  }
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  if (knightIsAwake === false && prisonerIsAwake === true && archerIsAwake === false && petDogIsPresent)
  return (true);

  else if (knightIsAwake === false && prisonerIsAwake && archerIsAwake === false && petDogIsPresent === false)
  return (true);

  else if (knightIsAwake === false && prisonerIsAwake === false && archerIsAwake === false && petDogIsPresent === true)
  return (true);
  
  else if (knightIsAwake && prisonerIsAwake && archerIsAwake === false && petDogIsPresent)
  return (true);

  else if (knightIsAwake  && prisonerIsAwake === false && archerIsAwake === false && petDogIsPresent)
  return (true);
  
  else{
    return false;
  }
}
