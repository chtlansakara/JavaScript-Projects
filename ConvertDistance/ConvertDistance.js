

function convertLength(length, from, to){
  let convertedLength = '';
  if(from === 'miles'){
    if(to === 'miles'){
      alert('Same unit chosen!');
      return;
    }else if(to === 'km'){
      convertedLength = length * 1.6;
      console.log(`Conversion from miles to km: ${convertedLength}km`);
    }else if( to === 'ft'){
      convertedLength = length * 5280;
      console.log(`Conversion from miles to feet: ${convertedLength}ft`);
    }
  }
  if(from === 'km'){
    if(to === 'km'){
      alert('Same unit chosen!');
    }else if(to === 'miles'){
      convertedLength = length / 1.6;
      console.log(`Conversion from km to miles: ${convertedLength} miles`);
    }else if( to === 'ft'){
      convertedLength = length * 3281;
      console.log(`Conversion from km to feet: ${convertedLength}ft`);
    }
  }
  if(from === 'ft'){
    if(to === 'ft'){
      alert('Same unit chosen!');
    }else if(to === 'miles'){
      convertedLength = length / 5280;
      console.log(`Conversion from feet to miles: ${convertedLength} miles`);
    }else if( to === 'km'){
      convertedLength = length / 3281;
      console.log(`Conversion from feet to km: ${convertedLength}km`);
    }
  }

  return convertedLength;
}

function convert(){
  //hide previous results
  hideResults();


  // get user input
  const distanceInputElement = document.querySelector('.js-text-input');
  const length = distanceInputElement.value;

  //for no user input
  if(!length){
    alert('Enter length to convert!!');
  }else{
     console.log(`User input is: ${length}`);

    //get from-unit
    const fromUnitElement = document.getElementById('fromUnit');
    const from = fromUnitElement.value;
    console.log(`From unit is: ${from}`);

    //get to-unit
    const toUnitElement = document.getElementById('toUnit');
    const to = toUnitElement.value;
    console.log(`To unit is: ${to}`);

    //get converted value
    const convertedLength = convertLength(length, from, to);

    //display results - when not 'undefined'
    if(convertedLength){
      showResults(convertedLength, to);
    }

  } 

}

function showResults(outputLength, to){
  //get display element
  const displayElement = document.querySelector('.js-display-box');
  displayElement.innerHTML = `Converted length is: ${outputLength} ${to}`;
  console.log(`Converted length is: ${outputLength} ${to}`);
}

function hideResults(){
    //get display element
  const displayElement = document.querySelector('.js-display-box');
  displayElement.innerHTML = '';
}